import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { search } from "../../Redux/DataSlice";
// import NewEmploee from "../NewEmploeeData/NewEmploee";

const Search = () => {
  const dispatch = useDispatch();

  const empSearch = (e) => {
    dispatch(search(e.target.value));
  };

  return (
      <form className="w-full mb-2 md:mb-0 md:w-3/4 2xl:w-11/12 ">
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
            type="search"
            id="default-search"
            className="block py-1 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block   px-10 "
            placeholder="Search"
          />
        </div>
      </form>
  );
};

export default Search;
