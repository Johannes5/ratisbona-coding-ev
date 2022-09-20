// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid102IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid102Icon(props: Xmlid102IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 22"}
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
        d={"M.31 0L0 16.864l9.134 4.712L9.07 4.34.311 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid102Icon;
/* prettier-ignore-end */
