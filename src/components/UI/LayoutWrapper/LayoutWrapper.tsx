import * as React from "react";
import clsx from "clsx";

import styles from "./LayoutWrapper.module.css";
import { LayoutWrapperProps } from "./LayoutWapper.types";

const LayoutWrapper = ({
  element: Element,
  className,
  ...props
}: LayoutWrapperProps) => (
  <Element className={clsx(styles["layout-wrapper"], className)} {...props} />
);

export default LayoutWrapper;
