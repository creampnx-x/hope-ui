import { createIcon } from "../icon/create-icon";

export const IconCheckCircle = createIcon({
  path: () => (
    <g fill="none" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </g>
  ),
});