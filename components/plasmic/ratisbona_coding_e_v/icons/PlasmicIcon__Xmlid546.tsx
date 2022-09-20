// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid546IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid546Icon(props: Xmlid546IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 39"}
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
          "M0 1.55v22.94s7.456 15.19 15.533 7.254V10.85s1.864-7.254 8.078 4.216V28.83s8.077 15.004 14.29 7.626V28.83s1.491-4.03 5.84-2.108c4.35 1.922 3.853-2.914 3.853-2.914L8.885 0 0 1.55z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid546Icon;
/* prettier-ignore-end */
