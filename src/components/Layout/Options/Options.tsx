import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { OptionsProps } from "./Options.types";
import styles from "./Options.module.css";

const Options = ({ selectionText, selectedItems }: OptionsProps) => {
  const onHandleClick = () => {
    if (selectedItems.length > 0) {
      alert(JSON.stringify(selectedItems));
    }
  };

  return (
    <div className={styles.options}>
      <div className={styles["option__selection-area"]}>{selectionText}</div>
      {selectedItems && selectedItems.length > 0 && (
        <div
          className={styles["option__download-btn"]}
          onClick={() => {
            onHandleClick();
          }}
        >
          <FontAwesomeIcon
            // @ts-ignore
            icon={faDownload}
            className={styles["options__icon"]}
          />
          Download Selection
        </div>
      )}
    </div>
  );
};
export default Options;
