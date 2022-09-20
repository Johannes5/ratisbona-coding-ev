// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid61Icon(props: Xmlid61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 1"}
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
        d={
          "M1.18.868c.653 0 1.181-.194 1.181-.434S1.833 0 1.181 0C.529 0 0 .194 0 .434s.529.434 1.18.434z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid61Icon;
/* prettier-ignore-end */
