import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
