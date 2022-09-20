// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid62Icon(props: Xmlid62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 4"}
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

      <path d={"M8.637 3.1L0 0v3.1h8.637z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Xmlid62Icon;
/* prettier-ignore-end */
