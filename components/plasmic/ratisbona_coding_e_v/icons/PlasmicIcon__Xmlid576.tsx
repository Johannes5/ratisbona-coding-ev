// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid576IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid576Icon(props: Xmlid576IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 39"}
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
          "M37.529 3.72s-.311 16.74-1.492 19.282c-.87 1.86-3.728 17.05-13.669 8.866V12.4s-3.107-4.65-7.456 4.65V27.9S9.942 42.842 0 36.89V21.08L36.286 0l1.242 3.72z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid576Icon;
/* prettier-ignore-end */
