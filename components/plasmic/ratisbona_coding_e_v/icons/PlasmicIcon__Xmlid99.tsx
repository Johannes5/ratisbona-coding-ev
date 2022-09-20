// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid99IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid99Icon(props: Xmlid99IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 64"}
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
          "M6.108 7.378s-2.361 3.1-4.1 7.998C.95 18.29.33 21.948.204 25.606-.167 34.286.081 58.342.081 63.24l6.773-3.968-.746-51.894zm6.213-5.518S7.475 5.704 6.73 7.006l.373 52.08 5.903-3.41L12.32 1.86zM18.41.124s-4.349.62-5.53 1.612l.498 53.692 6.089-3.534L18.41.124zm6.773 6.448S24.003.62 19.032 0l.87 51.336 5.654-3.286-.373-41.478z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid99Icon;
/* prettier-ignore-end */
