// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid585IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid585Icon(props: Xmlid585IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 4"}
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
          "M2.858 3.224c1.579 0 2.858-.722 2.858-1.612C5.716.722 4.436 0 2.858 0S0 .722 0 1.612c0 .89 1.28 1.612 2.858 1.612z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid585Icon;
/* prettier-ignore-end */
