// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2uxAq5bBM7QPimw2pErK3f
// Component: _pf0vkQbIGT
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
import Heading from "../../Heading"; // plasmic-import: X6AOmIrJmE/component
import SupportCard from "../../SupportCard"; // plasmic-import: hP5sxMa1ug/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: _oexzkgK5J/component

import { useScreenVariants as useScreenVariantsheKioeNKluyfQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HEKioeNKluyfQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ratisbona_coding_e_v.module.css"; // plasmic-import: 2uxAq5bBM7QPimw2pErK3f/projectcss
import sty from "./PlasmicAboutAlt.module.css"; // plasmic-import: _pf0vkQbIGT/css

import GroupIcon from "./icons/PlasmicIcon__Group"; // plasmic-import: Znyuo0YrdF/icon
import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: 8k_j5ssWFG/icon
import TextIcon from "./icons/PlasmicIcon__Text"; // plasmic-import: mqGymOvZ9x/icon

export type PlasmicAboutAlt__VariantMembers = {};

export type PlasmicAboutAlt__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutAlt__VariantsArgs;
export const PlasmicAboutAlt__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutAlt__ArgsType = {};
type ArgPropType = keyof PlasmicAboutAlt__ArgsType;
export const PlasmicAboutAlt__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutAlt__OverridesType = {
  root?: p.Flex<"div">;
  ratisbonaCodingEVLogo?: p.Flex<"div">;
  group?: p.Flex<"div">;
  logo?: p.Flex<"div">;
  uberUns?: p.Flex<"div">;
  aboutUsCard?: p.Flex<"div">;
  wieDuUnsUnterstutzenKannst?: p.Flex<"div">;
};

export interface DefaultAboutAltProps {}

function PlasmicAboutAlt__RenderFunc(props: {
  variants: PlasmicAboutAlt__VariantsArgs;
  args: PlasmicAboutAlt__ArgsType;
  overrides: PlasmicAboutAlt__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsheKioeNKluyfQ()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hbKtk)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                data-plasmic-name={"ratisbonaCodingEVLogo"}
                data-plasmic-override={overrides.ratisbonaCodingEVLogo}
                className={classNames(
                  projectcss.all,
                  sty.ratisbonaCodingEvLogo
                )}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"group"}
                  data-plasmic-override={overrides.group}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.group)}
                >
                  <div
                    data-plasmic-name={"logo"}
                    data-plasmic-override={overrides.logo}
                    className={classNames(projectcss.all, sty.logo)}
                  >
                    <GroupIcon
                      className={classNames(projectcss.all, sty.svg___08Le6)}
                      role={"img"}
                    />

                    <Group2Icon
                      className={classNames(projectcss.all, sty.svg__hBqQ)}
                      role={"img"}
                    />
                  </div>

                  <TextIcon
                    className={classNames(projectcss.all, sty.svg__ap1Mn)}
                    role={"img"}
                  />
                </p.Stack>
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              data-plasmic-name={"uberUns"}
              data-plasmic-override={overrides.uberUns}
              hasGap={true}
              className={classNames(projectcss.all, sty.uberUns)}
            >
              {true ? (
                <Heading
                  className={classNames("__wab_instance", sty.heading__mc7Ih)}
                >
                  {"Über uns"}
                </Heading>
              ) : null}

              <p.Stack
                as={"div"}
                data-plasmic-name={"aboutUsCard"}
                data-plasmic-override={overrides.aboutUsCard}
                hasGap={true}
                className={classNames(projectcss.all, sty.aboutUsCard)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5FyT4
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"ratisbona-coding e.V."}
                    </span>
                    <React.Fragment>{" ist ein "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"gemeinnütziger Verein"}
                    </span>
                    <React.Fragment>
                      {" aus Regensburg. Wir haben uns "}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"2018"}
                    </span>
                    <React.Fragment>{" aus dem "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"studentischen Organisationsteams"}
                    </span>
                    <React.Fragment>{" des "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Hackaburg Hackathons"}
                    </span>
                    <React.Fragment>
                      {" gegründet.\nWir existieren um "}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Events"}
                    </span>
                    <React.Fragment>{" zu organisieren, die "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Programmierer"}
                    </span>
                    <React.Fragment>{", sowie "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"technologisch gebildete Menschen"}
                    </span>
                    <React.Fragment>{" in der Region "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"schaffen"}
                    </span>
                    <React.Fragment>{" und "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"fördern"}
                    </span>
                    <React.Fragment>{"."}</React.Fragment>
                  </React.Fragment>
                </div>
              </p.Stack>
            </p.Stack>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__efIra)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"70%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/ratisbona_coding_e_v/images/image4.svg",
                fullWidth: 300,
                fullHeight: 84,
                aspectRatio: 3.578635
              }}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"wieDuUnsUnterstutzenKannst"}
              data-plasmic-override={overrides.wieDuUnsUnterstutzenKannst}
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.wieDuUnsUnterstutzenKannst
              )}
            >
              <Heading
                className={classNames("__wab_instance", sty.heading__aEm7I)}
              >
                {"Wie du uns understützen kannst"}
              </Heading>

              <SupportCard
                className={classNames(
                  "__wab_instance",
                  sty.supportCard___929Dx
                )}
                slot={"(Programmier) Expertise teilen"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8NS9Z
                  )}
                >
                  {
                    "Durch das Wort „coding“ in unserem Titel sind wir letztendlich (ob wir es wollen oder nicht) eine Sammelstelle und ein Netzwerk für Programmierer und Menschen deren Tätigkeit sich mit Programmierern überschneidet.\n\nDu kannst dieses Bündnis stärken indem du deine Expertise mit uns teilst.\nAm Einfachsten, indem du zu unseren Event kommst. Z.B zu den Co-Working sessions und in Erfahrung bringst woran andere gerade werkeln und Wege findest dabei hilfreich zu sein.\nAuch wenn du aktuell der Meinung bist „nicht gut genug“ zu sein (stell das bitte in Frage) bist du garantiert weiter als andere und beschleunigst deinen Aufstieg in den Programmierer Olymp indem du dein Wissen festigst und hinterfragst während du es erklärst."
                  }
                </div>
              </SupportCard>

              <SupportCard
                className={classNames("__wab_instance", sty.supportCard__nE9F)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__j8Ng
                  )}
                >
                  {
                    "Auch hier musst du nicht unbedingt Koryphäe in einer bestimmten Technologie oder Themengebiet sein.\nAm Ehesten suchen wir nach Leuten, die sich darin erproben jungen Menschen an die technologischen Vorzüge unserer Zeit heranzuführen. Die eigentliche Kunst eines Lehrers ist es nicht Wissen zu übermitteln, sondern zu inspirieren und motivieren damit Wissen überhaupt erst eindringen kann.\nUnser Hackaburg School Event ist zB ein Medium dafür."
                  }
                </div>
              </SupportCard>

              <SupportCard
                className={classNames("__wab_instance", sty.supportCard__bm4Bi)}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oq2Sv
                    )}
                  >
                    {"Events Organisieren"}
                  </div>
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__z3Bt
                  )}
                >
                  {
                    "Menschen müssen organisiert werden, Informationen müssen fliesen ohne die Zeit von anderen Mitgliedern unnötig zu beanspruchen. Ressourcen müssen aufgeteilt werden. Und Checklisten müssen befriedigt werden (hoffentlich nicht ohne die eigentlichen Ziele aus den Augen zu verlieren).\nEvents zu organisieren ist eine Kunst. Du kannst sie mit und üben, lernen und optimieren.\n\nAm Ende kannst du darauf stolz sein, etwas auf die Beine gestellt zu haben und dich an der Dankbarkeit der Teilnehmer erfreuen."
                  }
                </div>
              </SupportCard>
            </p.Stack>

            <Heading
              className={classNames("__wab_instance", sty.heading__hSkcD)}
            >
              {"Projekte"}
            </Heading>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__k5VOz)}>
                <ProjectCard
                  className={classNames(
                    "__wab_instance",
                    sty.projectCard__s2E5D
                  )}
                  eventBrand={"Hackaburg"}
                  eventDescription={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7VJ
                      )}
                    >
                      {
                        "Das Event das mit dem alles begann. Der Hackthon ist immer noch unser wichtigstes Event und das Zugpferd für den Verein."
                      }
                    </div>
                  }
                  eventImage={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___5GTaX)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"50%" as const}
                      loading={"lazy" as const}
                      src={{
                        src:
                          "/plasmic/ratisbona_coding_e_v/images/hackaburg1Png.png",
                        fullWidth: 467,
                        fullHeight: 683,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  eventName={"Hackathon"}
                />

                <ProjectCard
                  className={classNames(
                    "__wab_instance",
                    sty.projectCard__aqnt
                  )}
                  eventDescription={
                    "Kindern und Jugendliche für das Coden zu begeistern. Genau ist das die Idee hinter dem “kleinen” Format von Hackaburg."
                  }
                  eventImage={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___6XTad)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"50%" as const}
                      loading={"lazy" as const}
                      src={{
                        src:
                          "/plasmic/ratisbona_coding_e_v/images/hackaburgSchool1Png.png",
                        fullWidth: 383,
                        fullHeight: 575,
                        aspectRatio: undefined
                      }}
                    />
                  }
                />

                <ProjectCard
                  className={classNames(
                    "__wab_instance",
                    sty.projectCard__l8IjS
                  )}
                  eventDescription={
                    "Regelmäßger Austausch und Vernetzen mit anderen IT Interessierten oder Coder*innen bei einem Bier / Mate ist uns wichtig. "
                  }
                  eventImage={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__xxBx)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"50%" as const}
                      loading={"lazy" as const}
                      src={{
                        src:
                          "/plasmic/ratisbona_coding_e_v/images/stammtischLogo1Png.png",
                        fullWidth: 415,
                        fullHeight: 523,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  eventName={"Stammtisch"}
                />

                <ProjectCard
                  className={classNames(
                    "__wab_instance",
                    sty.projectCard___8Rtmg
                  )}
                  eventBrand={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6FdwL
                      )}
                    >
                      {"Google"}
                    </div>
                  }
                  eventDescription={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___92KYr
                      )}
                    >
                      {
                        "Hash Code ist ein von Google organisierter ein Coding Wettbewerb rund um den Globus und wir organiseren einen lokalen Hub."
                      }
                    </div>
                  }
                  eventImage={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__urGyV)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"50%" as const}
                      loading={"lazy" as const}
                      src={{
                        src:
                          "/plasmic/ratisbona_coding_e_v/images/hackaburgHashcode1Png.png",
                        fullWidth: 379,
                        fullHeight: 477,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  eventName={"Hashcode"}
                />
              </div>
            ) : null}
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "ratisbonaCodingEVLogo",
    "group",
    "logo",
    "uberUns",
    "aboutUsCard",
    "wieDuUnsUnterstutzenKannst"
  ],
  ratisbonaCodingEVLogo: ["ratisbonaCodingEVLogo", "group", "logo"],
  group: ["group", "logo"],
  logo: ["logo"],
  uberUns: ["uberUns", "aboutUsCard"],
  aboutUsCard: ["aboutUsCard"],
  wieDuUnsUnterstutzenKannst: ["wieDuUnsUnterstutzenKannst"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  ratisbonaCodingEVLogo: "div";
  group: "div";
  logo: "div";
  uberUns: "div";
  aboutUsCard: "div";
  wieDuUnsUnterstutzenKannst: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutAlt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicAboutAlt__VariantsArgs;
  args?: PlasmicAboutAlt__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicAboutAlt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicAboutAlt__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAboutAlt__ArgProps,
          internalVariantPropNames: PlasmicAboutAlt__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAboutAlt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutAlt";
  } else {
    func.displayName = `PlasmicAboutAlt.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutAlt = Object.assign(
  // Top-level PlasmicAboutAlt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ratisbonaCodingEVLogo: makeNodeComponent("ratisbonaCodingEVLogo"),
    group: makeNodeComponent("group"),
    logo: makeNodeComponent("logo"),
    uberUns: makeNodeComponent("uberUns"),
    aboutUsCard: makeNodeComponent("aboutUsCard"),
    wieDuUnsUnterstutzenKannst: makeNodeComponent("wieDuUnsUnterstutzenKannst"),

    // Metadata about props expected for PlasmicAboutAlt
    internalVariantProps: PlasmicAboutAlt__VariantProps,
    internalArgProps: PlasmicAboutAlt__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutAlt;
/* prettier-ignore-end */
