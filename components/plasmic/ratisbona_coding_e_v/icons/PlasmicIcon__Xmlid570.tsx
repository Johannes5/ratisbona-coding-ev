// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid570IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid570Icon(props: Xmlid570IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 51"}
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
          "M16.155 47.8l-4.66 2.728.062-38.13S12.489-.064 0 2.478c0 0 12.737-6.82 15.533 2.17l.622 43.152z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid570Icon;
/* prettier-ignore-end */
