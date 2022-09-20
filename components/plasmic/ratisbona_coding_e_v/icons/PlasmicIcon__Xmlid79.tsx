// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid79IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid79Icon(props: Xmlid79IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 22"}
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
        d={"M.124 0L0 16.492 8.947 21.7 8.885 4.34.125 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid79Icon;
/* prettier-ignore-end */
