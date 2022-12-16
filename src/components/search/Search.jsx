import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { search } from "../../Redux/DataSlice";

const Search = () => {
  const [searchVal, setsearchVal] = useState('');
  const dispatch = useDispatch();

  const empSearch = (e) => {
    setsearchVal(e.target.value)
    dispatch(search(e.target.value));
  };

  return (
      <form className="w-full mb-2 md:mb-0   ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative mr-3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="main-color" />
          </div>
          <input
            onChange={empSearch}
            value={searchVal}
            type="search"
            id="default-search"
            className="w-full block py-1 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block   px-10 "
            placeholder="Search"
          />
        </div>
      </form>
  );
};

export default Search;
