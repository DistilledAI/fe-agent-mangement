import { FilledBrainAIIcon } from "@components/Icons/BrainAIIcon"
import { PATH_NAMES } from "@constants/index"
import { AGENT_TYPE, updateAgentType } from "@reducers/agentSlice"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import ActiveEffect from "./ActiveEffect"

const MyEcho: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { privateChatId } = useParams()
  const isActive = [
    PATH_NAMES.HOME,
    PATH_NAMES.PRIVATE_AGENT + "/" + privateChatId,
  ].includes(location.pathname)

  const handleChooseMyEcho = () => {
    navigate("/")
    dispatch(updateAgentType(AGENT_TYPE.MY_ECHO))
  }

  return (
    <div
      className="flex-items-center hover-light-effect group/item group relative gap-2 rounded-full border-white bg-mercury-30 px-2 py-4 aria-selected:border-mercury-100 aria-selected:bg-mercury-100"
      onClick={() => handleChooseMyEcho()}
      aria-selected={!!isActive}
    >
      <FilledBrainAIIcon />
      <span className="text-base font-normal group-aria-selected:font-semibold">
        My Private Agent
      </span>

      <ActiveEffect isActive={isActive} className="bg-mercury-950" />
    </div>
  )
}
export default MyEcho
