import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// quando o conteudo da função é apenas um return, basta usar () => () que return será automático
const Routes: React.FC = () => (
  // path: endereço usado no navegador ou rota raiz
  // component: componente que será mostrado em tela ao acessar o endereço
  // passando o 'exact' como parâmetro o rrd faz um verificação de igualdade, se a rota for exatamente essa
  // <Switch> garante apenas que uma rota seja exibida
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
