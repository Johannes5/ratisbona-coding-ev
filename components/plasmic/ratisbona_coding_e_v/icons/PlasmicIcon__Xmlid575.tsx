// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid575IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid575Icon(props: Xmlid575IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 24"}
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
        d={"M0 23.291l8.077-4.712V6.675S2.3-4.795 0 2.335v20.956z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid575Icon;
/* prettier-ignore-end */
