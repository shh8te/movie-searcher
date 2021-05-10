import { FC } from "react";
import { useQuery } from "react-query";
import { searchMovies } from "api";
import { SearchMovies as SearchMoviesType } from "types";
import { Movie } from "components/MoviesLists/Movie";

type Props = {
  searchString: string;
};

export const SearchMoviesList: FC<Props> = ({ searchString }) => {
  const moviesSearch = useQuery<SearchMoviesType[] | null | undefined, Error>(
    `movies-${searchString}`,
    () => searchMovies({ query: searchString })
  );

  const { isLoading, isError, data, error } = moviesSearch;

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
        : data.map((movie: SearchMoviesType) => (
            <Movie key={movie.id} movieData={movie} />
          ))}
    </>
  );
};
