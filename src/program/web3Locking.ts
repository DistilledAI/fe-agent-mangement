import {
  ALL_CONFIGS,
  STAKE_CONFIG_SEED,
  STAKE_DETAIL_SEED,
  STAKER_INFO_SEED,
  VAULT_SEED,
} from "./config"
import * as anchor from "@coral-xyz/anchor"
import { BN, Program } from "@coral-xyz/anchor"
import { WalletContextState } from "@solana/wallet-adapter-react"
import {
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js"
import { Vault } from "./locking/locking"
import idl from "./locking/locking.json"
import { handleTransaction } from "./utils"
import { SOLANA_RPC, SOLANA_WS } from "./utils/web3Utils"

export const commitmentLevel = "confirmed"
export const TOKEN_RESERVES = 1_000_000_000_000_000
export const LAMPORT_RESERVES = 1_000_000_000
export const vaultProgramId = new PublicKey(idl.address)
export const vaultInterface = JSON.parse(JSON.stringify(idl))

const stakeCurrencyMint = ALL_CONFIGS.STAKE_CURRENCY_MINT

const SOL_COMPUTE_UNIT_LIMIT = 100000
const SOL_MICRO_LAMPORTS = 10000000
const setComputeUnitLimit = ComputeBudgetProgram.setComputeUnitLimit({
  units: SOL_COMPUTE_UNIT_LIMIT,
})
const setComputePriceLimit = ComputeBudgetProgram.setComputeUnitPrice({
  microLamports: SOL_MICRO_LAMPORTS,
})

export class Web3SolanaLockingToken {
  constructor(
    private readonly connection = new Connection(SOLANA_RPC, {
      commitment: commitmentLevel,
      wsEndpoint: SOLANA_WS,
    }),
  ) {}

  async stake(lockPeriod: number, amount: number, botInfo: any, wallet: any) {
    try {
      const provider = new anchor.AnchorProvider(this.connection, wallet, {
        preflightCommitment: "confirmed",
      })
      anchor.setProvider(provider)
      // const program = new Program(vaultInterface, provider) as Program<Vault>
      const program = new Program(
        vaultInterface,
        this.connection as any,
      ) as Program<Vault>

      const [configPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(STAKE_CONFIG_SEED),
          new PublicKey(stakeCurrencyMint).toBytes(),
        ],
        program.programId,
      )
      const [vaultPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(VAULT_SEED),
          configPda.toBytes(),
          new BN(lockPeriod).toBuffer("le", 8),
        ],
        program.programId,
      )
      const [stakerInfoPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(STAKER_INFO_SEED),
          vaultPda.toBytes(),
          new PublicKey(botInfo?.sol_address)?.toBytes(),
        ],
        program.programId,
      )
      let currentId = 0
      try {
        const stakerInfo = await program.account.stakerInfo.fetch(stakerInfoPda)
        currentId = stakerInfo.currentId.toNumber()
      } catch (error) {
        console.error("get number of locked items error", error)
      }

      const [userStakeDetailPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(STAKE_DETAIL_SEED),
          stakerInfoPda.toBytes(),
          new BN(currentId + 1).toBuffer("le", 8),
        ],
        program.programId,
      )

      const cpIx = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 100000,
      })
      const cuIx = ComputeBudgetProgram.setComputeUnitLimit({
        units: 100000,
      })

      const transaction = new Transaction()
        .add(setComputePriceLimit)
        .add(setComputeUnitLimit)
        .add(
          await program.methods
            .stake(new BN(lockPeriod), new BN(amount))
            .accounts({
              signer: new PublicKey(botInfo.sol_address),
              stakeCurrencyMint: stakeCurrencyMint,
              stakeDetailPda: userStakeDetailPda,
            })
            .instruction(),
        )

      transaction.add(cpIx, cuIx)
      transaction.feePayer = new PublicKey(botInfo.sol_address)
      transaction.recentBlockhash = (
        await this.connection.getLatestBlockhash()
      ).blockhash

      return transaction
    } catch (error: any) {
      console.log("Error in locking token transaction", error, error.error)
      const { transaction = "", result } =
        (await handleTransaction({
          error,
          connection: this.connection,
        })) || {}

      if (result?.value?.confirmationStatus) {
        console.log("----confirm----", { transaction, result })
        return { transaction, result }
      }
    }
  }

  async getListLockedOfUser(lockPeriod: number, wallet: WalletContextState) {
    let vaultInfo = { totalStaked: new BN("0") }
    try {
      if (!this.connection) {
        console.log("Warning: Wallet not connected")
        return
      }
      const provider = new anchor.AnchorProvider(
        this.connection,
        wallet as any,
        {
          preflightCommitment: "confirmed",
        },
      )
      anchor.setProvider(provider)
      const program = new Program(vaultInterface, provider) as Program<Vault>

      const [configPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(STAKE_CONFIG_SEED),
          new PublicKey(stakeCurrencyMint).toBytes(),
        ],
        program.programId,
      )
      const [vaultPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(VAULT_SEED),
          configPda.toBytes(),
          new BN(lockPeriod).toBuffer("le", 8),
        ],
        program.programId,
      )

      vaultInfo = (await program.account.vault.fetch(vaultPda)) || {
        totalStaked: new BN("0"),
      }

      if (!wallet.publicKey) {
        return { listLockedItems: [], vaultInfo }
      }

      const [stakerInfoPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(STAKER_INFO_SEED),
          vaultPda.toBytes(),
          wallet.publicKey.toBytes(),
        ],
        program.programId,
      )

      let currentId = 0
      // eslint-disable-next-line no-useless-catch
      try {
        const stakerInfo = await program.account.stakerInfo.fetch(stakerInfoPda)
        currentId = stakerInfo.currentId.toNumber()

        const listLockedItems = await Promise.all(
          [...new Array(currentId)].map(async (_item, key) => {
            const [userStakeDetailPda] = PublicKey.findProgramAddressSync(
              [
                Buffer.from(STAKE_DETAIL_SEED),
                stakerInfoPda.toBytes(),
                new BN(key + 1).toBuffer("le", 8),
              ],
              program.programId,
            )

            const info =
              await program.account.stakeDetail.fetch(userStakeDetailPda)

            return { ...(info || {}), lockPeriod }
          }),
        )

        return { listLockedItems, vaultInfo }
      } catch (error) {
        throw error
      }
    } catch (error) {
      console.log("get list error", error)
      return { listLockedItems: [], vaultInfo }
    }
  }

  async unStake(
    lockPeriod: number,
    id: number,
    amount: number,
    wallet: WalletContextState,
  ) {
    try {
      if (!this.connection || !wallet.publicKey) {
        console.log("Warning: Wallet not connected")
        return
      }
      const provider = new anchor.AnchorProvider(
        this.connection,
        wallet as any,
        {
          preflightCommitment: "confirmed",
        },
      )
      anchor.setProvider(provider)
      const program = new Program(vaultInterface, provider) as Program<Vault>

      const [configPda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from(STAKE_CONFIG_SEED),
          new PublicKey(stakeCurrencyMint).toBytes(),
        ],
        program.programId,
      )
      console.log(configPda)

      const transaction = new Transaction()
      const cpIx = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 1_000_000,
      })
      const cuIx = ComputeBudgetProgram.setComputeUnitLimit({
        units: 200_000,
      })

      const unStakeIx = await program.methods
        .destake(new BN(id), new BN(lockPeriod), new BN(amount))
        .accounts({
          signer: wallet.publicKey,
          stakeCurrencyMint: stakeCurrencyMint,
        })
        .instruction()

      transaction.add(unStakeIx)
      transaction.add(cpIx, cuIx)
      transaction.feePayer = wallet.publicKey
      transaction.recentBlockhash = (
        await this.connection.getLatestBlockhash()
      ).blockhash

      if (wallet.signTransaction) {
        const signedTx = await wallet.signTransaction(transaction)
        const sTx = signedTx.serialize()
        const signature = await this.connection.sendRawTransaction(sTx, {
          preflightCommitment: "confirmed",
          skipPreflight: false,
        })
        const blockhash = await this.connection.getLatestBlockhash()

        const res = await this.connection.confirmTransaction(
          {
            signature,
            blockhash: blockhash.blockhash,
            lastValidBlockHeight: blockhash.lastValidBlockHeight,
          },
          "confirmed", // FIXME: trick lord confirmed / finalized;
        )

        console.log("Successfully unlocking token.\n Signature: ", signature)
        return res
      }
    } catch (error: any) {
      console.log("Error in locking token transaction", error, error.error)
      const { transaction = "", result } =
        (await handleTransaction({
          error,
          connection: this.connection,
        })) || {}

      if (result?.value?.confirmationStatus) {
        console.log("----confirm----", { transaction, result })
        return { transaction, result }
      }
    }
  }

  stakeV2 = async (
    lockPeriod: number,
    lockAmount: number,
    agentWallet: any,
  ) => {
    console.log(`agentWallet`, agentWallet)
    const programInterface = JSON.parse(JSON.stringify(idl)) as Vault

    const connection = new Connection(SOLANA_RPC, {
      commitment: "confirmed",
      wsEndpoint: SOLANA_WS,
    })

    const program = new Program(programInterface, {
      connection,
    }) as Program<Vault>

    const VAULT_SEED = "staking_vault"
    const STAKE_CONFIG_SEED = "staking_config"
    const STAKER_INFO_SEED = "staker_info"
    const STAKE_DETAIL_SEED = "stake_detail"

    const stakeCurrencyMint = new PublicKey(
      "oraim8c9d1nkfuQk9EzGYEUGxqL3MHQYndRw1huVo5h",
    ) // max

    const agentAddress = new PublicKey(agentWallet.sol_address)

    const [configPda] = PublicKey.findProgramAddressSync(
      [Buffer.from(STAKE_CONFIG_SEED), stakeCurrencyMint.toBytes()],
      program.programId,
    )
    const [vaultPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(VAULT_SEED),
        configPda.toBytes(),
        new BN(lockPeriod).toBuffer("le", 8),
      ],
      program.programId,
    )
    const [stakerInfoPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(STAKER_INFO_SEED),
        vaultPda.toBytes(),
        agentAddress.toBytes(),
      ],
      program.programId,
    )
    let currentId = 0
    try {
      const stakerInfo = await program.account.stakerInfo.fetch(stakerInfoPda)
      currentId = stakerInfo.currentId.toNumber()
    } catch (e) {
      console.log(`error when get current id ${e}`)
    }

    const [userStakeDetailPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(STAKE_DETAIL_SEED),
        stakerInfoPda.toBytes(),
        new BN(currentId + 1).toBuffer("le", 8),
      ],
      program.programId,
    )

    const tx = new Transaction()
      .add(setComputePriceLimit)
      .add(setComputeUnitLimit)
      .add(
        await program.methods
          .stake(new BN(lockPeriod), new BN(lockAmount))
          .accounts({
            signer: agentAddress,
            stakeCurrencyMint: stakeCurrencyMint,
            stakeDetailPda: userStakeDetailPda,
          })
          .transaction(),
      )

    tx.feePayer = agentAddress
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

    return tx
  }
}
