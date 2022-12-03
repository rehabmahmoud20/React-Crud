import "./App.css";
import EmployeeList from "./components/Employess/EmployeeList";
import Sidebar from "./components/shared/sidebar/Sidebar";
import Search from "./components/search/Search";
import NavbarComponent from "./components/shared/NavbarComponent";

function App() {
  return (
    <section className="flex ">
      <div>
        <Sidebar />
      </div>
      <div className="mx-auto w-11/12 h-screen overflow-auto">
        <NavbarComponent />
        <Search />
        <EmployeeList />
      </div>
    </section>
  );
}

export default App;
