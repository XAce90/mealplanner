import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/header.css';
import { useContext } from 'react';
import UserContext from '../context/user';
import { logout } from '../utils/auth';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    setUser(null);
    history.push('/');
  }

  return (
    <header>
      <Container>
        {/* logo goes here */}
        <Nav style={{ justifyContent: 'flex-end' }}>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/recipes">Recipes</NavLink>
          </NavItem>
          {(user) ? (
            <NavItem>
              <NavLink tag={Link} onClick={handleLogout}>Log out</NavLink>
            </NavItem>
          ) : (<>
            <NavItem>
              <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">Register</NavLink>
            </NavItem>
          </>)}
        </Nav>
      </Container>
    </header>
  )
}