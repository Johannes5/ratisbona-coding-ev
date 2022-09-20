// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid135IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid135Icon(props: Xmlid135IconProps) {
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
          "M0 18.538c.062-.93.186-4.03.249-4.588L25.537 0l-.062 4.216C15.906 9.858 1.615 18.042 0 18.538z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid135Icon;
/* prettier-ignore-end */
