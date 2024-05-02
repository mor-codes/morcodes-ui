import React, { ReactNode, useContext } from "react";
import { useReducer } from "react";

interface FilterState {
  snapshot: boolean[];
  mri: boolean[];
  search: string;
}

const FilterContext = React.createContext<any>([]);

export function filterReducer(state: FilterState, action: any): FilterState {
  switch (action.type as string) {
    case "TOGGLE_SNAPSHOT": {
      const newSnapshot = [...state.snapshot];
      newSnapshot[action.index] = action.checked;
      return {
        ...state,
        snapshot: newSnapshot,
      };
    }

    case "TOGGLE_MRI": {
      const newMRI = [...state.mri];
      newMRI[action.index] = action.checked;
      return {
        ...state,
        mri: newMRI,
      };
    }

    case "SEARCH": {
      return {
        ...state,
        search: action.search,
      };
    }

    default:
      return state;
  }
}

export function useFilterReducer(): [FilterState, React.Dispatch<any>] {
  return useContext(FilterContext);
}

export function FilterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer<React.Reducer<FilterState, any>>(
    filterReducer,
    {
      snapshot: [false, true, true, true, true],
      mri: [true, true, true, true, true, true, true, true, true, true, true],
      search: "",
    }
  );

  return (
    <FilterContext.Provider value={[state, dispatch]}>
      {children}
    </FilterContext.Provider>
  );
}

export function applyFilter(records: CodeSnapshotItem[], filter: FilterState) {
  return records.filter((record) => {
    const mriPassed = filter.mri[record.mri || 0];
    const descriptionPassed =
      !filter.search ||
      record.description.toLowerCase().indexOf(filter.search.toLowerCase()) !=
        -1;
    const walletPassed =
      !filter.search ||
      record.walletAddress.toLowerCase().indexOf(filter.search.toLowerCase()) !=
        -1;

    return mriPassed && (descriptionPassed || walletPassed);
  });
}
