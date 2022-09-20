// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid84IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid84Icon(props: Xmlid84IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 44"}
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
        d={"M0 12.586L54.18 43.71l-.248-12.648L.124 0 0 12.586z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid84Icon;
/* prettier-ignore-end */
