import "./App.css";
import EmployeeList from "./components/Employess/EmployeeList";
import Sidebar from "./components/shared/sidebar/Sidebar";
import NavbarComponent from "./components/shared/NavbarComponent";

// class App extends React.Component {
  const App = () => {

  // componentDidCatch(err, info) {
  //   console.log("catch", err, info);
  // }

  // render() {
    return (
      <section className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="main-bg w-full mx-auto  h-screen overflow-auto ">
          <NavbarComponent />
        

          <EmployeeList />
        </div>
      </section>
    );
  }
// }

export default App;
