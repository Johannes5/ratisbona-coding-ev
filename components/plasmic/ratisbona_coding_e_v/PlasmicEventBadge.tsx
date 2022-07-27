// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2uxAq5bBM7QPimw2pErK3f
// Component: UZdB-6Pp6r
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ratisbona_coding_e_v.module.css"; // plasmic-import: 2uxAq5bBM7QPimw2pErK3f/projectcss
import sty from "./PlasmicEventBadge.module.css"; // plasmic-import: UZdB-6Pp6r/css

export type PlasmicEventBadge__VariantMembers = {
  color: "green" | "orange" | "red" | "blue";
};

export type PlasmicEventBadge__VariantsArgs = {
  color?: SingleChoiceArg<"green" | "orange" | "red" | "blue">;
};

type VariantPropType = keyof PlasmicEventBadge__VariantsArgs;
export const PlasmicEventBadge__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicEventBadge__ArgsType = {};
type ArgPropType = keyof PlasmicEventBadge__ArgsType;
export const PlasmicEventBadge__ArgProps = new Array<ArgPropType>();

export type PlasmicEventBadge__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultEventBadgeProps {
  color?: SingleChoiceArg<"green" | "orange" | "red" | "blue">;
  className?: string;
}

function PlasmicEventBadge__RenderFunc(props: {
  variants: PlasmicEventBadge__VariantsArgs;
  args: PlasmicEventBadge__ArgsType;
  overrides: PlasmicEventBadge__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_orange]: hasVariant(variants, "color", "orange"),
          [sty.rootcolor_red]: hasVariant(variants, "color", "red")
        }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.textcolor_orange]: hasVariant(variants, "color", "orange"),
          [sty.textcolor_red]: hasVariant(variants, "color", "red")
        })}
      >
        {hasVariant(variants, "color", "blue")
          ? "Everybody can come"
          : hasVariant(variants, "color", "red")
          ? "Inner Circle"
          : hasVariant(variants, "color", "orange")
          ? "Members only"
          : "Everybody can apply"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEventBadge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEventBadge__VariantsArgs;
    args?: PlasmicEventBadge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEventBadge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEventBadge__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicEventBadge__ArgProps,
          internalVariantPropNames: PlasmicEventBadge__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEventBadge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEventBadge";
  } else {
    func.displayName = `PlasmicEventBadge.${nodeName}`;
  }
  return func;
}

export const PlasmicEventBadge = Object.assign(
  // Top-level PlasmicEventBadge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicEventBadge
    internalVariantProps: PlasmicEventBadge__VariantProps,
    internalArgProps: PlasmicEventBadge__ArgProps
  }
);

export default PlasmicEventBadge;
/* prettier-ignore-end */
