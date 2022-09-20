// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid2Icon(props: Xmlid2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 163 55"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".41"}
        d={
          "M145.392 0L80.525 35.898 16.155 0 0 8.68l80.028 45.384L162.85 8.68 145.392 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid2Icon;
/* prettier-ignore-end */
