import { combineReducers, Reducer } from "@reduxjs/toolkit"
import agentReducer, { AgentState } from "./agentSlice"
import connectWalletReducer from "./connectWalletSlice"
import sidebarCollapsedReducer from "./sidebarCollapsedSlice"
import instructBannerReducer from "./instructBannerSlice"
import firstLoginReducer from "./firstLoginSlice"
import userReducer, { IUserState } from "./userSlice"

type TReducer = {
  agents: AgentState
  user: IUserState
  sidebarCollapsed: boolean
  connectWalletReducer: any
  instructBanner: boolean
  firstLogin: boolean
}

const rootReducer: Reducer<TReducer> = combineReducers({
  agents: agentReducer,
  user: userReducer,
  sidebarCollapsed: sidebarCollapsedReducer,
  connectWalletReducer: connectWalletReducer,
  instructBanner: instructBannerReducer,
  firstLogin: firstLoginReducer,
})

export default rootReducer
