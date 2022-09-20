// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid95IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid95Icon(props: Xmlid95IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 10"}
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
          "M.808 9.424A.822.822 0 010 8.618V.868C0 .434.373.062.808.062a.82.82 0 01.807.806v7.75a.822.822 0 01-.807.806z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M1.43 0H.807v.558h.621V0zm-.063 8.866H.746v.558h.62v-.558z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid95Icon;
/* prettier-ignore-end */
