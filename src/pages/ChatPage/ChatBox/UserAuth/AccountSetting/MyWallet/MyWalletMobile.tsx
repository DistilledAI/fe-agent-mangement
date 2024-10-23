import MyCredits from "../Credits"
import Language from "../Language"
import NotificationSetting from "../Notification"
import AgentCreative from "../Creative"
import VoiceChat from "../VoiceChat"
import VoiceCharacter from "../VoiceCharacter"
import PrivateAgent from "../Agent"
import PrivateAgentPod from "../AgentPod"

const MyWalletMobile = () => {
  return (
    <>
      <MyCredits />
      <PrivateAgent />
      <PrivateAgentPod />
      <div className="flex gap-3">
        <Language />
        <NotificationSetting />
      </div>
      <AgentCreative />
      <div className="flex gap-3">
        <VoiceCharacter />
        <VoiceChat />
      </div>
    </>
  )
}

export default MyWalletMobile