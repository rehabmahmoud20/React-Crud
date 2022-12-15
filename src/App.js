import "./App.css";
import EmployeeList from "./components/Employess/EmployeeList";
import Sidebar from "./components/shared/sidebar/Sidebar";
import Search from "./components/search/Search";
import NavbarComponent from "./components/shared/NavbarComponent";
import NewEmploee from "./components/NewEmploeeData/NewEmploee.jsx";
import React from "react";

class App extends React.Component {

  componentDidCatch(err, info) {
    console.log("catch", err, info);
  }

  render() {
    return (
      <section className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="main-bg w-full mx-auto  h-screen overflow-auto">
          <NavbarComponent />
          <div className="px-3 md:flex justify-between mb-12">
            <Search />
            <NewEmploee className='w-1/5' />
          </div>

          <EmployeeList />
        </div>
      </section>
    );
  }
}

export default App;
