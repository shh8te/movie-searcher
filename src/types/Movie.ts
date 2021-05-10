import { Array, Record, String, Number, Boolean, Static } from "runtypes";

const Dates = Record({
  maximum: String.optional(),
  minimum: String.optional(),
});

const MoviesResults = Record({
  adult: Boolean.optional(),
  backdrop_path: String.nullable().optional(),
  genre_ids: Array(Number).optional(),
  id: Number.optional(),
  original_language: String.optional(),
  original_title: String.optional(),
  overview: String.optional(),
  popularity: Number.optional(),
  poster_path: String.nullable().optional(),
  release_date: String.optional(),
  title: String.optional(),
  video: Boolean.optional(),
  vote_average: Number.optional(),
  vote_count: Number.optional(),
});

export const MoviesResponse = Record({
  dates: Dates.optional(),
  page: Number.optional(),
  results: Array(MoviesResults).optional(),
  total_pages: Number.optional(),
  total_results: Number.optional(),
});

export type Movie = Static<typeof MoviesResults>;
