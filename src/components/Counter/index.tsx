import cl from "classnames";

import { ComponentProps } from "../types";

import "./index.scss";

interface CounterProps extends ComponentProps {
  activeIndex: number;
  size: number;
}

export const Counter = ({ activeIndex, size, className }: CounterProps) => (
  <div className={cl("counter", className)}>
    {activeIndex}/{size}
  </div>
);
