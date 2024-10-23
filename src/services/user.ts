import endpoint from "./endpoint"
import { fetchApiAuth } from "./fetchApi"

export const getUser = async () => {
  return fetchApiAuth({
    method: "get",
    url: endpoint.GET_USER,
  })
}

interface IUserUpdate {
  username?: string
  avatar?: string
}
export const updateUser = async (data: IUserUpdate) => {
  return fetchApiAuth({
    method: "POST",
    url: endpoint.UPDATE_USER,
    data,
  })
}

export const uploadMyData = async (file: any) => {
  return fetchApiAuth({
    method: "POST",
    url: endpoint.UPLOAD_MY_DATA,
    data: file,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

export const mapMyDataToBot = async (data: any) => {
  return fetchApiAuth({
    method: "POST",
    url: endpoint.MAP_MY_DATA_TO_BOT,
    data,
  })
}
