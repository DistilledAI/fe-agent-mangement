import useAuthState from "@hooks/useAuthState"
import { IUser } from "@reducers/user/UserSlice"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getGroupList } from "services/chat"

export interface IGroup {
  id: number
  name: string
  image?: string
  userAId: number
  userBId: number
  userA: IUser
  userB: IUser
  createBy: number
  status: number
  createdAt: string
}

export interface UserGroup {
  id: number
  userId: number
  groupId: number
  joinedAt: string
  createdAt: string
  group: IGroup
}

interface FetchConfig {
  offset?: number
  limit?: number
  isLoadMore?: boolean
}

const useFetchGroups = () => {
  const [groups, setGroups] = useState<UserGroup[]>([])
  const { isLogin } = useAuthState()
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const isInvited = searchParams.get("isInvited")

  const fetchGroups = async ({
    offset,
    limit,
    isLoadMore = false,
  }: FetchConfig) => {
    try {
      setIsLoading(true)
      const res = await getGroupList(offset, limit)

      if (res.data.items && !isLoadMore) {
        setGroups(res.data.items)
      }

      // load more new groups
      if (res.data.items.length && isLoadMore) {
        setGroups((prevGroups) => [...prevGroups, ...res.data.items])
      }

      return res.data.items ? res.data.items : []
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isLogin || isInvited === "true") fetchGroups({})
    if (isInvited === "true") {
      setSearchParams((params) => {
        params.delete("isInvited")
        return params
      })
    }
  }, [isLogin, isInvited, setSearchParams])

  return { isLoading, groups, fetchGroups, setGroups }
}

export default useFetchGroups
