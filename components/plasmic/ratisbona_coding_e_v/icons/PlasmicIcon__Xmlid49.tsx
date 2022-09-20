// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid49Icon(props: Xmlid49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 124"}
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
          "M0 24.738l.062 99.2 11.433-6.634-.373-39.06c-.187-11.408 6.4-18.104 8.76-20.15.56-.434.436-.558 1.12-.744 11.618-3.472 11.929 9.92 11.929 9.92l-.249 37.82L42.81 99.2 42.934 0 0 24.738z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid49Icon;
/* prettier-ignore-end */
