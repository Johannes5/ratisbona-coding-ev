// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid579IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid579Icon(props: Xmlid579IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 25"}
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
        d={"M7.829 24.738L.373 20.832 0 2.418 9.569 0l-1.74 24.738z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid579Icon;
/* prettier-ignore-end */
