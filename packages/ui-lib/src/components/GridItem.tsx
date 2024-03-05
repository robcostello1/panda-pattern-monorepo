import { cx } from "@eonnext/styled-system/css";
import {
  type GridItemProps as StylesGridItemProps,
  type HTMLStyledProps,
  styled,
} from "@eonnext/styled-system/jsx";
import { gridItem } from "@eonnext/styled-system/patterns";
import React, { useMemo } from "react";

type GridItemAs = "div" | "li";
type GridItemProps = StylesGridItemProps &
  HTMLStyledProps<GridItemAs> & { as?: GridItemAs };

const FULL_SPAN = { base: 6, md: 8, lg: 12 };

export const GridItem: React.FC<GridItemProps> = ({
  as = "div",
  children,
  className,
  colSpan = FULL_SPAN,
  rowSpan,
  colStart,
  rowStart,
  colEnd,
  rowEnd,
  ...props
}) => {
  const Component = useMemo(() => styled(as), [as]);

  return (
    <Component
      className={cx(
        gridItem({ colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
