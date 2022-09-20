// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2uxAq5bBM7QPimw2pErK3f
// Component: JeGt_Q8XkwU
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
import EventBadge from "../../EventBadge"; // plasmic-import: UZdB-6Pp6r/component
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ratisbona_coding_e_v.module.css"; // plasmic-import: 2uxAq5bBM7QPimw2pErK3f/projectcss
import sty from "./PlasmicEventCard.module.css"; // plasmic-import: JeGt_Q8XkwU/css

export type PlasmicEventCard__VariantMembers = {
  hideImage: "hideImage";
  lightBackground: "lightBackground";
};

export type PlasmicEventCard__VariantsArgs = {
  hideImage?: SingleBooleanChoiceArg<"hideImage">;
  lightBackground?: SingleBooleanChoiceArg<"lightBackground">;
};

type VariantPropType = keyof PlasmicEventCard__VariantsArgs;
export const PlasmicEventCard__VariantProps = new Array<VariantPropType>(
  "hideImage",
  "lightBackground"
);

export type PlasmicEventCard__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  ort?: React.ReactNode;
  datum?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEventCard__ArgsType;
export const PlasmicEventCard__ArgProps = new Array<ArgPropType>(
  "title",
  "children",
  "ort",
  "datum",
  "slot"
);

export type PlasmicEventCard__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  description?: p.Flex<"div">;
  images?: p.Flex<"div">;
  slider?: p.Flex<typeof Slider>;
  cardFooter?: p.Flex<"div">;
  line?: p.Flex<"div">;
  footerText?: p.Flex<"div">;
  datum?: p.Flex<"div">;
};

export interface DefaultEventCardProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  ort?: React.ReactNode;
  datum?: React.ReactNode;
  slot?: React.ReactNode;
  hideImage?: SingleBooleanChoiceArg<"hideImage">;
  lightBackground?: SingleBooleanChoiceArg<"lightBackground">;
  className?: string;
}

function PlasmicEventCard__RenderFunc(props: {
  variants: PlasmicEventCard__VariantsArgs;
  args: PlasmicEventCard__ArgsType;
  overrides: PlasmicEventCard__OverridesType;

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

  const $props = {
    ...args,
    ...variants
  };

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
          [sty.rootlightBackground]: hasVariant(
            variants,
            "lightBackground",
            "lightBackground"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ovdZf
                )}
              >
                {"Hackaburg 2023  🏰"}
              </div>
            ),

            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </p.Stack>

        {p.renderPlasmicSlot({
          defaultContents: (
            <EventBadge
              className={classNames("__wab_instance", sty.eventBadge__nzUvO)}
            />
          ),

          value: args.slot
        })}
      </p.Stack>

      <div
        data-plasmic-name={"description"}
        data-plasmic-override={overrides.description}
        className={classNames(projectcss.all, sty.description)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__s3IIx
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {"Our biggest annual event.\n...\n\n-> "}
                </React.Fragment>
                {
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__kWtEl
                    )}
                    component={Link}
                    href={"https://www.hackaburg.de" as const}
                    platform={"nextjs"}
                    target={"_blank" as const}
                  >
                    {"hackaburg.de"}
                  </p.PlasmicLink>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>

      {(hasVariant(variants, "hideImage", "hideImage") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"images"}
          data-plasmic-override={overrides.images}
          hasGap={true}
          className={classNames(projectcss.all, sty.images, {
            [sty.imageshideImage]: hasVariant(
              variants,
              "hideImage",
              "hideImage"
            )
          })}
        >
          <Slider
            data-plasmic-name={"slider"}
            data-plasmic-override={overrides.slider}
            adaptiveHeight={false}
            arrows={true}
            autoplay={true}
            className={classNames("__wab_instance", sty.slider)}
            dots={false}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__suI5Q)}
              displayHeight={"356px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src:
                  "/plasmic/ratisbona_coding_e_v/images/cleanShot20220726At1906262Xpng.png",
                fullWidth: 1250,
                fullHeight: 752,
                aspectRatio: undefined
              }}
            />

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__plqYn)}
              displayHeight={"356px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/ratisbona_coding_e_v/images/image3.png",
                fullWidth: 764,
                fullHeight: 634,
                aspectRatio: undefined
              }}
            />
          </Slider>
        </p.Stack>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"cardFooter"}
        data-plasmic-override={overrides.cardFooter}
        hasGap={true}
        className={classNames(projectcss.all, sty.cardFooter)}
      >
        <div
          data-plasmic-name={"line"}
          data-plasmic-override={overrides.line}
          className={classNames(projectcss.all, sty.line)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"footerText"}
          data-plasmic-override={overrides.footerText}
          hasGap={true}
          className={classNames(projectcss.all, sty.footerText)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__m1Tzt
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {"Techbase Franz-Mayer-Str. 1    "}
                  </React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__tkBrw
                      )}
                      component={Link}
                      href={
                        "https://duckduckgo.com/?q=franz-mayer-str.+1+regensburg&atb=v314-1&ia=web&iaxm=maps" as const
                      }
                      platform={"nextjs"}
                    >
                      {" Karte ↪ "}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ),

            value: args.ort,
            className: classNames(sty.slotTargetOrt)
          })}

          <p.Stack
            as={"div"}
            data-plasmic-name={"datum"}
            data-plasmic-override={overrides.datum}
            hasGap={true}
            className={classNames(projectcss.all, sty.datum)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__l61Pb
                    )}
                  >
                    {"8:00 - open-ended"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uUbyw
                    )}
                  >
                    {"·"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2C6W
                    )}
                  >
                    {"25.08.22"}
                  </div>
                </React.Fragment>
              ),
              value: args.datum,
              className: classNames(sty.slotTargetDatum)
            })}
          </p.Stack>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "freeBox",
    "description",
    "images",
    "slider",
    "cardFooter",
    "line",
    "footerText",
    "datum"
  ],
  header: ["header", "freeBox"],
  freeBox: ["freeBox"],
  description: ["description"],
  images: ["images", "slider"],
  slider: ["slider"],
  cardFooter: ["cardFooter", "line", "footerText", "datum"],
  line: ["line"],
  footerText: ["footerText", "datum"],
  datum: ["datum"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  freeBox: "div";
  description: "div";
  images: "div";
  slider: typeof Slider;
  cardFooter: "div";
  line: "div";
  footerText: "div";
  datum: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEventCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicEventCard__VariantsArgs;
  args?: PlasmicEventCard__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicEventCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicEventCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicEventCard__ArgProps,
          internalVariantPropNames: PlasmicEventCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEventCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEventCard";
  } else {
    func.displayName = `PlasmicEventCard.${nodeName}`;
  }
  return func;
}

export const PlasmicEventCard = Object.assign(
  // Top-level PlasmicEventCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    description: makeNodeComponent("description"),
    images: makeNodeComponent("images"),
    slider: makeNodeComponent("slider"),
    cardFooter: makeNodeComponent("cardFooter"),
    line: makeNodeComponent("line"),
    footerText: makeNodeComponent("footerText"),
    datum: makeNodeComponent("datum"),

    // Metadata about props expected for PlasmicEventCard
    internalVariantProps: PlasmicEventCard__VariantProps,
    internalArgProps: PlasmicEventCard__ArgProps
  }
);

export default PlasmicEventCard;
/* prettier-ignore-end */
