import { Button, Modal } from "antd";
import { useState } from "react";
import { useFilterReducer } from "../reducer/FilterReducer";
import Search from "antd/es/input/Search";
import FilterView from "./FilterView";
import { FilterOutlined } from "@ant-design/icons";

export default function FilterViewMobile() {
  const [state, dispatch] = useFilterReducer();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mb-3 mt-3 flex gap-4">
        <Search
          placeholder="Search"
          allowClear
          onSearch={(search) =>
            dispatch({
              type: "SEARCH",
              search: search,
            })
          }
          onChange={(e) =>
            dispatch({
              type: "SEARCH",
              search: e.target.value,
            })
          }
          value={state.search}
          size="large"
          className="w-full"
        />

        <Button size="large" type="primary" icon={<FilterOutlined></FilterOutlined>} onClick={() => setIsOpen(true)}>
          Filter
        </Button>
      </div>

      <Modal title="Filter" open={isOpen} footer={null} onCancel={() => setIsOpen(false)}>
        <FilterView></FilterView>
      </Modal>
    </div>
  );
}
