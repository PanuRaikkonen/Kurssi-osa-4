import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Profile = () => {
  const [user] = useContext(MediaContext);

  console.log(user);
  return (
    <>
      <h1>Profile</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.full_name}</li>
      </ul>
    </>
  );
};

export default Profile;
