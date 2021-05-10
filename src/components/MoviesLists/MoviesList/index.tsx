import { FC } from "react";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "api";
import { Movie as MovieType } from "types";
import { Movie } from "components/MoviesLists/Movie";

export const MoviesList: FC = () => {
  const movies = useQuery<MovieType[] | undefined, Error>(
    "upcomingMovies",
    getUpcomingMovies
  );

  const { isLoading, isError, data, error } = movies;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error && error.message}</span>;
  }

  return (
    <>
      {!data || !data.length
        ? "No results found"
        : data.map((movie: MovieType) => (
            <Movie key={movie.id} movieData={movie} />
          ))}
    </>
  );
};
