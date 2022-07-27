// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForward24RegularIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowForward24RegularIcon(
  props: ArrowForward24RegularIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 43"}
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
          "M23.314 11.245l.116-.15c.423-.475 1.087-.518 1.554-.13l.134.13 7.953 8.915c.424.474.462 1.217.116 1.74l-.116.151-7.953 8.925a1.105 1.105 0 01-1.688.002c-.424-.475-.463-1.218-.117-1.742l.116-.15 5.907-6.631-23.367.002c-.604 0-1.104-.504-1.183-1.157l-.01-.181c0-.678.449-1.237 1.031-1.326l.162-.012 23.387-.002-5.927-6.642c-.423-.475-.462-1.219-.115-1.742l.116-.15-.116.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForward24RegularIcon;
/* prettier-ignore-end */
