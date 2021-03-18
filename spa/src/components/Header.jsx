import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import UserContext from '../context/user';

export default function Header() {
  // const { user, setUser } = useContext(UserContext);
  return (
    <header>
      {/* logo goes here */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          {/* {(user) ? (
            <li>
              <Link to="/logout">Log out</Link>
            </li>
          ) : (<> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          {/* </>)} */}
        </ul>
      </nav>
    </header>
  )
}