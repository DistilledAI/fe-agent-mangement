import AvatarContainer from "@components/AvatarContainer"
import { FilledSearchIcon } from "@components/Icons/SearchIcon"
import { FilledUserIcon, FilledUsersPlusIcon } from "@components/Icons/UserIcon"
import useAuthState from "@hooks/useAuthState"
import { useNavigate, useParams } from "react-router-dom"
import { ContentDisplayMode, DISPLAY_MODES } from "./PrivateAI"
import useFetchGroup from "./useFetchGroup"

const MessagesContainer: React.FC<ContentDisplayMode> = ({
  onChangeDisplayMode,
}) => {
  const { data } = useFetchGroup()
  const { isLogin } = useAuthState()
  const navigate = useNavigate()
  const { chatId } = useParams()

  return (
    <>
      <div className="flex-items-center mb-4 justify-between px-2">
        <span className="text-base-14">Messages</span>
        <div className="flex-items-center gap-4">
          <FilledUsersPlusIcon />
          <div
            onClick={() => onChangeDisplayMode(DISPLAY_MODES.SEARCH)}
            className="cursor-pointer"
          >
            <FilledSearchIcon />
          </div>
        </div>
      </div>

      {isLogin && (
        <div className="-mx-4 max-h-[calc(100%-143px)] overflow-y-auto px-4">
          {data.map((chat) => (
            <div
              key={chat.id}
              aria-checked={Number(chatId) === chat.groupId}
              onClick={() => navigate(`/chat/${chat.groupId}`)}
              className="hover-light-effect relative mb-1 gap-2 rounded-full px-2 py-2 aria-checked:bg-mercury-100"
            >
              <AvatarContainer
                badgeIcon={<FilledUserIcon size={14} />}
                avatarUrl={chat.group.image}
                userName={`Agent #${chat.groupId}`}
                badgeClassName="bg-[#0FE9A4]"
              />
              {Number(chatId) === chat.groupId && (
                <div className="absolute -left-4 top-1/2 h-[40px] w-[5px] -translate-y-1/2 rounded-br-full rounded-tr-full bg-[#DC6D1E]" />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default MessagesContainer
