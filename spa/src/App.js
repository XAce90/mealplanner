import { useMemo, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from'./components/Header';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Register from './pages/Register';
import UserContext from './context/user';

function App() {
  const [user, setUser] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  return (
    <UserContext.Provider value={userValue}>
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
    </UserContext.Provider>
  );
}

export default App;
