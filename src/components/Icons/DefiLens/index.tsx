import { FunctionComponent } from "react"

export const CheckFilledIcon: FunctionComponent<{
  color?: string
  size?: number
}> = ({ size = 24, color = "#505665" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L12.1213 16.2929C10.9497 17.4645 9.05026 17.4645 7.87868 16.2929L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L9.29289 14.8787C9.68342 15.2692 10.3166 15.2692 10.7071 14.8787L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
        fill={color}
      />
    </svg>
  )
}

export const CloseFilledIcon: FunctionComponent<{
  color?: string
  size?: number
}> = ({ size = 24, color = "#505665" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29292 17.2929C4.9024 17.6834 4.9024 18.3166 5.29292 18.7071C5.68345 19.0976 6.31661 19.0976 6.70714 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0977 6.31658 19.0977 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289Z"
        fill={color}
      />
    </svg>
  )
}

export const EditFilledIcon: FunctionComponent<{
  color?: string
  size?: number
}> = ({ size = 20, color = "#505665" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="UI icon/edit/filled">
        <g id="Vector">
          <path
            d="M3.32132 17.6593L7.74074 16.7754C7.90207 16.7431 8.05023 16.6638 8.16657 16.5475L13.7081 11.006C14.0335 10.6805 14.0335 10.1529 13.7081 9.82745L10.1725 6.29192C9.84709 5.96648 9.31945 5.96648 8.99401 6.29192L3.45252 11.8335C3.33619 11.9498 3.25689 12.098 3.22463 12.2593L2.34074 16.6787C2.22412 17.2618 2.73822 17.7759 3.32132 17.6593Z"
            fill={color}
          />
          <path
            d="M16.827 4.35154L15.6485 3.17303C14.6722 2.19672 13.0893 2.19672 12.113 3.17303L11.2919 3.9941C10.9664 4.31954 10.9664 4.84718 11.2919 5.17261L14.8274 8.70815C15.1529 9.03358 15.6805 9.03358 16.0059 8.70815L16.827 7.88708C17.8033 6.91077 17.8033 5.32785 16.827 4.35154Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  )
}

export const BookMarkOutlineIcon: FunctionComponent<{
  color?: string
  size?: number
}> = ({ size = 20, color = "#57803E" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="bookmark">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6654 15.5417L13.4949 16.6267L13.4967 16.6277C14.484 17.208 15.0886 17.119 15.3526 16.9776C15.5963 16.8471 15.9722 16.4419 15.9722 15.3665V5.78499C15.9722 4.60874 15.676 3.95533 15.3019 3.58555C14.925 3.21309 14.2554 2.91699 13.0556 2.91699H7.50001C6.30013 2.91699 5.63054 3.21309 5.25369 3.58555C4.87953 3.95533 4.58334 4.60874 4.58334 5.78499V15.3665C4.58334 16.4419 4.95926 16.8471 5.20296 16.9776C5.46701 17.119 6.07154 17.208 7.05885 16.6277L7.06067 16.6267L8.8949 15.5389C9.33766 15.2789 9.83957 15.1833 10.2778 15.1833C10.716 15.1833 11.2179 15.2789 11.6607 15.5389L11.6654 15.5417ZM7.69445 17.7041L9.52779 16.6168C9.94445 16.3722 10.6111 16.3722 11.0278 16.6168L12.8611 17.7041C15.2639 19.1175 17.2222 18.071 17.2222 15.3665V5.78499C17.2222 3.03966 15.8333 1.66699 13.0556 1.66699H7.50001C4.72223 1.66699 3.33334 3.03966 3.33334 5.78499V15.3665C3.33334 18.071 5.29168 19.1175 7.69445 17.7041Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export const IconTrendingUp: FunctionComponent<{
  size?: number
}> = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8H18.5858L13 13.5858L10.4142 11C9.63316 10.2189 8.36683 10.219 7.58579 11L2.29289 16.2929C1.90237 16.6834 1.90237 17.3166 2.29289 17.7071C2.68342 18.0976 3.31658 18.0976 3.70711 17.7071L9 12.4142L11.5858 15C12.3668 15.781 13.6332 15.781 14.4142 15L20 9.41421V12C20 12.5523 20.4477 13 21 13C21.5523 13 22 12.5523 22 12V7C22 6.44772 21.5523 6 21 6H16Z"
        fill="#00AB56"
      />
    </svg>
  )
}

export const IconTrendingDown: FunctionComponent<{
  size?: number
}> = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.3907 10.6667H10.6668C10.2986 10.6667 10.0002 10.9651 10.0002 11.3333C10.0002 11.7015 10.2986 12 10.6668 12H14.0002C14.3684 12 14.6668 11.7015 14.6668 11.3333V8C14.6668 7.63181 14.3684 7.33333 14.0002 7.33333C13.632 7.33333 13.3335 7.63181 13.3335 8V9.72386L9.60964 6C9.08894 5.4793 8.24472 5.4793 7.72402 6L6.00016 7.72386L2.47157 4.19526C2.21122 3.93491 1.78911 3.93491 1.52876 4.19526C1.26841 4.45561 1.26841 4.87772 1.52876 5.13807L5.05735 8.66667C5.57805 9.18737 6.42227 9.18737 6.94297 8.66667L8.66683 6.94281L12.3907 10.6667Z"
        fill="#FF424F"
      />
    </svg>
  )
}

export const BgOverbought: FunctionComponent<{
  width?: number
  height?: number
  color1?: string
  color2?: string
}> = ({ width = 40, height = 17, color1 = "#FFC5C5", color2 = "#FFE4E4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 17"
      fill="none"
    >
      <path
        d="M0 17H40L40 0L0 6.26491V17Z"
        fill="url(#paint0_linear_5083_28792)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5083_28792"
          x1="19.8058"
          y1="2.30987"
          x2="20.9171"
          y2="16.9591"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} stop-opacity="0.38" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const BgNeutral: FunctionComponent<{
  width?: number
  height?: number
  color1?: string
  color2?: string
}> = ({ width = 53, height = 26, color1 = "#ECECEC", color2 = "#F2F2F2" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 58 26"
      fill="none"
    >
      <path d="M0 26H58V0L0 9V26Z" fill="url(#paint0_linear_5083_28793)" />
      <defs>
        <linearGradient
          id="paint0_linear_5083_28793"
          x1="28.7184"
          y1="12.011"
          x2="28.9755"
          y2="26.0005"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} stop-opacity="0.38" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const BgOversold: FunctionComponent<{
  width?: number
  height?: number
  color1?: string
  color2?: string
}> = ({ width = 40, height = 38, color1 = "#D9F9C3", color2 = "#EFF9E9" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 38"
      fill="none"
    >
      <path d="M0 38H40V0.5L0 12V38Z" fill="url(#paint0_linear_5083_28794)" />
      <defs>
        <linearGradient
          id="paint0_linear_5083_28794"
          x1="20.3774"
          y1="16"
          x2="19.7864"
          y2="37.9943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} stop-opacity="0.38" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const IconLinkWebsite: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 16, color = "#232125" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.7135 9.49332C12.5202 9.68665 12.2135 9.68665 12.0268 9.49332C11.8335 9.29998 11.8335 8.99332 12.0268 8.80665C13.3602 7.47332 13.3602 5.30665 12.0268 3.97998C10.6935 2.65332 8.52685 2.64665 7.20018 3.97998C5.87352 5.31332 5.86685 7.47998 7.20018 8.80665C7.39352 8.99998 7.39352 9.30665 7.20018 9.49332C7.00685 9.68665 6.70018 9.68665 6.51352 9.49332C4.80018 7.77998 4.80018 4.99332 6.51352 3.28665C8.22685 1.57999 11.0135 1.57332 12.7202 3.28665C14.4268 4.99998 14.4268 7.77998 12.7135 9.49332Z"
        fill={color}
      />
      <path
        d="M3.28681 6.50666C3.48014 6.31333 3.78681 6.31333 3.97348 6.50666C4.16681 6.7 4.16681 7.00666 3.97348 7.19333C2.64014 8.52666 2.64014 10.6933 3.97348 12.02C5.30681 13.3467 7.47348 13.3533 8.80014 12.02C10.1268 10.6867 10.1335 8.52 8.80014 7.19333C8.60681 7 8.60681 6.69333 8.80014 6.50666C8.99348 6.31333 9.30014 6.31333 9.48681 6.50666C11.2001 8.22 11.2001 11.0067 9.48681 12.7133C7.77348 14.42 4.98681 14.4267 3.28014 12.7133C1.57348 11 1.57348 8.22 3.28681 6.50666Z"
        fill={color}
      />
    </svg>
  )
}

export const IconCopy: FunctionComponent<{ size?: number; color?: string }> = ({
  size = 16,
  color = "#232125",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.6668 8.60001V11.4C10.6668 13.7333 9.7335 14.6667 7.40016 14.6667H4.60016C2.26683 14.6667 1.3335 13.7333 1.3335 11.4V8.60001C1.3335 6.26668 2.26683 5.33334 4.60016 5.33334H7.40016C9.7335 5.33334 10.6668 6.26668 10.6668 8.60001Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6668 4.60001V7.40001C14.6668 9.73334 13.7335 10.6667 11.4002 10.6667H10.6668V8.60001C10.6668 6.26668 9.7335 5.33334 7.40016 5.33334H5.3335V4.60001C5.3335 2.26668 6.26683 1.33334 8.60016 1.33334H11.4002C13.7335 1.33334 14.6668 2.26668 14.6668 4.60001Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconLogoTwitter: FunctionComponent<{
  size?: number
  color1?: string
  color2?: string
}> = ({ size = 14, color1 = "#232125", color2 = "#FBFBFB" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7.00016 0.333344C3.31839 0.333344 0.333496 3.31824 0.333496 7.00001C0.333496 10.6818 3.31839 13.6667 7.00016 13.6667C10.6819 13.6667 13.6668 10.6818 13.6668 7.00001C13.6668 3.31824 10.6819 0.333344 7.00016 0.333344Z"
        fill={color1}
      />
      <path
        d="M7.72943 6.3967L10.5833 3.07925H9.90706L7.429 5.95975L5.44978 3.07925H3.16699L6.15995 7.43507L3.16699 10.9139H3.84332L6.46022 7.87203L8.55041 10.9139H10.8332L7.72925 6.3967H7.72943ZM4.087 3.58839H5.1258L9.90737 10.428H8.86857L4.087 3.58839Z"
        fill={color2}
      />
    </svg>
  )
}

export const IconLogoFacebook: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 16, color = "#232125" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00015 1.66666C9.24183 1.68083 10.3636 1.98599 11.3654 2.58216C12.3552 3.16643 13.1786 3.99487 13.7568 4.98827C14.3494 5.9961 14.6527 7.12463 14.6668 8.37388C14.6316 10.0831 14.0925 11.543 13.0495 12.7535C12.0064 13.964 10.6705 14.7129 9.28765 15V10.2077H10.5951L10.8907 8.32449H8.911V7.09102C8.90001 6.83531 8.98088 6.58411 9.13898 6.38283C9.29731 6.18101 9.57611 6.07493 9.97539 6.0646H11.1709V4.41492C11.1537 4.4094 10.991 4.38758 10.6826 4.34945C10.3329 4.30853 9.98116 4.28667 9.62905 4.28398C8.83212 4.28765 8.20186 4.51245 7.73825 4.95838C7.27464 5.40417 7.03781 6.04915 7.02777 6.8933V8.32449H5.52118V10.2077H7.02777V15C5.32977 14.7129 3.99387 13.964 2.95083 12.7535C1.90778 11.543 1.36869 10.0831 1.3335 8.37388C1.34758 7.12458 1.6509 5.99604 2.24347 4.98827C2.8217 3.99487 3.64511 3.16643 4.63496 2.58216C5.63672 1.98611 6.75845 1.68094 8.00015 1.66666Z"
        fill={color}
      />
    </svg>
  )
}

export const IconLogoTelegram: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 16, color = "#232125" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.66667 14.6667C11.3494 14.6667 14.3333 11.6828 14.3333 8.00001C14.3333 4.31723 11.3494 1.33334 7.66667 1.33334C3.98389 1.33334 1 4.31723 1 8.00001C1 11.6828 3.98389 14.6667 7.66667 14.6667ZM4.05056 7.85557L10.4783 5.37723C10.7767 5.26945 11.0372 5.45001 10.9406 5.90112L10.9411 5.90057L9.84667 11.0567C9.76555 11.4222 9.54833 11.5111 9.24444 11.3389L7.57778 10.1106L6.77389 10.885C6.685 10.9739 6.61 11.0489 6.43778 11.0489L6.55611 9.35279L9.645 6.56223C9.77944 6.4439 9.615 6.37723 9.43778 6.49501L5.62056 8.89834L3.975 8.38501C3.61778 8.27168 3.61 8.02779 4.05056 7.85557Z"
        fill={color}
      />
    </svg>
  )
}

export const IconLogoReddit: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 14, color = "#232125" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7.00016 0.333344C3.31883 0.333344 0.333496 3.31867 0.333496 7.00001C0.333496 10.6813 3.31883 13.6667 7.00016 13.6667C10.6815 13.6667 13.6668 10.6813 13.6668 7.00001C13.6668 3.31867 10.6815 0.333344 7.00016 0.333344ZM10.8682 7.88929C10.8828 7.98532 10.8908 8.08267 10.8908 8.18135C10.8908 9.67732 9.14952 10.8894 7.00149 10.8894C4.85345 10.8894 3.11212 9.67732 3.11212 8.18135C3.11212 8.08135 3.12016 7.98268 3.13481 7.88665C2.79616 7.73467 2.56016 7.3947 2.56016 7.00001C2.56016 6.46402 2.99483 6.02803 3.53215 6.02803C3.79348 6.02803 4.02948 6.13067 4.20414 6.29872C4.87878 5.81206 5.81222 5.50129 6.85083 5.47464C6.85083 5.46131 7.33616 3.1493 7.33616 3.1493C7.34552 3.10403 7.37217 3.06528 7.41083 3.04005C7.44948 3.01472 7.49618 3.00668 7.54154 3.01604L9.15755 3.35998C9.27087 3.13069 9.50413 2.972 9.77747 2.972C10.1615 2.972 10.4721 3.28266 10.4721 3.66668C10.4721 4.05069 10.1615 4.36136 9.77747 4.36136C9.40546 4.36136 9.10415 4.06798 9.08685 3.70004L7.64012 3.39202L7.19751 5.47606C8.21751 5.51197 9.13355 5.82132 9.79751 6.30136C9.97217 6.13209 10.2095 6.02803 10.4721 6.02803C11.0096 6.02803 11.4441 6.4627 11.4441 7.00001C11.4441 7.39735 11.2055 7.73732 10.8682 7.88929Z"
        fill={color}
      />
    </svg>
  )
}

export const IconTune: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 24, color = "#232125" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M21.2995 8.08005H15.7195C15.3295 8.08005 15.0195 7.77005 15.0195 7.38005C15.0195 6.99005 15.3295 6.68005 15.7195 6.68005H21.2995C21.6895 6.68005 21.9995 6.99005 21.9995 7.38005C21.9995 7.77005 21.6895 8.08005 21.2995 8.08005Z"
        fill={color}
      />
      <path
        d="M6.42 8.08005H2.7C2.31 8.08005 2 7.77005 2 7.38005C2 6.99005 2.31 6.68005 2.7 6.68005H6.42C6.81 6.68005 7.12 6.99005 7.12 7.38005C7.12 7.77005 6.8 8.08005 6.42 8.08005Z"
        fill={color}
      />
      <path
        d="M10.1395 11.3301C12.321 11.3301 14.0895 9.56158 14.0895 7.38005C14.0895 5.19853 12.321 3.43005 10.1395 3.43005C7.95793 3.43005 6.18945 5.19853 6.18945 7.38005C6.18945 9.56158 7.95793 11.3301 10.1395 11.3301Z"
        fill={color}
      />
      <path
        d="M21.3009 18.31H17.5809C17.1909 18.31 16.8809 18 16.8809 17.61C16.8809 17.22 17.1909 16.91 17.5809 16.91H21.3009C21.6909 16.91 22.0009 17.22 22.0009 17.61C22.0009 18 21.6909 18.31 21.3009 18.31Z"
        fill={color}
      />
      <path
        d="M8.28 18.31H2.7C2.31 18.31 2 18 2 17.61C2 17.22 2.31 16.91 2.7 16.91H8.28C8.67 16.91 8.98 17.22 8.98 17.61C8.98 18 8.66 18.31 8.28 18.31Z"
        fill={color}
      />
      <path
        d="M13.8602 21.57C16.0417 21.57 17.8102 19.8016 17.8102 17.62C17.8102 15.4385 16.0417 13.67 13.8602 13.67C11.6786 13.67 9.91016 15.4385 9.91016 17.62C9.91016 19.8016 11.6786 21.57 13.8602 21.57Z"
        fill={color}
      />
    </svg>
  )
}

export const IconPatternYes: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 20, color = "#00AD26" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0003 1.66669C5.40866 1.66669 1.66699 5.40835 1.66699 10C1.66699 14.5917 5.40866 18.3334 10.0003 18.3334C14.592 18.3334 18.3337 14.5917 18.3337 10C18.3337 5.40835 14.592 1.66669 10.0003 1.66669ZM13.9837 8.08335L9.25866 12.8084C9.14199 12.925 8.98366 12.9917 8.81699 12.9917C8.65033 12.9917 8.49199 12.925 8.37533 12.8084L6.01699 10.45C5.77533 10.2084 5.77533 9.80835 6.01699 9.56669C6.25866 9.32502 6.65866 9.32502 6.90033 9.56669L8.81699 11.4834L13.1003 7.20002C13.342 6.95835 13.742 6.95835 13.9837 7.20002C14.2253 7.44169 14.2253 7.83335 13.9837 8.08335Z"
        fill={color}
      />
    </svg>
  )
}

export const IconPatternNo: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 20, color = "#E01600" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0003 1.66669C5.40866 1.66669 1.66699 5.40835 1.66699 10C1.66699 14.5917 5.40866 18.3334 10.0003 18.3334C14.592 18.3334 18.3337 14.5917 18.3337 10C18.3337 5.40835 14.592 1.66669 10.0003 1.66669ZM12.8003 11.9167C13.042 12.1584 13.042 12.5584 12.8003 12.8C12.6753 12.925 12.517 12.9834 12.3587 12.9834C12.2003 12.9834 12.042 12.925 11.917 12.8L10.0003 10.8834L8.08366 12.8C7.95866 12.925 7.80033 12.9834 7.64199 12.9834C7.48366 12.9834 7.32533 12.925 7.20033 12.8C6.95866 12.5584 6.95866 12.1584 7.20033 11.9167L9.11699 10L7.20033 8.08335C6.95866 7.84169 6.95866 7.44169 7.20033 7.20002C7.44199 6.95835 7.84199 6.95835 8.08366 7.20002L10.0003 9.11669L11.917 7.20002C12.1587 6.95835 12.5587 6.95835 12.8003 7.20002C13.042 7.44169 13.042 7.84169 12.8003 8.08335L10.8837 10L12.8003 11.9167Z"
        fill={color}
      />
    </svg>
  )
}

export const IconAdd: FunctionComponent<{ size?: number; color?: string }> = ({
  size = 20,
  color = "#232125",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5 10H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconSearch: FunctionComponent<{
  size?: number
  color?: string
}> = ({ size = 20, color = "#FBFBFB" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M12.5806 4.9201C12.0793 4.40953 11.4818 4.00333 10.8227 3.72496C10.1635 3.44659 9.45576 3.30158 8.74025 3.29829C8.02475 3.295 7.31568 3.43351 6.654 3.7058C5.99232 3.9781 5.39115 4.37879 4.8852 4.88474C4.37926 5.39069 3.97856 5.99186 3.70627 6.65354C3.43397 7.31521 3.29547 8.02428 3.29876 8.73979C3.30204 9.4553 3.44706 10.1631 3.72542 10.8222C4.00379 11.4814 4.40999 12.0788 4.92056 12.5801C5.93952 13.5805 7.3123 14.1381 8.74025 14.1315C10.1682 14.1249 11.5358 13.5548 12.5455 12.5451C13.5553 11.5353 14.1254 10.1677 14.132 8.73979C14.1385 7.31184 13.581 5.93906 12.5806 4.9201ZM3.74223 3.74177C5.01958 2.46473 6.73652 1.72391 8.54196 1.67079C10.3474 1.61767 12.1049 2.25627 13.4552 3.45599C14.8054 4.65571 15.6463 6.32593 15.8059 8.12508C15.9655 9.92423 15.4318 11.7164 14.3139 13.1351L18.7681 17.5893L17.5897 18.7676L13.1356 14.3134C11.7164 15.4272 9.92577 15.9576 8.12895 15.7964C6.33212 15.6352 4.66448 14.7946 3.46621 13.446C2.26794 12.0974 1.62931 10.3425 1.6806 8.53918C1.73189 6.73587 2.46924 5.02006 3.74223 3.74177Z"
        fill={color}
      />
    </svg>
  )
}

export const IconNoneFeedback: FunctionComponent<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M12.3898 4.2373L10.0648 2.4373C9.7648 2.1373 9.0898 1.9873 8.6398 1.9873H5.7898C4.8898 1.9873 3.9148 2.6623 3.6898 3.5623L1.8898 9.0373C1.5148 10.0873 2.1898 10.9873 3.3148 10.9873H6.3148C6.7648 10.9873 7.1398 11.3623 7.0648 11.8873L6.6898 14.2873C6.5398 14.9623 6.9898 15.7123 7.6648 15.9373C8.2648 16.1623 9.0148 15.8623 9.3148 15.4123L12.3898 10.8373"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M16.2148 4.2375V11.5875C16.2148 12.6375 15.7648 13.0125 14.7148 13.0125H13.9648C12.9148 13.0125 12.4648 12.6375 12.4648 11.5875V4.2375C12.4648 3.1875 12.9148 2.8125 13.9648 2.8125H14.7148C15.7648 2.8125 16.2148 3.1875 16.2148 4.2375Z"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconGaveFeedback: FunctionComponent<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M11.7073 4.12465V11.7446C11.7073 12.0446 11.6173 12.3371 11.4523 12.5846L9.40477 15.6296C9.08227 16.1171 8.27977 16.4621 7.59727 16.2071C6.86227 15.9596 6.37477 15.1346 6.53227 14.3996L6.92227 11.9471C6.95227 11.7221 6.89227 11.5196 6.76477 11.3621C6.63727 11.2196 6.44977 11.1296 6.24727 11.1296H3.16477C2.57227 11.1296 2.06227 10.8896 1.76227 10.4696C1.47727 10.0646 1.42477 9.53965 1.61227 9.00715L3.45727 3.38965C3.68977 2.45965 4.70227 1.70215 5.70727 1.70215H8.63227C9.13477 1.70215 9.83977 1.87465 10.1623 2.19715L11.1223 2.93965C11.4898 3.22465 11.7073 3.65965 11.7073 4.12465Z"
        fill="#FBFBFB"
      />
      <path
        d="M14.092 13.2073H14.8645C16.027 13.2073 16.4995 12.7573 16.4995 11.6473V4.1098C16.4995 2.9998 16.027 2.5498 14.8645 2.5498H14.092C12.9295 2.5498 12.457 2.9998 12.457 4.1098V11.6548C12.457 12.7573 12.9295 13.2073 14.092 13.2073Z"
        fill="#FBFBFB"
      />
    </svg>
  )
}

export const IconUnLiked: FunctionComponent<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M5.60986 13.7628L7.93486 15.5628C8.23486 15.8628 8.90986 16.0128 9.35986 16.0128H12.2099C13.1099 16.0128 14.0849 15.3378 14.3099 14.4378L16.1099 8.96284C16.4849 7.91284 15.8099 7.01284 14.6849 7.01284H11.6849C11.2349 7.01284 10.8599 6.63784 10.9349 6.11284L11.3099 3.71284C11.4599 3.03784 11.0099 2.28784 10.3349 2.06284C9.73486 1.83784 8.98486 2.13784 8.68486 2.58784L5.60986 7.16284"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M1.78516 13.7623V6.4123C1.78516 5.3623 2.23516 4.9873 3.28516 4.9873H4.03516C5.08516 4.9873 5.53516 5.3623 5.53516 6.4123V13.7623C5.53516 14.8123 5.08516 15.1873 4.03516 15.1873H3.28516C2.23516 15.1873 1.78516 14.8123 1.78516 13.7623Z"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconLiked: FunctionComponent<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M6.29273 13.8754V6.25535C6.29273 5.95535 6.38273 5.66285 6.54773 5.41535L8.59523 2.37035C8.91773 1.88285 9.72023 1.53785 10.4027 1.79285C11.1377 2.04035 11.6252 2.86535 11.4677 3.60035L11.0777 6.05285C11.0477 6.27785 11.1077 6.48035 11.2352 6.63785C11.3627 6.78035 11.5502 6.87035 11.7527 6.87035H14.8352C15.4277 6.87035 15.9377 7.11035 16.2377 7.53035C16.5227 7.93535 16.5752 8.46035 16.3877 8.99285L14.5427 14.6104C14.3102 15.5404 13.2977 16.2979 12.2927 16.2979H9.36773C8.86523 16.2979 8.16023 16.1254 7.83773 15.8029L6.87773 15.0604C6.51023 14.7754 6.29273 14.3404 6.29273 13.8754Z"
        fill="#FBFBFB"
      />
      <path
        d="M3.90797 4.7927H3.13547C1.97297 4.7927 1.50047 5.2427 1.50047 6.3527V13.8902C1.50047 15.0002 1.97297 15.4502 3.13547 15.4502H3.90797C5.07047 15.4502 5.54297 15.0002 5.54297 13.8902V6.3452C5.54297 5.2427 5.07047 4.7927 3.90797 4.7927Z"
        fill="#FBFBFB"
      />
    </svg>
  )
}
