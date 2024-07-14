import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import { LinksGroup } from "./linksGroup";
import classes from "./NavbarNested.module.css";

const mockdata = [
  { label: "Home", icon: IconGauge, link: "/" },
  {
    label: "Basics",
    icon: IconNotes,
    initiallyOpened: false,
    link: "/basics",
    links: [
      { label: "HTML", link: "/basics/html" },
      { label: "CSS", link: "/basics/css" },
      { label: "Javascript", link: "/basics/javascript" },
      { label: "Typescript", link: "/basics/typescript" },
      // OOP
    ],
  },
  {
    label: "React",
    icon: IconNotes,
    initiallyOpened: false,
    link: "/react",
    links: [
      { label: "router", link: "/react/router" },
      { label: "useEffect", link: "/react/useEffect" },
      { label: "useMemo", link: "/react/useMemo" },
      { label: "useReducer", link: "/react/useReducer" },
      { label: "debounce", link: "/react/debounce" },
    ],
  },
  {
    label: "Misc",
    icon: IconNotes,
    initiallyOpened: false,
    link: "/misc",
    links: [
      { label: "STAR", link: "/misc/star" },
      { label: "Mercury", link: "/misc/mercury" },
      { label: "Amazon", link: "/misc/amazon" },
    ],
  },
];

export function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          Frontend Study Guide
          <Code fw={700}>v1.0</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <small>Created by Tony Kim 2024</small>
      </div>
    </nav>
  );
}
