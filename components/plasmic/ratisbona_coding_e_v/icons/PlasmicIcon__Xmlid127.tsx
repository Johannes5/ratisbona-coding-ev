// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid127IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid127Icon(props: Xmlid127IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M1.491 2.604c.824 0 1.491-.583 1.491-1.302C2.982.582 2.315 0 1.492 0 .667 0 0 .583 0 1.302c0 .72.668 1.302 1.491 1.302z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid127Icon;
/* prettier-ignore-end */
