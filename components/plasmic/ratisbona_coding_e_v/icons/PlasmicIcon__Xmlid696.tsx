// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid696IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid696Icon(props: Xmlid696IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 146 38"}
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
          "M0 12.592l28.83 16.802s8.388.744 1.367-5.642L4.784 9.616 0 12.592zm101.526 18.104l9.32-4.402s4.784-4.526 0-5.022l-9.32 4.712c0 .062-4.97 5.766 0 4.712zm-6.896-7.874L126.192 6.95s7.332-9.424-.808-6.324l-33.24 17.608 2.485 4.588zm51.197-16.988l-26.22 15.5s-5.157-1.302 0-5.766L145.827.626v5.208zM65.8 37.95l8.014-5.27s3.418-2.852 0-3.968L65.8 33.3c0 .062-4.536 4.34 0 4.65zm-50.764-7.254L3.728 24.93s-3.23-3.844.124-3.658l11.184 5.022c0 .062 4.039 4.526 0 4.402zm29.281 1.731c.398-1.021-.73-2.413-2.52-3.11-1.791-.695-3.566-.432-3.964.59-.399 1.02.73 2.412 2.52 3.108 1.79.696 3.565.433 3.964-.588z"
        }
        opacity={".41"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid696Icon;
/* prettier-ignore-end */
