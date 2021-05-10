import { MoviesResponse } from "types";

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("API responded with an error");
  }

  const data = await response.json();

  const validatedData = MoviesResponse.check(data);

  const { results } = validatedData;

  return results;
};
