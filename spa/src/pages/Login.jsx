import { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { login } from '../utils/auth';
import '../styles/login.css';
import UserContext from '../context/user';

export default function Login() {
  /* todo: combine this page with Registration for DRYness */
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login({email, password});
    if(user) {
      console.log('login success!');
      setUser(user);
      history.push('/');
    } else {
      console.error('failed to log in');
      // todo: better error UX
    }
  }

  return (
      <Form onSubmit={handleLogin} className="login">
        <h1>Log in</h1>
        <p>{/* todo text */}</p>
        <FormGroup>
          <Label for="loginEmail">Email Address</Label>
          <Input 
            id="loginEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="loginPass">Password</Label>
          <Input 
            id="loginPass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        
        <Button>Log in</Button>
      </Form>
  )
}