import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/"><img className='navLogo' src="https://i.imgur.com/lVaNIbc.png" alt="logo" /></Link>
      <Link to="/home"><span className='soon'>Coming Soon</span></Link>
      <span>Its Time to Lift {user.name}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}