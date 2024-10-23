import { IconProps } from "types/icons"

export const DeleteIcon = ({ size = 20, color = "#FF3B30" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.33301 5.83333H16.6663M4.16634 5.83333L4.99967 15.8333C4.99967 16.2754 5.17527 16.6993 5.48783 17.0118C5.80039 17.3244 6.22431 17.5 6.66634 17.5H13.333C13.775 17.5 14.199 17.3244 14.5115 17.0118C14.8241 16.6993 14.9997 16.2754 14.9997 15.8333L15.833 5.83333M7.49967 5.83333V3.33333C7.49967 3.11232 7.58747 2.90036 7.74375 2.74408C7.90003 2.5878 8.11199 2.5 8.33301 2.5H11.6663C11.8874 2.5 12.0993 2.5878 12.2556 2.74408C12.4119 2.90036 12.4997 3.11232 12.4997 3.33333V5.83333M8.33301 10L11.6663 13.3333M11.6663 10L8.33301 13.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
