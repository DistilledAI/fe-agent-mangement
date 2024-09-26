import { FunctionComponent } from "react"

export const TrashIcon: FunctionComponent<{
  fill?: string
  size?: number
}> = ({ size = 20, fill = "#505665" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C6.34315 0 5 1.34315 5 3H2H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5H2V17C2 18.6569 3.34315 20 5 20H15C16.6569 20 18 18.6569 18 17V5H19C19.5523 5 20 4.55228 20 4C20 3.44772 19.5523 3 19 3H18H15C15 1.34315 13.6569 0 12 0H8ZM13 3C13 2.44772 12.5523 2 12 2H8C7.44772 2 7 2.44772 7 3H13ZM5 5H4V17C4 17.5523 4.44772 18 5 18H15C15.5523 18 16 17.5523 16 17V5H15H5Z"
        fill={fill}
      />
    </svg>
  )
}
