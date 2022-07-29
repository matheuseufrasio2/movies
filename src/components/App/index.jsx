import { useEffect } from 'react';
import GlobalStyles from '../../assets/styles/global';
import { Home } from '../../pages/Home';
import { api } from '../../services/api';
import { Header } from '../Header';

export function App() {
  useEffect(() => {
    api.get('/movies')
      .then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  );
}
