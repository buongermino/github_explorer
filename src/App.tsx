import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

// aplico o global style, mas é necessário estar dentro de um elemento pai, usando as <> </>
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
