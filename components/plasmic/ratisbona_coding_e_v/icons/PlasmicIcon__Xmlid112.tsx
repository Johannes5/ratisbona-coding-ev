// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid112IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid112Icon(props: Xmlid112IconProps) {
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
        d={"M.124 0L0 16.368l8.947 4.96L8.885 4.34.125 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid112Icon;
/* prettier-ignore-end */
