// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid488IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid488Icon(props: Xmlid488IconProps) {
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
        d={"M.186 99.2L42.934 124l.062-99.138L0 0l.186 99.2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid488Icon;
/* prettier-ignore-end */
