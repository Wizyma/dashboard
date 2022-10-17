import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={16}
    className="manaos-logo"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"colors/white"}</title>
    <defs>
      <path
        d="M11.275 0v5.442L.362 15.556v-5.543L11.275 0Zm8.139 0v5.442L8.5 15.556v-5.543L19.414 0Zm8.5 0v5.442L17 15.556v-5.543L27.914 0Z"
        id="a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#FFF" xlinkHref="#a" />
      <g mask="url(#b)">
        <path fill="#FFF" d="M-5-14h45v45H-5z" />
      </g>
    </g>
  </svg>
);
