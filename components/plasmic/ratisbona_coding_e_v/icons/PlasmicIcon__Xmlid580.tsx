// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid580IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid580Icon(props: Xmlid580IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 15"}
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
        d={"M5.095 14.012L0 10.54V3.1L6.835 0l-1.74 14.012z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid580Icon;
/* prettier-ignore-end */
