// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid583IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid583Icon(props: Xmlid583IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 33"}
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
          "M1.698 14.88s-3.604 3.906-.31 4.65c3.292.744 8.2-2.108 9.506.558 1.367 2.604 4.411 13.578 7.393 12.152 2.92-1.426 24.667-13.702 24.667-13.702s6.09-2.79 0-3.534C36.865 14.26 27.607 0 27.607 0L1.697 14.88z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid583Icon;
/* prettier-ignore-end */
