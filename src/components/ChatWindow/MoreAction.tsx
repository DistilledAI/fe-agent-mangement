import { FilledBrainAIIcon } from "@components/Icons/BrainAIIcon"
import { FilledUserIcon } from "@components/Icons/UserIcon"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { changeStatusBotInGroup, checkStatusBotInGroup } from "services/chat"

const BOT_STATUS = {
  ENABLE: 1,
  DISABLE: 0,
}

const MoreAction: React.FC = () => {
  const { chatId, privateChatId } = useParams()
  const [botInfo, setBotInfo] = useState<any>(null)
  const groupId = chatId ?? privateChatId
  const botStatus = botInfo?.status
  const myBotData = botInfo?.myBot
  const botId = myBotData?.id
  const isBotEnabled = botStatus === BOT_STATUS.ENABLE

  const callCheckStatusBotInGroup = async () => {
    try {
      const response = await checkStatusBotInGroup(groupId)
      if (response) {
        const botStatusData = response?.data
        setBotInfo(botStatusData)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    callCheckStatusBotInGroup()
  }, [])

  const handleSetDelegate = async () => {
    const status = isBotEnabled ? BOT_STATUS.DISABLE : BOT_STATUS.ENABLE
    try {
      const payloadData = {
        groupId,
        botId,
        status,
      }
      const response = await changeStatusBotInGroup(payloadData)
      if (response) {
        callCheckStatusBotInGroup()
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  if (!myBotData) return <div />

  return (
    <div className="flex w-full items-center justify-end pb-3">
      <div
        className="flex w-fit cursor-pointer items-center gap-2 rounded-3xl bg-mercury-70 p-3"
        onClick={() => handleSetDelegate()}
      >
        {isBotEnabled ? (
          <>
            <FilledBrainAIIcon size={20} />
            <span className="text-base text-mercury-900">
              Take over this chat by yourself
            </span>
          </>
        ) : (
          <>
            <FilledUserIcon size={20} />
            <span className="text-base text-mercury-900">
              Delegate to your Private agent
            </span>
          </>
        )}
      </div>
    </div>
  )
}
export default MoreAction
