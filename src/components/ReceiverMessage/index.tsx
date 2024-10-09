import AvatarCustom, { AvatarCustomProps } from "@components/AvatarCustom"
import DotLoading from "@components/DotLoading"
import MarkdownMessage from "@components/Markdown"
import { twMerge } from "tailwind-merge"

interface ReceiverMsgProps {
  content: string
  avatar: AvatarCustomProps
  contentClassName?: string
  isTyping?: boolean
}

const ReceiverMessage = ({
  content,
  avatar,
  contentClassName,
  isTyping,
}: ReceiverMsgProps) => {
  return (
    <div className="flex gap-4">
      <AvatarCustom {...avatar} />
      <div className={twMerge("text-base-md flex-1", contentClassName)}>
        {isTyping ? (
          <DotLoading className="mt-2" />
        ) : (
          <MarkdownMessage msg={content} />
        )}
      </div>
    </div>
  )
}

export default ReceiverMessage
