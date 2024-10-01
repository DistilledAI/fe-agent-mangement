import endpoint from "./endpoint"
import { fetchApiAuth } from "./fetchApi"

export const getGroupList = async () => {
  return fetchApiAuth({
    method: "get",
    url: endpoint.GET_MY_CHAT_GROUP_LIST,
  })
}

interface IDataChatSendToUser {
  toUserId: number
  messages: string
}
export const postChatSendToUser = async (data: IDataChatSendToUser) => {
  return fetchApiAuth({
    method: "post",
    url: endpoint.CHAT_SEND_TO_USER,
    data,
  })
}

interface IDataCreateGroupChat {
  members: Array<string>
}
export const createGroupChat = async (data: IDataCreateGroupChat) => {
  return fetchApiAuth({
    method: "post",
    url: endpoint.CREATE_GROUP_CHAT,
    data,
  })
}

export const getChatHistoryById = async (id: number) => {
  return fetchApiAuth({
    method: "get",
    url: endpoint.GET_HISTORY_CHAT(id),
  })
}
