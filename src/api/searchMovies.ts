import { SearchMoviesResponse } from "types";

type SearchMoviesProps = {
  query: string;
};

export const searchMovies = async ({ query }: SearchMoviesProps) => {
  if (!query) {
    return null;
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/3/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US${
      query ? `&query=${query}` : ""
    }&page=1&include_adult=false`
  );

  if (!response.ok) {
    throw new Error("API responded with an error");
  }

  const data = await response.json();

  const validatedData = SearchMoviesResponse.check(data);

  const { results } = validatedData;

  return results;
};
