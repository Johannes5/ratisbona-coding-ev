// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid75Icon(props: Xmlid75IconProps) {
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
        d={"M8.699 0l.186 16.554L0 21.638V4.34L8.699 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid75Icon;
/* prettier-ignore-end */
