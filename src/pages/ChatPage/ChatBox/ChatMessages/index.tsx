import ChatWindow from "@components/ChatWindow"
import ContextCleared from "@components/ContextCleared"
import { FilledBrainAIIcon } from "@components/Icons/BrainAIIcon"
import { FilledUserIcon } from "@components/Icons/UserIcon"
import ReceiverMessage from "@components/ReceiverMessage"
import SenderMessage from "@components/SenderMessage"
import { RoleUser } from "@constants/index"
import { useQueryClient } from "@tanstack/react-query"
import { getActiveColorRandomById } from "@utils/index"
import { useStyleSpacing } from "providers/StyleSpacingProvider"
import { useParams } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { QueryDataKeys } from "types/queryDataKeys"
import ChatActions from "./ChatActions"
import {
  getBadgeColor,
  groupedMessages,
  IMessageBox,
  RoleChat,
} from "./helpers"
import useFetchMessages from "./useFetchMessages"

const ChatMessages = () => {
  const {
    isLoading,
    isFetched,
    onLoadPrevMessages,
    messages,
    hasPreviousMore,
    isFetchingPreviousPage,
  } = useFetchMessages()
  const { chatId } = useParams()
  const { bgColor, textColor } = getActiveColorRandomById(chatId)
  const queryClient = useQueryClient()
  const myPrivateAgent = queryClient.getQueryData([
    QueryDataKeys.DELEGATE_PRIVATE_AGENT,
    chatId,
  ])
  const { spacing } = useStyleSpacing()

  const getBadgeIcon = (role: RoleUser) =>
    role === RoleUser.BOT ? (
      <FilledBrainAIIcon size={14} />
    ) : (
      <FilledUserIcon size={14} />
    )

  const renderMessage = (index: number, message: IMessageBox) => {
    const { paddingBottomStyle, borderRadiusStyle } = groupedMessages(
      index,
      message,
      messages,
    )

    if (message.isChatCleared) {
      return (
        <div
          key={index}
          className="mx-auto flex max-w-[768px] justify-center pb-4"
        >
          <ContextCleared textClassName={textColor} />
        </div>
      )
    }

    return (
      <div
        className={twMerge(
          "mx-auto w-full max-w-[768px] scroll-smooth px-3 pb-4",
          message.role === RoleChat.OWNER && paddingBottomStyle,
        )}
        key={index}
      >
        {message.role === RoleChat.CUSTOMER ? (
          <ReceiverMessage
            avatar={{
              src: message.avatar,
              badgeIcon: getBadgeIcon(message.roleOwner),
              badgeClassName: getBadgeColor(message.roleOwner),
              publicAddress: message.publicAddress,
            }}
            content={message.content}
            isTyping={message.isTyping}
          />
        ) : null}
        {message.role === RoleChat.OWNER ? (
          <SenderMessage
            content={message.content}
            baseClassName={twMerge(bgColor, borderRadiusStyle)}
          />
        ) : null}
      </div>
    )
  }

  return (
    <>
      <ChatWindow
        messages={messages}
        itemContent={renderMessage}
        isLoading={isLoading}
        isFetched={isFetched}
        hasPreviousMore={hasPreviousMore}
        isFetchingPreviousPage={isFetchingPreviousPage}
        onLoadPrevMessages={onLoadPrevMessages}
        chatId={chatId}
        msgBoxClassName="p-0 md:px-4"
        isChatAction={!!myPrivateAgent}
        style={{
          paddingBottom: `${spacing}px`,
        }}
      />
      <ChatActions />
    </>
  )
}

export default ChatMessages
