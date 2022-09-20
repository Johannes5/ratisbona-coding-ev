// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid586IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid586Icon(props: Xmlid586IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 7"}
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
          "M6.09 6.82c3.362 0 6.088-1.527 6.088-3.41C12.178 1.527 9.452 0 6.09 0 2.726 0 0 1.527 0 3.41c0 1.883 2.726 3.41 6.09 3.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid586Icon;
/* prettier-ignore-end */
