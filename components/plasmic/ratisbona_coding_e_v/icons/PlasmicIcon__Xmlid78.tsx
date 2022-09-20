// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid78Icon(props: Xmlid78IconProps) {
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
        d={"M8.699 0l.186 16.554L.125 21.7 0 4.34 8.699 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid78Icon;
/* prettier-ignore-end */
