import { FC } from "react";
import { Actor as ActorType } from "types";
import styles from "./styles.module.css";

type Props = {
  actorData: ActorType;
};

export const Actor: FC<Props> = ({ actorData }) => {
  return (
    <div className={styles.actor}>
      <img
        src={`${process.env.REACT_APP_API_IMG}/t/p/original${actorData.profile_path}`}
        alt={actorData.name}
        className={styles.photo}
      />
      <span className={styles.name}>{actorData.name}</span>
    </div>
  );
};
