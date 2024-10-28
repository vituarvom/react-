import React, { type ReactNode } from "react";
import { useWindowSize } from "react-smart-utils";

export const SectionWrapper = ({
  title,
  to,
  children,
}: {
  title: string;
  to: string;
  children: ReactNode;
}) => {
  const { width } = useWindowSize();
  return (
    <div
      id={title}
      style={{
        padding: "3rem",
      }}
    >
      <a href={`#${to}`} id={to}>
        #{title}
      </a>

      <div style={{ textAlign: "center" }}>{children}</div>
    </div>
  );
};
