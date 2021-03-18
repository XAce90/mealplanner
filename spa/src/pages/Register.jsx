import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/login.css';

export default function Register() {

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('registering...');
  }

  return (
    <Form onSubmit={handleRegister} className="login login--register">
        <h1>Register</h1>
        <p>{/* todo text */}</p>
        <FormGroup>
          <Label for="registerEmail">Email Address</Label>
          <Input type="email" name="email" id="registerEmail" />
        </FormGroup>

        <FormGroup>
          <Label for="registerPass">Password</Label>
          <Input type="password" name="password" id="registerPass" />
        </FormGroup>

        <FormGroup>
          <Label for="registerConfirmPass">Confirm Password</Label>
          <Input type="password" name="confirmPass" id="registerConfirmPass" />
        </FormGroup>
        
        <Button>Register</Button>
      </Form>
  )
}