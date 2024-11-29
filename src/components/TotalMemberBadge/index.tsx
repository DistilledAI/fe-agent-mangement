import { FilledUserIcon } from "@components/Icons/UserIcon"
import { useQuery } from "@tanstack/react-query"
import { shortenNumber } from "@utils/index"
import { getTotalMemberGroup } from "services/group"

interface TotalMemberBadgeProps {
  groupId: string
}

const TotalMemberBadge = ({ groupId }: TotalMemberBadgeProps) => {
  const { data } = useQuery({
    queryKey: ["total-member-group", groupId],
    queryFn: () => getTotalMemberGroup(Number(groupId)),
    enabled: !!groupId,
  })

  return (
    <div className="flex h-fit w-fit min-w-[18px] items-center rounded-full bg-[#FF3B30] px-[5px] py-[1px]">
      <FilledUserIcon size={12} color="#FFFFFF" />
      <span className="text-13 font-medium leading-[140%] text-white">
        {shortenNumber(Number(data?.total) || 0)}
      </span>
    </div>
  )
}

export default TotalMemberBadge
