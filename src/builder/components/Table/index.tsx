import React, { useEffect, useRef, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.less";
import useComputeHeight from "../../../hooks/useHeight";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Action",
    key: "5",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 15; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: i,
    address: `London Park no. ${i}`,
  });
}

interface TableProps {
  columns?: any;
  dataSource?: any;
}

export const TablePreview = (props: TableProps) => {
  const refHeight = useRef(null);
  const height = useComputeHeight(refHeight);
  console.log(height);

  return (
    <Table
      ref={refHeight}
      className="table-preview"
      pagination={false}
      columns={columns}
      dataSource={data}
      scroll={{
        y: height - 160,
      }}
    />
  );
};
