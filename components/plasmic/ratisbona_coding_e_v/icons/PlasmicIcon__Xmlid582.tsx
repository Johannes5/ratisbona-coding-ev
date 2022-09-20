// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid582IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid582Icon(props: Xmlid582IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
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
          "M4.163 4.712c2.3 0 4.163-1.055 4.163-2.356S6.462 0 4.163 0C1.863 0 0 1.055 0 2.356s1.864 2.356 4.163 2.356z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid582Icon;
/* prettier-ignore-end */
