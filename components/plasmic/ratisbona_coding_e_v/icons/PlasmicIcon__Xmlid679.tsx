// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid679IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid679Icon(props: Xmlid679IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 18"}
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

      <path d={"M27.339 0H0v17.98h27.339V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Xmlid679Icon;
/* prettier-ignore-end */
