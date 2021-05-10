import { FC } from "react";
import { Movie as MovieType } from "types";
import styles from "./styles.module.css";

type Props = {
  movieData: MovieType;
};

export const Movie: FC<Props> = ({ movieData }) => {
  return (
    <div className={styles.movie}>
      <img
        src={`${process.env.REACT_APP_API_IMG}/t/p/original${movieData.poster_path}`}
        alt={movieData.title}
        className={styles.poster}
      />
      <div className={styles["vote-average"]}>{movieData.vote_average}</div>
      <p className={styles.title}>{movieData.title}</p>
    </div>
  );
};
