import { ReactNode } from "react";
import "./styles.less";

export const ScrollBar = ({
  height,
  children,
}: {
  height?: number | string;
  children?: ReactNode;
}) => {
  return (
    <div className="scroll-bar" style={{ height: height ?? 500 }}>
      {children}
    </div>
  );
};
