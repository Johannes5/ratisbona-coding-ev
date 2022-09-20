// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid85Icon(props: Xmlid85IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 9"}
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
        d={"M8.699 0L0 4.34l8.699 4.34 8.698-4.34L8.7 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid85Icon;
/* prettier-ignore-end */
