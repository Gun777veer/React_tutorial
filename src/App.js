import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Usestate } from './pages/Usestate';
import { Main } from './pages/Main';
import { Useeffect } from './pages/Useeffect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/usestate' element={<Usestate/>}></Route>
        <Route path='/useeffect' element={<Useeffect/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
