import { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element;
};

export const Main: FC<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
