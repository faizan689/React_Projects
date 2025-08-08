import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

function Profile() {
  const { user } = useContext(UserContext); 

  if (!user) return <h1>Not Logged In</h1>;

  return (
    <div>Profile: {user.Username}</div> 
  );
}

export default Profile;
