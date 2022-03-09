import React from "react";

import styles from "./Header.module.css";

import LayoutWrapper from "../../UI/LayoutWrapper/LayoutWrapper";

const Header = () => {
  return (
    <header className={styles.header}>
      <LayoutWrapper element="div">
        <div>File Downloader</div>
      </LayoutWrapper>
    </header>
  );
};

export default Header;
