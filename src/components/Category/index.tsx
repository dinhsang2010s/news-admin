import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import "./styles.less";
import { TablePreview } from "../../builder/components/Table";

export const Category = () => {
  useEffect(() => {}, []);
  return (
    <div className="category">
      <h1 className="title"> Category</h1>
      <div className="nav-category">
        <Button className="add-category" type="primary" icon={<PlusOutlined />}>
          Create New Category
        </Button>
        <Input
          className="search-category"
          placeholder="Search in categories..."
          suffix={<SearchOutlined />}
        />
      </div>
      <div className="table-category">
        <TablePreview />
      </div>
    </div>
  );
};
