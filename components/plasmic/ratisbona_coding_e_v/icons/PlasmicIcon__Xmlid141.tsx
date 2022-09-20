// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid141IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid141Icon(props: Xmlid141IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 32"}
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
        d={"M45.295 20.646L8.761 0 0 5.022l45.357 26.04-.062-10.416z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid141Icon;
/* prettier-ignore-end */
