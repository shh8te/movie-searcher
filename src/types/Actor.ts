import { Array, Record, String, Number, Boolean, Static } from "runtypes";

const KnownFor = Record({
  adult: Boolean.optional(),
  backdrop_path: String.nullable().optional(),
  genre_ids: Array(Number).optional(),
  id: Number.optional(),
  media_type: String,
  original_language: String.optional(),
  original_title: String.optional(),
  overview: String.optional(),
  poster_path: String.nullable().optional(),
  release_date: String.optional(),
  title: String.optional(),
  video: Boolean.optional(),
  vote_average: Number.optional(),
  vote_count: Number.optional(),
});

const ActorsResults = Record({
  adult: Boolean.optional(),
  gender: Number.optional(),
  id: Number.optional(),
  known_for: Array(KnownFor).optional(),
  known_for_department: String.optional(),
  name: String.optional(),
  popularity: Number.optional(),
  profile_path: String.nullable().optional(),
});

export const ActorsResponse = Record({
  page: Number.optional(),
  results: Array(ActorsResults).optional(),
  total_pages: Number.optional(),
  total_results: Number.optional(),
});

export type Actor = Static<typeof ActorsResults>;
