import HeadSectionData from "../Components/HeadSectionData"
import { EditPenFilledIcon } from "@components/Icons/Edit"
import { DeleteIcon } from "@components/Icons/Delete"
import TableData from "../Components/TableData"
import { PhotoPlusIcon } from "@components/Icons/PhotoPlusIcon"
import useWindowSize from "@hooks/useWindowSize"
import TableDataMobile from "../Components/TableDataMobile"

const rows = [
  {
    key: "1",
    name: "me-cv.png",
    type: "Image",
    date: "Oct 8, 2024",
  },
  {
    key: "2",
    name: "profile.mp4",
    type: "Video",
    date: "Oct 8, 2024",
  },
]

enum ColumnKey {
  Name = "name",
  Type = "type",
  Date = "date",
  Action = "action",
}

const columns = [
  {
    key: ColumnKey.Name,
    label: "Name",
  },
  {
    key: ColumnKey.Type,
    label: "Type",
  },
  {
    key: ColumnKey.Date,
    label: "Date",
  },
  {
    key: ColumnKey.Action,
    label: "Action",
  },
]

const MediaData = () => {
  const { isMobile } = useWindowSize()

  const renderCell = (item: Record<string, any>, columnKey: string) => {
    switch (columnKey) {
      case ColumnKey.Type:
      case ColumnKey.Date:
        return (
          <span className="text-base text-mercury-600">{item[columnKey]}</span>
        )
      case ColumnKey.Action:
        return (
          <div className="flex items-center gap-4">
            <div className="cursor-pointer hover:opacity-70">
              <EditPenFilledIcon color="#545454" />
            </div>
            <div className="cursor-pointer hover:opacity-70">
              <DeleteIcon />
            </div>
          </div>
        )

      default:
        return (
          <span className="text-base text-mercury-950">{item[columnKey]}</span>
        )
    }
  }

  const getTdClassName = (key: string) => {
    return key === ColumnKey.Action ? "w-[100px]" : ""
  }

  return (
    <div>
      <HeadSectionData
        iconTitle={<PhotoPlusIcon color="#A2845E" size={24} />}
        title="Photos & Videos "
        addTitle="Add media"
      />
      <div className="mt-4">
        {isMobile ? (
          <TableDataMobile
            data={rows.map((item) => ({
              type: item.type,
              value: item.name,
              createdAt: item.date,
            }))}
          />
        ) : (
          <TableData
            tdClassName={getTdClassName}
            columns={columns}
            rows={rows}
            renderCell={renderCell}
          />
        )}
      </div>
    </div>
  )
}

export default MediaData
