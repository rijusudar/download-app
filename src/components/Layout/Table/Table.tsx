import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { TableProps } from "./Table.types";
import styles from "./Table.module.css";

const Table = ({ data, setSelections }: TableProps) => {
  const [selectedRows, setSelectedRows] = useState([]);
  useEffect(() => {
    setSelections(selectedRows);
  }, [selectedRows]);

  const columns = [
    {
      dataField: "name",
      text: "Name"
    },
    {
      dataField: "device",
      text: "Device"
    },
    {
      dataField: "path",
      text: "Path"
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cell: any, row: any, rowIndex: any) => {
        return (
          <div className={styles["table__status-wrap"]}>
            {cell === "available" && (
              <span className={styles["table__active-indicator"]}></span>
            )}
            {cell}
          </div>
        );
      }
    }
  ];

  const onSelect = (row: any, isSelect: any, rowIndex: any, e: any) => {
    // @ts-ignore
    const foundIndex = selectedRows.indexOf(row.name);
    if (row.status === "available" && foundIndex === -1) {
      // @ts-ignore
      setSelectedRows([...selectedRows, row.name]);
    } else if (row.status === "available") {
      const temp = [...selectedRows];
      temp.splice(foundIndex, 1);
      setSelectedRows(temp);
    }
    return row.status === "available";
  };

  const onSelectAll = (isSelect: any, rows: any, e: any) => {
    if (isSelect) {
      const allSelectedRows = rows
        .filter((r: any) => r.status === "available")
        .map((r: any) => r.name);
      setSelectedRows(allSelectedRows);
      return allSelectedRows;
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className={styles.table}>
      <BootstrapTable
        keyField="name"
        // @ts-ignore
        data={data}
        columns={columns}
        selectRow={{
          mode: "checkbox",
          // @ts-ignore
          selectedRows: selectedRows,
          bgColor: "#bcbfbf",
          onSelect: onSelect,
          onSelectAll: onSelectAll
        }}
      />
    </div>
  );
};

export default Table;
