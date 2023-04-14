import './App.css';
import { Route, Routes } from 'react-router';
import Demo from './Components/Demo/Demo';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import Reg from './Components/Auth/Reg/Reg';

function App() {

    return (
        <div className="App">  
            <div className='content-flex'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/reg' element={<Reg />} />
                    <Route path='/demo' element={<Demo />} />
                </Routes>
            </div>  
        </div>
    )
}

export default App;
