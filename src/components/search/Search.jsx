import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="px-3">
      
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="main-color"/>
        </div>
        <input type="search" id="default-search" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-10 " placeholder="Search" />
    </div>
</form>

    </div>
  );
};

export default Search;
