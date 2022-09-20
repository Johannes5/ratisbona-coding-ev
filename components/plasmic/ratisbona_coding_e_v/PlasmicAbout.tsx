// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2uxAq5bBM7QPimw2pErK3f
// Component: CNA6kicpvb
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
import sty from "./PlasmicAbout.module.css"; // plasmic-import: CNA6kicpvb/css

import GroupIcon from "./icons/PlasmicIcon__Group"; // plasmic-import: Znyuo0YrdF/icon
import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: 8k_j5ssWFG/icon
import TextIcon from "./icons/PlasmicIcon__Text"; // plasmic-import: mqGymOvZ9x/icon

export type PlasmicAbout__VariantMembers = {};

export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<"div">;
  ratisbonaCodingEVLogo?: p.Flex<"div">;
  group?: p.Flex<"div">;
  logo?: p.Flex<"div">;
  uberUns?: p.Flex<"div">;
  aboutUsCard?: p.Flex<"div">;
  wieDuUnsUnterstutzenKannst?: p.Flex<"div">;
};

export interface DefaultAboutProps {}

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;

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
            className={classNames(projectcss.all, sty.freeBox__dfq8F)}
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
                      className={classNames(projectcss.all, sty.svg__j8Oqn)}
                      role={"img"}
                    />

                    <Group2Icon
                      className={classNames(projectcss.all, sty.svg__oI5Qw)}
                      role={"img"}
                    />
                  </div>

                  <TextIcon
                    className={classNames(projectcss.all, sty.svg___2UiI5)}
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
                  className={classNames("__wab_instance", sty.heading__aZlK)}
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
                    sty.text__wpBfu
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
              className={classNames(sty.img__y0R0B)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
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
                className={classNames("__wab_instance", sty.heading__pT9T)}
              >
                {"Wie du uns understützen kannst"}
              </Heading>

              <SupportCard
                className={classNames(
                  "__wab_instance",
                  sty.supportCard___0IoRb
                )}
                slot={"(Programmier) Expertise teilen"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eF3K
                  )}
                >
                  {
                    "Durch das Wort „coding“ in unserem Titel sind wir letztendlich (ob wir es wollen oder nicht) eine Sammelstelle und ein Netzwerk für Programmierer und Menschen deren Tätigkeit sich mit Programmierern überschneidet.\n\nDu kannst dieses Bündnis stärken indem du deine Expertise mit uns teilst.\nAm Einfachsten, indem du zu unseren Event kommst. Z.B zu den Co-Working sessions und in Erfahrung bringst woran andere gerade werkeln und Wege findest dabei hilfreich zu sein.\nAuch wenn du aktuell der Meinung bist „nicht gut genug“ zu sein (stell das bitte in Frage) bist du garantiert weiter als andere und beschleunigst deinen Aufstieg in den Programmierer Olymp indem du dein Wissen festigst und hinterfragst während du es erklärst."
                  }
                </div>
              </SupportCard>

              <SupportCard
                className={classNames(
                  "__wab_instance",
                  sty.supportCard___3EdIm
                )}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yaDvX
                  )}
                >
                  {
                    "Auch hier musst du nicht unbedingt Koryphäe in einer bestimmten Technologie oder Themengebiet sein.\nAm Ehesten suchen wir nach Leuten, die sich darin erproben jungen Menschen an die technologischen Vorzüge unserer Zeit heranzuführen. Die eigentliche Kunst eines Lehrers ist es nicht Wissen zu übermitteln, sondern zu inspirieren und motivieren damit Wissen überhaupt erst eindringen kann.\nUnser Hackaburg School Event ist zB ein Medium dafür."
                  }
                </div>
              </SupportCard>

              <SupportCard
                className={classNames("__wab_instance", sty.supportCard__v5Z9F)}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hIf2X
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
                    sty.text__lKqRe
                  )}
                >
                  {
                    "Menschen müssen organisiert werden, Informationen müssen fliesen ohne die Zeit von anderen Mitgliedern unnötig zu beanspruchen. Ressourcen müssen aufgeteilt werden. Und Checklisten müssen befriedigt werden (hoffentlich nicht ohne die eigentlichen Ziele aus den Augen zu verlieren).\nEvents zu organisieren ist eine Kunst. Du kannst sie mit und üben, lernen und optimieren.\n\nAm Ende kannst du darauf stolz sein, etwas auf die Beine gestellt zu haben und dich an der Dankbarkeit der Teilnehmer erfreuen."
                  }
                </div>
              </SupportCard>
            </p.Stack>

            <Heading
              className={classNames("__wab_instance", sty.heading__ynRkD)}
            >
              {"Projekte"}
            </Heading>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__uI7D)}>
                <ProjectCard
                  className={classNames(
                    "__wab_instance",
                    sty.projectCard___7U9Mn
                  )}
                  eventBrand={"Hackaburg"}
                  eventDescription={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jrOGm
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
                      className={classNames(sty.img__pxyni)}
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
                    sty.projectCard__uL5T
                  )}
                  eventDescription={
                    "Kindern und Jugendliche für das Coden zu begeistern. Genau ist das die Idee hinter dem “kleinen” Format von Hackaburg."
                  }
                  eventImage={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___9Nyi9)}
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
                    sty.projectCard__h8Zx5
                  )}
                  eventDescription={
                    "Regelmäßger Austausch und Vernetzen mit anderen IT Interessierten oder Coder*innen bei einem Bier / Mate ist uns wichtig. "
                  }
                  eventImage={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___3GfSv)}
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
                    sty.projectCard__ssS8Z
                  )}
                  eventBrand={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__f5VxD
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
                        sty.text__hG6Tt
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
                      className={classNames(sty.img__tBD5)}
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
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicAbout__VariantsArgs;
  args?: PlasmicAbout__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicAbout__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ratisbonaCodingEVLogo: makeNodeComponent("ratisbonaCodingEVLogo"),
    group: makeNodeComponent("group"),
    logo: makeNodeComponent("logo"),
    uberUns: makeNodeComponent("uberUns"),
    aboutUsCard: makeNodeComponent("aboutUsCard"),
    wieDuUnsUnterstutzenKannst: makeNodeComponent("wieDuUnsUnterstutzenKannst"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
