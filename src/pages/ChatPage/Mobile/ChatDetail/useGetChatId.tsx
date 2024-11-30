import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getGroupDetailFromLabel } from "services/chat"
import { QueryDataKeys } from "types/queryDataKeys"

const useGetChatId = () => {
  const { chatId: chatIdParam } = useParams()

  const getChatId = async () => {
    try {
      if (chatIdParam?.includes("@")) {
        let newChatIdParam = chatIdParam
        if (chatIdParam === "@maxisbuyin") {
          newChatIdParam = "@maxisbuyin_"
        }
        const res = await getGroupDetailFromLabel(newChatIdParam)
        return res?.data?.id
      }

      return chatIdParam
    } catch (error) {
      console.log("error", error)
    }
  }

  const { data: chatId } = useQuery({
    queryKey: [QueryDataKeys.CHAT_ID_BY_USERNAME, chatIdParam],
    queryFn: getChatId,
    staleTime: 60 * 60 * 1000,
    enabled: !!chatIdParam,
  })

  return { chatId, originalChatId: chatIdParam }
}

export default useGetChatId
