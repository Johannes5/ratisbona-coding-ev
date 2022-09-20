// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid581IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid581Icon(props: Xmlid581IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 18"}
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
        d={"M6.151 17.608l-5.157-3.1L0 0l7.332.992-1.18 16.616z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid581Icon;
/* prettier-ignore-end */
