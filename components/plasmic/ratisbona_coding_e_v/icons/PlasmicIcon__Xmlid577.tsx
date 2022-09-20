// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid577IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid577Icon(props: Xmlid577IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 44"}
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
          "M56.355 6.076l-12.8 6.882s-4.287 2.79-3.665 6.448c.62 3.596 0 13.392 0 13.392s-4.66 14.632-15.223 9.3v-13.02S28.395 18.662 0 37.014L4.846 26.66 56.355 0v6.076z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid577Icon;
/* prettier-ignore-end */
