// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid574IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid574Icon(props: Xmlid574IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 177 82"}
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
          "M0 32.674l88.291 49.228 88.168-49.228V0L88.416 50.716.186 0 0 32.674z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid574Icon;
/* prettier-ignore-end */
