import React from "react";
import clsx from "clsx";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.types";

const Image = ({ src, alt }: ImageProps) => (
  <div className={clsx(styles.image)}>
    <img className={styles["image__img"]} src={src} alt={alt} />
  </div>
);

export default Image;
