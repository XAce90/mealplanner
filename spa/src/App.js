import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from'./components/Header';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <h1>Hello World</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
