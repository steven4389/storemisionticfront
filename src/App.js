import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import CreateProduct from './components/createProduct/CreateProduct';
import ProtectedRoute from './components/login/ProtectedRoute';
import Admin from './components/admin/Admin';
import Pendiente from './components/pendiente/Pendiente';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/create" component={CreateProduct} />
          <Route exact path="/home" component={Home} /> */}
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/create" component={CreateProduct} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={CreateProduct} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/pendiente" component={Pendiente} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
