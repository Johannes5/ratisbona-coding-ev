// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid156IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid156Icon(props: Xmlid156IconProps) {
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
        d={"M.124 0L0 16.368l8.947 5.084L8.885 4.34.125 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid156Icon;
/* prettier-ignore-end */
