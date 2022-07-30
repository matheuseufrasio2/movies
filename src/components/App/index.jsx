import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import { Router } from '../../Router';
import { Header } from '../Header';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Router />
    </BrowserRouter>
  );
}
