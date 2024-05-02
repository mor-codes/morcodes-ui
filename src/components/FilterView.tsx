import { Checkbox } from "antd";
import React from "react";
import { MRI } from "../utils/constants";
import { useFilterReducer } from "../reducer/FilterReducer";
import Search from "antd/es/input/Search";

export default function FilterView() {
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

      <div className="mb-3">
        <div className="text-lg font-bold mb-1">Snapshot</div>
        {[4, 3, 2, 1].map((snapshot) => (
          <div key={snapshot} className="flex">
            <div className="mr-3">
              <Checkbox
                checked={state.snapshot[snapshot]}
                onChange={(e) =>
                  dispatch({
                    type: "TOGGLE_SNAPSHOT",
                    index: snapshot,
                    checked: e.target.checked,
                  })
                }
              ></Checkbox>
            </div>
            <div>Snapshot {snapshot}</div>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <div className="text-lg font-bold mb-1">MRI</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mri) => (
          <div key={mri} className="flex">
            <div className="mr-3">
              <Checkbox
                checked={state.mri[mri]}
                onChange={(e) =>
                  dispatch({
                    type: "TOGGLE_MRI",
                    index: mri,
                    checked: e.target.checked,
                  })
                }
              ></Checkbox>
            </div>
            <div>
              MRI {mri}: {MRI[mri]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
