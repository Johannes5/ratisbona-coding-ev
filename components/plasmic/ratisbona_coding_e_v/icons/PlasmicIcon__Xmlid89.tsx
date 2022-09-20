// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid89Icon(props: Xmlid89IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 25"}
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
        d={"M34.173 0L0 19.282l8.14 5.394 12.364-6.758 22.368-13.02L34.173 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid89Icon;
/* prettier-ignore-end */
