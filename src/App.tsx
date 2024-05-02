import Navbar from "./components/Navbar";
import CodeSnapshot from "./components/CodeSnapshot";
import FilterView from "./components/FilterView";
import { useFilterReducer } from "./reducer/FilterReducer";
import SearchView from "./components/SearchView";

function App() {
  const [filter] = useFilterReducer();

  return (
    <>
      <div className="w-100">
        <Navbar></Navbar>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="hidden lg:block p-5" style={{ flexBasis: 400 }}>
          <FilterView></FilterView>
        </div>

        <div className="block lg:hidden max-w-2xl w-full p-5 pb-0">
          <SearchView></SearchView>
        </div>

        <div className="flex-grow">
          <div className="max-w-2xl xl:max-w-4xl mx-auto p-5">
            {filter.snapshot[4] && (
              <CodeSnapshot snapshot={4} impliedValue={0}></CodeSnapshot>
            )}
            {filter.snapshot[3] && (
              <CodeSnapshot snapshot={3} impliedValue={0.407}></CodeSnapshot>
            )}
            {filter.snapshot[2] && (
              <CodeSnapshot snapshot={2} impliedValue={0.2}></CodeSnapshot>
            )}
            {filter.snapshot[1] && (
              <CodeSnapshot snapshot={1} impliedValue={0.025}></CodeSnapshot>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
