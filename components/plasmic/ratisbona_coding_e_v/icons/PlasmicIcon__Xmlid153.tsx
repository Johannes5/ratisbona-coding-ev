// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid153IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid153Icon(props: Xmlid153IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 46"}
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
        d={"M0 19.778L34.733 0l42.56 22.94-41.07 22.444L0 19.778z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid153Icon;
/* prettier-ignore-end */
