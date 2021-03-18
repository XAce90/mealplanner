import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from'./components/Header';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (<>
    <Header />
      
    <main className="container">
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
    </main>

    <Footer />
  </>);
}

export default App;
