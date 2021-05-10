import React from "react";
import classnames from "classnames";
import { Tabs as TabsType } from "types";
import styles from "./styles.module.css";

type Props = {
  tabs: Array<TabsType>;
  onClick: (active: TabsType) => void;
  active: string;
};

export const Tabs: React.FC<Props> = ({ tabs, onClick, active }) => (
  <div className={styles.container}>
    {tabs.map((tab, index) => (
      <button
        key={index}
        type="button"
        className={classnames(styles.button, {
          [styles.active]: active === tab,
        })}
        onClick={() => onClick(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);
