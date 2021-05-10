import { ActorsResponse } from "types";

type SearchActorsProps = {
  query: string;
};

export const searchActors = async ({ query }: SearchActorsProps) => {
  if (!query) {
    return null;
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/3/search/person?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US${
      query ? `&query=${query}` : ""
    }&page=1&include_adult=false`
  );

  if (!response.ok) {
    throw new Error("API responded with an error");
  }

  const data = await response.json();

  const validatedData = ActorsResponse.check(data);

  const { results } = validatedData;

  return results;
};
