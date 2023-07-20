import './App.css';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Navbarr from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import RequireAuth from './components/RequireAuth';
import Courses from './components/Courses/Courses';


function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/courses" element={          
            <RequireAuth redirectTo="/login">
               <Courses/>
            </RequireAuth>
        }
      />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
