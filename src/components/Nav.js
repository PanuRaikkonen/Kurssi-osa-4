import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {getUser} = useUser();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const userData = await getUser(localStorage.getItem('token'));
      console.log(userData);
      setLoggedIn(true);
      navigate('/Home');
    } catch (err) {
      setLoggedIn(false);
      navigate('/');
    }
  };
  console.log(loggedIn);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/Profile'}>Profile</Link>
        </li>
        <li>
          <Link to={'/Single'}>Single</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
