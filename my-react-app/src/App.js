import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import LandingPage from './Mycomponents/LandingPage';
import Login from './Mycomponents/Login';



const App = () => {
  return (
    <div>
    <h1>Hello There</h1>
    <h2>Chnages accepted</h2>
      <Header />
      <LandingPage />
      <Footer />
      <Login/>
      <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="my-react-app/src/Mycomponents/LoginPage.js/>
        <Route path="my-react-app/src/Mycomponents/RegisterPage.js" component={RegisterPage} />
      </Switch>
    </Router>
    
    </div>
  );
};

export default App;
