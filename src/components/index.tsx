import { useState, ChangeEventHandler } from "react";
import { Header } from "components/Header";
import { Filters } from "components/Filters";
import { Main } from "components/Main";
import { MoviesList } from "components/MoviesLists";
import { SearchMoviesList } from "components/SearchMoviesList";
import { ActorsList } from "components/ActorsList";
import { TABS } from "const";
import { Tabs } from "types";
import { useDebounce } from "hooks";
import styles from "./styles.module.css";

export const App = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [activeTab, setActiveTab] = useState<Tabs>(TABS[0]);

  const searchStringhandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchString(event.currentTarget.value);
  };

  const debouncedSearchString = useDebounce(searchString, 1000);

  const getRenderData = () => {
    if (activeTab === Tabs.Movies) {
      return debouncedSearchString ? (
        <SearchMoviesList searchString={debouncedSearchString} />
      ) : (
        <MoviesList />
      );
    } else {
      return <ActorsList searchString={debouncedSearchString} />;
    }
  };

  return (
    <div className={styles.layout}>
      <Header />
      <Filters
        searchString={searchString}
        searchHandler={searchStringhandler}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Main>{getRenderData()}</Main>
    </div>
  );
};
