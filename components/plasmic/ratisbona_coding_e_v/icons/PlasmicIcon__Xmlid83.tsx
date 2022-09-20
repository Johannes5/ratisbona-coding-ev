// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid83Icon(props: Xmlid83IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 44"}
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
        d={"M.249 43.648l53.683-31.372V0L0 31l.249 12.648z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid83Icon;
/* prettier-ignore-end */
