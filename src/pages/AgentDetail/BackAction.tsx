import { ArrowLeftFilledIcon } from "@components/Icons/Arrow"
import { PATH_NAMES } from "@constants/index"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const BackAction: React.FC = () => {
  const { pathname } = useLocation()
  const { agentId } = useParams()
  const navigate = useNavigate()
  const isAgentDetailPage = pathname === `${PATH_NAMES.AGENT_DETAIL}/${agentId}`

  const goBack = () => {
    navigate(-1)
  }

  if (!isAgentDetailPage) return <div />

  return (
    <div
      className="ml-8 flex cursor-pointer items-center gap-3"
      onClick={goBack}
    >
      <ArrowLeftFilledIcon color="#545454" />
      <span className="text-base-b">Back</span>
    </div>
  )
}
export default BackAction
