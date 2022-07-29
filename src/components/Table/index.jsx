/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Container } from './styles';

import { api } from '../../services/api';
import { onlyUnique } from '../../utils/onlyUnique';

export function MoviesTable() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreSelected, setGenreSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [optionsGenre, setOptionsGenre] = useState([]);

  const filteredMovies = useMemo(() => movies.filter((movie) => {
    if (searchTerm.length > 0 && genreSelected.length === 0) {
      console.log('searchTerm tá escrito e genero não selecionado');
      const filteredBySearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      return filteredBySearchTerm;
    } if (searchTerm.length > 0 && genreSelected.length > 0) {
      console.log('searchTerm tá escrito e genero ESTÁ selecionado');
      const filteredBySearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const filteredByGenre = filteredBySearchTerm.genre?.some((g) => g.toLowerCase() === genreSelected);
      return filteredByGenre;
    } if (searchTerm.length === 0 && genreSelected.length > 0) {
      console.log('searchTerm NÃO tá escrito e genero ESTÁ selecionado');
      const filteredByGenre = movies.genre?.some((g) => g.toLowerCase() === genreSelected);
      return filteredByGenre;
    }

    return movie;
  }), [movies, searchTerm, genreSelected]);

  const loadMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.get('/movies');

      const genres = [];
      const dataFormatted = response.data.map((movie, index) => {
        movie.genre.forEach((g) => genres.push(g));
        return {
          ...movie,
          id: index + Math.random(),
          revenueFormatted: movie.revenue.length > 0 ? `$${movie.revenue}` : '$0.00',
          genreFormatted: movie.genre.join(', '),
        };
      });

      const unique = genres.filter(onlyUnique);
      setOptionsGenre(unique);
      setMovies(dataFormatted);
    } catch {
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <Container>
      <p>
        genreSelected:
        {genreSelected}
      </p>
      <p>
        genreSelectedLength:
        {genreSelected.length}
      </p>
      <p>
        searchTerm:
        {searchTerm}
      </p>
      <p>
        searchTermLength:
        {searchTerm.length}
      </p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Runtime</th>
            <th>Revenue</th>
            <th>Rating</th>
            <th>Genres</th>
          </tr>
          <tr>
            <th>
              <input
                value={searchTerm}
                type="text"
                placeholder="Filter by title"
                onChange={handleChangeSearchTerm}
                className="inputFilter"
              />
            </th>
            <th />
            <th />
            <th />
            <th />
            <th>
              <select
                name="genres"
                className="genreFilter"
                value={genreSelected}
                onChange={(event) => setGenreSelected(event.target.value)}
              >
                <option value="">All</option>
                {optionsGenre.map((optionGenre) => (
                  <option value={optionGenre.toLowerCase()}>{optionGenre}</option>
                ))}
              </select>
            </th>
          </tr>
        </thead>
        {movies.length > 0 ? (
          <tbody>
            {filteredMovies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.runtime}</td>
                <td>{movie.revenueFormatted}</td>
                <td>{movie.rating}</td>
                <td>{movie.genreFormatted}</td>
              </tr>
            ))}
          </tbody>

        ) : isLoading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <h1>
              Theres nothing like
              <strong>
                {searchTerm}
              </strong>
            </h1>
          </div>
        )}
      </table>
    </Container>
  );
}
