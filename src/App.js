import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Technologies from './pages/Technologies';
import Contact from './Components/Contact';



function App() {
  return (
    <BrowserRouter>
       
       <Navbar/>
       
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/technologies' element={<Technologies/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
         
          
          
    </BrowserRouter>
  
  );
}
export default App;
