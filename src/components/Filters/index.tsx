import { ChangeEventHandler, FC } from "react";
import { Tabs, Input } from "components/common";
import { TABS } from "const";
import { Tabs as TabsType } from "types";
import searchIcon from "assets/Search.svg";
import styles from "./styles.module.css";

type Props = {
  searchString: string;
  searchHandler: ChangeEventHandler<HTMLInputElement>;
  activeTab: TabsType;
  setActiveTab: (active: TabsType) => void;
};

export const Filters: FC<Props> = ({
  searchString,
  searchHandler,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className={styles.filters}>
      <div className={styles["tabs-wrapper"]}>
        <Tabs tabs={TABS} active={activeTab} onClick={setActiveTab} />
      </div>
      <div className={styles["search-wrapper"]}>
        <Input
          placeholder="Search"
          value={searchString}
          onChange={searchHandler}
        >
          <img
            src={searchIcon}
            className={styles["search-logo"]}
            alt="search"
          />
        </Input>
      </div>
    </div>
  );
};
