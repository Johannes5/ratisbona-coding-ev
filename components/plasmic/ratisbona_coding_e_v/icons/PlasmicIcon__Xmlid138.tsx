// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid138IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid138Icon(props: Xmlid138IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 19"}
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
          "M24.916.558v3.844C15.968 9.796 2.61 17.608.373 18.538c.062-1.116.186-3.596.186-4.278L24.916.558zm.31-.558L.25 14.074S.062 18.166 0 18.91h.062c1.18 0 25.164-14.384 25.164-14.384V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid138Icon;
/* prettier-ignore-end */
