// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid152IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid152Icon(props: Xmlid152IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 45"}
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
        d={"M34.733 19.468V0L0 19.778 34.733 44.33V19.468z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid152Icon;
/* prettier-ignore-end */
