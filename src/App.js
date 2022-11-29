import logo from './logo.svg';
import './App.css';
import NewEmploee from './components/NewEmploeeData/NewEmploee';
import EmployeeList from './components/Employess/EmployeeList';

function App() {
  return (
    <div >
     <EmployeeList/>
      <NewEmploee/>
    </div>
  );
}

export default App;
