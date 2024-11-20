import { ChevronDownIcon } from "@components/Icons/ChevronDownIcon"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import TradeTokenButton from "./TradeTokenButton"
import AgentLiveInfo from "./AgentLiveInfo"
import useFetchDetail from "@pages/ChatPage/Mobile/ChatDetail/useFetch"
import AvatarContainer from "@components/AvatarContainer"
import { LiveIcon } from "@components/Icons"
import { twMerge } from "tailwind-merge"
import { PATH_NAMES } from "@constants/index"

const ChatLiveHeader = () => {
  const navigate = useNavigate()
  const { groupDetail } = useFetchDetail()
  const isLive = groupDetail ? groupDetail.group.live === 1 : false

  return (
    <div className="fixed left-0 top-0 z-20 flex h-14 w-full items-center gap-3 bg-mercury-30 px-3 md:hidden">
      <div className="flex flex-1 items-center gap-3">
        <Button
          onClick={() => navigate(PATH_NAMES.HOME)}
          className="h-[38px] w-[38px] min-w-[38px] rotate-90 rounded-full bg-mercury-70 p-0"
        >
          <ChevronDownIcon />
        </Button>
        {groupDetail ? (
          <AvatarContainer
            badgeIcon={<LiveIcon />}
            avatarUrl={groupDetail.group.image}
            publicAddress={groupDetail.group.name}
            userName={groupDetail.group.name}
            badgeClassName={isLive ? "bg-lgd-code-hot-ramp" : ""}
            isLive={isLive}
            usernameClassName={twMerge(
              isLive &&
                "bg-lgd-code-hot-ramp bg-clip-text text-transparent font-bold text-[16px]",
            )}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="flex items-center gap-3">
        <AgentLiveInfo />
        <TradeTokenButton />
      </div>
    </div>
  )
}

export default ChatLiveHeader