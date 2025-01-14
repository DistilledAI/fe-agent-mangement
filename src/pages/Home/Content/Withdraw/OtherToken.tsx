import useAuthState from "@hooks/useAuthState"
import useConnectWallet from "@hooks/useConnectWallet"
import { Button, Input } from "@nextui-org/react"
// import { useEffect, useState } from "react"
// import { LOCK_TIME_OPTIONS } from "../constants"
// import { twMerge } from "tailwind-merge"
// import { useWallet } from "@solana/wallet-adapter-react"
// import { Web3SolanaProgramInteraction } from "program/utils/web3Utils"
// import { ALL_CONFIGS } from "program/config"
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes"
import {
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js"
import {
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token"
import { useState } from "react"
import { toBN } from "@utils/format"
import { toast } from "react-toastify"
import { SOLANA_RPC, SOLANA_WS } from "program/utils/web3Utils"
import { fetchApiAuth } from "services/fetchApi"
import endpoint from "services/endpoint"
import { useAppSelector } from "@hooks/useAppRedux"

// const web3Solana = new Web3SolanaProgramInteraction()
// const web3Locking = new Web3SolanaLockingToken()

// const endpointAgent = "http://15.235.226.9:7000"

const SOL_COMPUTE_UNIT_LIMIT = 100000
const SOL_MICRO_LAMPORTS = 100000
const setComputeUnitLimit = ComputeBudgetProgram.setComputeUnitLimit({
  units: SOL_COMPUTE_UNIT_LIMIT,
})
const setComputePriceLimit = ComputeBudgetProgram.setComputeUnitPrice({
  microLamports: SOL_MICRO_LAMPORTS,
})

const WithdrawOtherToken = () => {
  const { loading, connectMultipleWallet } = useConnectWallet()
  const myAgent = useAppSelector((state) => state.agents.myAgent)
  const { isLogin, isAnonymous, user } = useAuthState()
  const [amountInput, setAmountInput] = useState("0")
  const [txh, setTxh] = useState("")
  const [decimal, setDecimal] = useState("6")
  const [toAccount, setToAccount] = useState("")
  const [assetAddress, setAssetAddress] = useState("")
  const [submitLoading, setSubmitLoading] = useState(false)
  const isConnectWallet = isLogin && !isAnonymous

  const getProvider = () => {
    if ("solana" in window) {
      const provider = (window as any).solana
      if (provider.isPhantom) {
        return provider
      }
    }

    return null
  }

  const getInfoBot = async () => {
    const res = await fetchApiAuth({
      method: "post",
      url: endpoint.CALL_AGENT,
      data: {
        botId: myAgent?.id,
        path: "/private_agent/info",
      },
    })
    return res.data
  }

  const handleWithdraw = async () => {
    try {
      if (!amountInput || !toAccount || !assetAddress) {
        toast.warning("Please enter all info")
        return
      }
      setTxh("")
      setSubmitLoading(true)
      const botInfo = await getInfoBot()
      const provider = getProvider()
      if (!provider) return
      const timestamp = Math.floor(Date.now())
      await provider.request({ method: "connect" })

      const token = new PublicKey(assetAddress)

      const senderTokenAccount = await getAssociatedTokenAddress(
        token,
        new PublicKey(botInfo.sol_address),
      )

      const receiverTokenAccount = await getAssociatedTokenAddress(
        token,
        new PublicKey(toAccount),
      )

      const msgSign = {
        action: "sign_solana",
        timestamp: timestamp,
      }

      const message = JSON.stringify(msgSign)
      const encodedMessage = new TextEncoder().encode(message)
      const signedMessage = await provider.signMessage(encodedMessage, "utf8")
      const signature = bs58.encode(signedMessage.signature)

      const amount = toBN(
        toBN(amountInput || 0)
          .multipliedBy(10 ** Number(decimal))
          .toFixed(0, 1),
      ).toNumber()
      const transaction = new Transaction()
        .add(setComputePriceLimit)
        .add(setComputeUnitLimit)
        .add(
          createTransferCheckedInstruction(
            senderTokenAccount, // Source token account
            token, // Mint address of the token
            receiverTokenAccount, // Destination token account
            new PublicKey(botInfo.sol_address),
            amount, // Amount of USDC to transfer (1 USDC = 1e6 for 6 decimals)
            6, // Decimals (USDC has 6 decimals on Solana)
          ),
        )

      const connection = new Connection(SOLANA_RPC, {
        commitment: "confirmed",
        wsEndpoint: SOLANA_WS,
      })

      const { blockhash } = await connection.getLatestBlockhash()

      transaction.recentBlockhash = blockhash
      transaction.feePayer = new PublicKey(botInfo.sol_address)
      const TxSendToDistill = transaction?.serializeMessage()

      const msgDataTx = TxSendToDistill.toString("hex")

      const resp = await fetchApiAuth({
        method: "post",
        url: endpoint.CALL_AGENT,
        data: {
          botId: myAgent?.id,
          path: "/wallet/sign-solana",
          body: {
            data: {
              metadata: {
                message: msgDataTx,
              },
              signer_addr: user.publicAddress,
              timestamp,
              network: "solana",
            },
            signature,
          },
        },
      })

      console.log("resp", resp)

      transaction.addSignature(
        new PublicKey(botInfo.sol_address),
        Buffer.from(resp.data.signature),
      )
      const txid = await connection.sendRawTransaction(
        transaction.serialize(),
        {
          skipPreflight: true,
          maxRetries: 5,
        },
      )

      await connection.confirmTransaction(txid, "confirmed")
      setSubmitLoading(false)
      if (txid) {
        toast.success("Withdraw successfully!")
      }
      setTxh(txid)
      console.log(`txid--> ${txid}`)
    } catch (error) {
      console.log(error)
      setSubmitLoading(false)
    }
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1">
      <div>
        <p className="text-18 font-semibold">Withdraw Other Token</p>
        {txh && (
          <div className="mb-2 flex flex-col">
            <p className="text-14 font-semibold text-green-10">
              Withdraw successfully - Tx:
            </p>{" "}
            <p className="break-all text-15">{txh}</p>
          </div>
        )}
        <div className="mt-5 rounded-md bg-mercury-70 p-6">
          <div>
            <p className="mb-1 text-14 font-medium">AMOUNT</p>
            <Input
              defaultValue="0"
              onValueChange={setAmountInput}
              classNames={{
                inputWrapper: "border-1 rounded-md pr-1",
                input: "text-[16px] font-medium",
              }}
              type="number"
            />
          </div>
          <div className="mt-4">
            <p className="mb-1 text-14 font-medium">ASSET</p>
            <Input
              placeholder="Enter address"
              onValueChange={setAssetAddress}
              classNames={{
                inputWrapper: "border-1 rounded-md pr-1",
                input: "text-[16px] font-medium",
              }}
            />
          </div>
          <div className="mt-4">
            <p className="mb-1 text-14 font-medium">DECIMAL</p>
            <Input
              onValueChange={setDecimal}
              defaultValue="6"
              value={decimal}
              classNames={{
                inputWrapper: "border-1 rounded-md pr-1",
                input: "text-[16px] font-medium",
              }}
              type="number"
            />
          </div>
          <div className="mt-4">
            <p className="mb-1 text-14 font-medium">TO</p>
            <Input
              placeholder="Enter address"
              onValueChange={setToAccount}
              classNames={{
                inputWrapper: "border-1 rounded-md pr-1",
                input: "text-[16px] font-medium",
              }}
            />
          </div>
          {isConnectWallet ? (
            <Button
              isLoading={submitLoading}
              onClick={handleWithdraw}
              className="text-semibold mt-10 h-11 w-full rounded-md bg-mercury-200"
            >
              <span className="font-bold">WITHDRAW</span>
            </Button>
          ) : (
            <Button
              onClick={connectMultipleWallet}
              isLoading={loading}
              className="text-semibold mt-10 h-11 w-full rounded-md bg-mercury-200"
            >
              <span className="font-bold">CONNECT WALLET</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default WithdrawOtherToken
