// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid106IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid106Icon(props: Xmlid106IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 64"}
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
          "M0 63.488l27.525-15.004-.373-41.726s-1.367-5.642-6.71-6.634L19.448 0c-.87.124-1.802.31-2.858.558-1.243.31-2.3.682-3.231 1.054-4.35 3.41-5.84 4.774-6.214 5.27 0 .062-.807 1.054-.807 1.054S.435 17.298.186 23.622L0 63.488z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid106Icon;
/* prettier-ignore-end */
