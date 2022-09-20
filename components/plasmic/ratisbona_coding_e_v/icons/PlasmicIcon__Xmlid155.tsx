// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid155IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid155Icon(props: Xmlid155IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 22"}
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
        d={"M8.699 0l.186 16.554-8.76 4.898L0 4.34 8.699 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid155Icon;
/* prettier-ignore-end */
