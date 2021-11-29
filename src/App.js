import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import CollegeDetails from './component/CollegeDetails';
import SideBar from './component/SideBar';
import NavBar from './component/NavBar';

function App() {
  return ( 
    <div>   
       <NavBar/>  
      <div className="App">
        <SideBar/>
        <div style={{display:'flex',flexDirection:'left',flex:'80%'}}>
        <Router>
        <Routes >
          <Route path='/college_details' element={<CollegeDetails/>}/>
         </Routes >
        
        </Router>
        </div>
        </div>
        </div>
  
  );
}

export default App;
