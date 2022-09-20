// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid587IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid587Icon(props: Xmlid587IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 10"}
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
          "M2.485 9.486h-.994A1.51 1.51 0 010 7.998v-6.51A1.51 1.51 0 011.491 0h.994a1.51 1.51 0 011.492 1.488v6.51a1.51 1.51 0 01-1.492 1.488z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid587Icon;
/* prettier-ignore-end */
