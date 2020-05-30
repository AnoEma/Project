import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EsqueceSenha from './pages/ResetarSenha';



export default function Routes(){
  return(
    <BrowserRouter>
     <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/cadastro-cliente" component={Cadastro}/>
      <Route path="/esqueceu-senha" component={EsqueceSenha}/>
     </Switch>
   </BrowserRouter>
 );
}