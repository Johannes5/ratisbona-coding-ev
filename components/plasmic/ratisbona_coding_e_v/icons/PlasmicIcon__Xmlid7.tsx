// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid7Icon(props: Xmlid7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 60"}
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
          "M13.048 2.17C8.698.806 4.536.248 0 0v59.458l11.432-6.634-.372-39.06c-.062-4.588.621-8.556 1.988-11.594z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid7Icon;
/* prettier-ignore-end */
