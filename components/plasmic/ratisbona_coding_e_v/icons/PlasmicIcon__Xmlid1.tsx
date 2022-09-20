// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid1Icon(props: Xmlid1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 188 64"}
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
        d={
          "M187.27 0L93.697 52.886.25 0 0 9.362 93.386 63.24l94.008-53.32L187.27 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid1Icon;
/* prettier-ignore-end */
