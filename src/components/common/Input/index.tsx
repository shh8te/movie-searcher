import React, { ChangeEventHandler } from "react";
import styles from "./styles.module.css";

type Props = {
  placeholder: string;
  children: JSX.Element;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({
  placeholder,
  children,
  value,
  onChange,
}) => (
  <div className={styles.container}>
    <input
      type="text"
      autoComplete="off"
      className={styles.input}
      placeholder=" "
      value={value}
      onChange={onChange}
    />
    <span className={styles.placeholder}>{placeholder}</span>
    <div className={styles["icon-wrapper"]}>{children}</div>
  </div>
);
