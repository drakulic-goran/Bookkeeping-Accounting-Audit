import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container'

import { HomePage } from './ui/home/HomePage'
import { AuditServices } from './ui/auditservices/AuditServices'
import { AccountingServices } from './ui/accountingservices/AccountingServices'
import { About } from './ui/about/About'
import { Contact } from './ui/contact/Contact'
import Navbar from './ui/navbar/Navbar';
import Footer from './ui/footer/Footer';

import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container style={{minHeight: 'inherit'}} >
        <Router>
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
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
