// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid143IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid143Icon(props: Xmlid143IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 19"}
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
          "M0 18.476c.062-.93.186-4.03.249-4.588L24.915 0l-.062 4.216C15.533 9.734 1.615 17.98 0 18.476z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid143Icon;
/* prettier-ignore-end */
