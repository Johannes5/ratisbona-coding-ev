// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid130IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid130Icon(props: Xmlid130IconProps) {
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
          "M25.537.558v3.844C16.34 9.796 2.672 17.608.373 18.538c.062-1.054.186-3.596.186-4.278L25.537.558zm.31-.558L.25 14.074S.062 18.166 0 18.91h.062c1.18 0 25.723-14.384 25.723-14.384L25.848 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid130Icon;
/* prettier-ignore-end */
