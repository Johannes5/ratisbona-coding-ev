// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 882 199"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M515.927 94.106c13.514-.63 36.247 1.903 68.681 41.553 13.346 18.409 39.725 59.643 70.538 52.846"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        transform={"matrix(1 0 .00005 1 9.674 10.188)"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={"M0-1h871.892"}
      ></path>

      <ellipse
        cx={"9.359"}
        cy={"9.522"}
        rx={"9.359"}
        ry={"9.522"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"209.998"}
        cy={"9.522"}
        rx={"8.774"}
        ry={"9.522"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"657.485"}
        cy={"9.522"}
        rx={"9.359"}
        ry={"9.522"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"657.485"}
        cy={"189.254"}
        rx={"9.359"}
        ry={"9.522"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"761.022"}
        cy={"188.659"}
        rx={"8.774"}
        ry={"8.927"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"433.449"}
        cy={"9.522"}
        rx={"8.774"}
        ry={"9.522"}
        fill={"currentColor"}
      ></ellipse>

      <path
        d={"M657.849 189.203l103.997.615"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
