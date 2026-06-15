import React from "react";

export enum IconName {
  Map = "map",
  ChevronUp = "chevron-up",
  ChevronDown = "chevron-down",
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
  UpArrowAlt = "up-arrow-alt",
  DownArrowAlt = "down-arrow-alt",
  LeftArrowAlt = "left-arrow-alt",
  RightArrowAlt = "right-arrow-alt",
  Minus = "minus",
  Plus = "plus",
  Check = "check",
  X = "x",
  Star = "star",
  MenuAltRight = "menu-alt-right",
  Envelope = "envelope",
  Phone = "phone",
  Clock = "clock",
}

interface Props extends React.ComponentPropsWithoutRef<"svg"> {
  iconName: `${IconName}`;
}

export function Icon({ iconName, ...rest }: Props) {
  return (
    <svg {...rest}>
      <use href={`/assets/icon-sprite.svg#${iconName}`} />
    </svg>
  );
}
