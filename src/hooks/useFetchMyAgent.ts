import {
  updateMyAgent,
  updateMyAgents,
  updateStatusFetchMyAgent,
} from "@reducers/agentSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getMyPrivateAgent } from "services/chat"
import useAuthState from "./useAuthState"
import { useAppSelector } from "./useAppRedux"

const useFetchMyAgent = () => {
  const { isLogin, isAnonymous } = useAuthState()
  const dispatch = useDispatch()
  const isRefresh = useAppSelector((state) => state.agents.isRefresh)

  const getMyAgent = async () => {
    try {
      dispatch(updateStatusFetchMyAgent("fetching"))
      const res = await getMyPrivateAgent()
      if (res.data) {
        const firstAgent = res?.data?.items?.[0]
        if (firstAgent) {
          dispatch(
            updateMyAgent({
              id: firstAgent.id,
              status: firstAgent.status,
              username: firstAgent.username,
              description: firstAgent.description,
              avatar: firstAgent.avatar,
              publicAddress: firstAgent.publicAddress,
            }),
          )
        } else {
          dispatch(updateMyAgent(null))
        }
        dispatch(updateMyAgents(res?.data?.items || []))
      }
    } catch (error) {
      console.log("error", error)
    } finally {
      dispatch(updateStatusFetchMyAgent("fetched"))
    }
  }

  useEffect(() => {
    const hasGetMyAgent = isLogin && !isAnonymous
    if (hasGetMyAgent) getMyAgent()
    else dispatch(updateMyAgent(null))
  }, [isLogin, isAnonymous, isRefresh])
}

export default useFetchMyAgent
