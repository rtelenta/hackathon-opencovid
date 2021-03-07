import { useState } from "react";
import Finder from "../components/Finder";
import Phases from "../components/Phases";

const SearchResult: React.FC = () => {
  const [search, setSearch] = useState(null);

  return (
    <>
      <Finder setSearch={setSearch} />
      <Phases search={search} />
    </>
  );
};

export default SearchResult;
