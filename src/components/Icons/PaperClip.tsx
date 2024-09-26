import { IconProps } from "types/icons";

export const PaperClipFilledIcon = ({
  size = 20,
  color = "#545454",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M12.5002 5.83339L7.08357 11.2501C6.75205 11.5816 6.56581 12.0312 6.56581 12.5001C6.56581 12.9689 6.75205 13.4185 7.08357 13.7501C7.41509 14.0816 7.86473 14.2678 8.33357 14.2678C8.80242 14.2678 9.25205 14.0816 9.58357 13.7501L15.0002 8.33339C15.6633 7.67034 16.0358 6.77107 16.0358 5.83339C16.0358 4.8957 15.6633 3.99643 15.0002 3.33339C14.3372 2.67034 13.4379 2.29785 12.5002 2.29785C11.5626 2.29785 10.6633 2.67034 10.0002 3.33339L4.58357 8.75005C3.58901 9.74461 3.03027 11.0935 3.03027 12.5001C3.03027 13.9066 3.58901 15.2555 4.58357 16.2501C5.57814 17.2446 6.92705 17.8034 8.33357 17.8034C9.7401 17.8034 11.089 17.2446 12.0836 16.2501L17.5002 10.8334"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
