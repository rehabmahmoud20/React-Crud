import logo from './logo.svg';
import './App.css';
import NewEmploee from './components/NewEmploeeData/NewEmploee';
import EmployeeList from './components/Employess/EmployeeList';
import  Sidebar  from './components/shared/Sidebar';

function App() {
  return (
    <main className='flex'>
      
      <Sidebar/>
     <EmployeeList />
      {/* <NewEmploee/> */}
    </main>
  );
}

export default App;
