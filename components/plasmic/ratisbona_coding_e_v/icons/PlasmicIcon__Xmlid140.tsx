// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid140IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid140Icon(props: Xmlid140IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 31"}
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
        d={"M36.596 0L0 20.646.249 30.69 45.606 4.65 36.596 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid140Icon;
/* prettier-ignore-end */
