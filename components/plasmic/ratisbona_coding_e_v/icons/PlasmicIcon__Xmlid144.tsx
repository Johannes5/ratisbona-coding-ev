// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid144IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid144Icon(props: Xmlid144IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 18"}
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
        d={"M37.156 0H.124L0 17.98h37.156l-11.06-8.99L37.156 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid144Icon;
/* prettier-ignore-end */
