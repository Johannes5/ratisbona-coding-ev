// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid94IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid94Icon(props: Xmlid94IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 10"}
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
          "M.808 9.362A.822.822 0 010 8.556V.806C0 .372.373 0 .808 0a.82.82 0 01.807.806v7.75a.822.822 0 01-.807.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid94Icon;
/* prettier-ignore-end */
