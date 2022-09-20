// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid569IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid569Icon(props: Xmlid569IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 188 105"}
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
        d={"M0 51.584l93.448 52.886 93.573-52.886L89.845 0 0 51.584z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid569Icon;
/* prettier-ignore-end */
