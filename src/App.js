import logo from "./logo.svg";
import "./App.css";
import NewEmploee from "./components/NewEmploeeData/NewEmploee";
import EmployeeList from "./components/Employess/EmployeeList";
import Sidebar from "./components/shared/Sidebar";
import Search from "./components/search/Search";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div>
        <Search />
        <EmployeeList />
      </div>
      {/* <NewEmploee/> */}
    </main>
  );
}

export default App;
