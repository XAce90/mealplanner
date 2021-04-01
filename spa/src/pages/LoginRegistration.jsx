import { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { login } from '../utils/auth';
import '../styles/login.css';
import UserContext from '../context/user';

export default function LoginRegistration({ action }) {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPass, setConfirmPass ] = useState('');

  const handleLogin = async () => {
    const user = await login({email, password});
    if(user) {
      console.log('login success!');
      setUser(user);
      history.push('/');
      // todo: make this redirect more dynamic so that it goes where they wanted
    } else {
      console.error('failed to log in');
      // todo: better error UX
    }
  }

  const handleRegistration = async () => {
    console.log('registering...');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(action === 'login') { handleLogin(); }
    if(action === 'register') { handleRegistration(); }
  }

  return (
      <Form onSubmit={handleSubmit} className="login">
        <h1>{action === 'login' ? 'Log in' : 'Register'}</h1>
        <p>{/* todo text */}</p>
        <FormGroup>
          <Label for="loginEmail">Email Address</Label>
          <Input 
            id="loginEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="loginPass">Password</Label>
          <Input 
            id="loginPass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        {action === 'register' && (
          <FormGroup>
            <Label for="registerPass">Confirm Password</Label>
            <Input 
              id="registerPass"
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </FormGroup>
        )}
        
        <Button>{action === 'login' ? 'Log in' : 'Register'}</Button>
      </Form>
  )
}