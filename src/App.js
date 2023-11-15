import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Update from './Components/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>    
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/edit/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
