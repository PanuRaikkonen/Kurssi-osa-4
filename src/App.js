import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import {MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Single" element={<Single />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
        </Routes>
      </MediaProvider>
    </BrowserRouter>
  );
};

export default App;
