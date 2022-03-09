import React, { useEffect, useState } from "react";

import LayoutWrapper from "../../UI/LayoutWrapper/LayoutWrapper";

import Options from "../Options/Options";
import Table from "../Table/Table";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectionText, setSelectionText] = useState("Nothing Selected");

  useEffect(() => {
    fetch("/data-source.json")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const setSelections = (selections: any) => {
    if (selections.length === 0) {
      setSelectionText("Nothing Selected");
    } else {
      setSelectionText(`Selected  ${selections.length} rows`);
    }
    const filteredItems = data.filter(
      // @ts-ignore
      items => selections.indexOf(items.name) !== -1
    );
    setSelectedItems(filteredItems);
  };

  return (
    <LayoutWrapper element="main">
      <Options selectionText={selectionText} selectedItems={selectedItems} />
      <Table data={data} setSelections={setSelections} />
    </LayoutWrapper>
  );
};

export default MainContent;
