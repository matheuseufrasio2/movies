/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TableContainer, FilterContainer } from './styles';

import { api } from '../../services/api';
import { onlyUnique } from '../../utils/onlyUnique';
import { Loader } from '../Loader';

export function MoviesTable() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreSelected, setGenreSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [optionsGenre, setOptionsGenre] = useState([]);

  const navigate = useNavigate();

  const filteredMovies = useMemo(() => {
    const result = movies.filter((movie) => {
      let filteredBySearchTerm;
      let filteredByGenre;
      if (searchTerm.length > 0 && genreSelected.length === 0) {
        filteredBySearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        return filteredBySearchTerm;
      } if (searchTerm.length > 0 && genreSelected.length > 0) {
        filteredBySearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        filteredByGenre = movie.genre?.some((g) => g.toLowerCase() === genreSelected);
        return filteredByGenre && filteredBySearchTerm;
      } if (searchTerm.length === 0 && genreSelected.length > 0) {
        filteredByGenre = movie.genre?.some((g) => g.toLowerCase() === genreSelected);
        return filteredByGenre;
      }

      return true;
    });

    return result;
  }, [genreSelected, movies, searchTerm]);

  const loadMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.get('/movies');

      const genres = [];
      const dataFormatted = response.data.map((movie) => {
        movie.genre.forEach((g) => genres.push(g));
        return {
          ...movie,
          id: `${movie.title.toLowerCase().replaceAll(' ', '-')}_${movie.votes}`,
          revenueFormatted: movie.revenue.length > 0 ? `$${movie.revenue}` : '$0.00',
          genreFormatted: movie.genre.join(', '),
        };
      });

      if (optionsGenre.length < 1) {
        const unique = genres.filter(onlyUnique);
        setOptionsGenre(unique);
      }
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

  function navigateToMovie(id) {
    navigate(`/movie/${id}`);
  }

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  useEffect(() => {

  });

  return (
    <Container>
      <FilterContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Filter by title"
          onChange={handleChangeSearchTerm}
          className="inputFilter"
        />
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
      </FilterContainer>
      <TableContainer>
        {isLoading ? (
          <div className="loading-container">
            <Loader />
          </div>
        ) : (
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
            </thead>
            <tbody>
              {filteredMovies.length > 0 ? (
                <>
                  {filteredMovies.map((movie, index) => (
                    <tr key={`${movie.id}-${index}`} onClick={() => navigateToMovie(movie.id)}>
                      <td>{movie.title}</td>
                      <td>{movie.year}</td>
                      <td>{movie.runtime}</td>
                      <td>{movie.revenueFormatted}</td>
                      <td>{movie.rating}</td>
                      <td>{movie.genreFormatted}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <div className="loading-container">Nothing to show...</div>
              )}
            </tbody>
          </table>
        )}

      </TableContainer>
    </Container>
  );
}
