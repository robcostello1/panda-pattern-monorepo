import { ReactNode } from "react";
import { GridItem } from "./GridItem";
import { css } from "@scootch/styled-system/css";

export const TestComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "[repeat(12, minmax(0, 1fr))]",
      })}
    >
      <GridItem colSpan={6}>{children}</GridItem>
    </div>
  );
};
