import {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';
import {MediaContext} from '../contexts/MediaContext';

const Nav = () => {
  const [user, setUser] = useContext(MediaContext);
  const {getUser} = useUser();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const userData = await getUser(localStorage.getItem('token'));
      console.log(userData);
      setUser(userData);
    } catch (err) {
      setUser(null);
      navigate('/');
    }
  };
  console.log(user);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {user && (
          <>
            <li>
              <Link to={'/Profile'}>Profile</Link>
            </li>
            <li>
              <Link to={'/Single'}>Single</Link>
            </li>
            <li>
              <Link to={'/Logout'}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
