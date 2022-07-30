import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:slug" element={<Movie />} />
    </Routes>
  );
}
