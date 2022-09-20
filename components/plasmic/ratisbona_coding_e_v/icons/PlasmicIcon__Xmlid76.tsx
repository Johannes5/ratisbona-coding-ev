// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid76Icon(props: Xmlid76IconProps) {
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
        d={"M0 0l.124 16.678 8.575 4.96L8.76 4.34 0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid76Icon;
/* prettier-ignore-end */
