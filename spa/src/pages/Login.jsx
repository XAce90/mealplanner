import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/login.css';

export default function Login() {

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('submitting...');
  }

  return (
      <Form onSubmit={handleLogin} className="login">
        <h1>Log in</h1>
        <p>{/* todo text */}</p>
        <FormGroup>
          <Label for="loginEmail">Email Address</Label>
          <Input type="email" name="email" id="loginEmail" />
        </FormGroup>

        <FormGroup>
          <Label for="loginPass">Password</Label>
          <Input type="password" name="password" id="loginPass" />
        </FormGroup>
        
        <Button>Log in</Button>
      </Form>
  )
}