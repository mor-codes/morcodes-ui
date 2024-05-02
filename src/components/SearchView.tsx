import { Checkbox } from "antd";
import React from "react";
import { MRI } from "../utils/constants";
import { useFilterReducer } from "../reducer/FilterReducer";
import Search from "antd/es/input/Search";

export default function SearchView() {
  const [state, dispatch] = useFilterReducer();

  return (
    <div>
      <div className="mb-3">
        <div className="text-lg font-bold mb-1">Search</div>
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
      </div>
    </div>
  );
}
