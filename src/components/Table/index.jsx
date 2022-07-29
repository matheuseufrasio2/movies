/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useState } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';
import { onlyUnique } from '../../utils/onlyUnique';

export function MoviesTable() {
  const [movies, setMovies] = useState([]);
  const [optionsGenre, setOptionsGenre] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/movies');

      const genres = [];

      const dataFormatted = response.data.map((movie, index) => {
        movie.genre.forEach((g) => genres.push(g));
        return {
          ...movie,
          id: index + Math.random(),
          revenueFormatted: `$${movie.revenue}`,
          genreFormatted: movie.genre.join(', '),
        };
      });

      const unique = genres.filter(onlyUnique);
      setOptionsGenre(unique);
      setMovies(dataFormatted);
    }

    getData();
  }, []);

  return (
    <Container>
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
              <input type="text" placeholder="Filter by title" />
            </th>
            <th />
            <th />
            <th />
            <th />
            <th>
              <select name="genres">
                <option value="all">All</option>
                {optionsGenre.map((optionGenre) => (
                  <option value={optionGenre.toLowerCase()}>{optionGenre}</option>
                ))}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
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
      </table>
    </Container>
  );
}
