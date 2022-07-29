import { useEffect } from 'react';
import GlobalStyles from '../../assets/styles/global';
import { Home } from '../../pages/Home';
import { Header } from '../Header';

export function App() {
  useEffect(() => {
    fetch('https://tender-mclean-00a2bd.netlify.app/web/movies.json')
      .then();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  );
}
