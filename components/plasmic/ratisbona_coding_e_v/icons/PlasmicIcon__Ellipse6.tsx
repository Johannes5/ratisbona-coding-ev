// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse6Icon(props: Ellipse6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
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

      <ellipse
        cx={"9.359"}
        cy={"9.522"}
        rx={"9.359"}
        ry={"9.522"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse6Icon;
/* prettier-ignore-end */
