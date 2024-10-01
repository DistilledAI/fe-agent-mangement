import { IconProps } from "types/icons"

export const SocialLinkIcon = ({ size = 24, color = "#A2845E" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 7.5C11.4696 7.5 10.9609 7.28929 10.5858 6.91421C10.2107 6.53914 10 6.03043 10 5.5C10 4.96957 10.2107 4.46086 10.5858 4.08579C10.9609 3.71071 11.4696 3.5 12 3.5C12.5304 3.5 13.0391 3.71071 13.4142 4.08579C13.7893 4.46086 14 4.96957 14 5.5C14 6.03043 13.7893 6.53914 13.4142 6.91421C13.0391 7.28929 12.5304 7.5 12 7.5ZM12 7.5V11.5M12 11.5C12.7956 11.5 13.5587 11.8161 14.1213 12.3787C14.6839 12.9413 15 13.7044 15 14.5C15 15.2956 14.6839 16.0587 14.1213 16.6213C13.5587 17.1839 12.7956 17.5 12 17.5C11.2044 17.5 10.4413 17.1839 9.87868 16.6213C9.31607 16.0587 9 15.2956 9 14.5C9 13.7044 9.31607 12.9413 9.87868 12.3787C10.4413 11.8161 11.2044 11.5 12 11.5ZM6.7 18.3L9.5 16.3M17.3 18.3L14.5 16.3M3 19.5C3 20.0304 3.21071 20.5391 3.58579 20.9142C3.96086 21.2893 4.46957 21.5 5 21.5C5.53043 21.5 6.03914 21.2893 6.41421 20.9142C6.78929 20.5391 7 20.0304 7 19.5C7 18.9696 6.78929 18.4609 6.41421 18.0858C6.03914 17.7107 5.53043 17.5 5 17.5C4.46957 17.5 3.96086 17.7107 3.58579 18.0858C3.21071 18.4609 3 18.9696 3 19.5ZM17 19.5C17 20.0304 17.2107 20.5391 17.5858 20.9142C17.9609 21.2893 18.4696 21.5 19 21.5C19.5304 21.5 20.0391 21.2893 20.4142 20.9142C20.7893 20.5391 21 20.0304 21 19.5C21 18.9696 20.7893 18.4609 20.4142 18.0858C20.0391 17.7107 19.5304 17.5 19 17.5C18.4696 17.5 17.9609 17.7107 17.5858 18.0858C17.2107 18.4609 17 18.9696 17 19.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export const ThreeDotsIcon = ({ color = "#A2845E" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="2"
      viewBox="0 0 12 2"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.2942 2H0.353027V0H1.2942V2ZM5.05891 2H3.17656V0H5.05891V2ZM8.82362 2H6.94126V0H8.82362V2ZM11.6471 2H10.706V0H11.6471V2Z"
        fill={color}
      />
    </svg>
  )
}