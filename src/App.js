import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './ui/home/HomePage'
import { AuditServices } from './ui/auditservices/AuditServices'
import { AccountingServices } from './ui/accountingservices/AccountingServices'
import { About } from './ui/about/About'
import { Contact } from './ui/contact/Contact'
import Navbar from './ui/navbar/Navbar';


// import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">

      <Router>
            <Navbar style={{width: '100%'}} />
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/auditservices'>
                <AuditServices />
              </Route>
              <Route exact path='/accountingservices'>
                <AccountingServices />
              </Route>
              <Route exact path='/about'>
                <About  />
              </Route>
              <Route exact path='/contact'>
                <Contact  />
              </Route>
            </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
