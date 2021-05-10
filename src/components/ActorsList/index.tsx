import { FC } from "react";
import { useQuery } from "react-query";
import { searchActors } from "api";
import { Actor as ActorType } from "types";
import { Actor } from "components/ActorsList/Actor";

type Props = {
  searchString: string;
};

export const ActorsList: FC<Props> = ({ searchString }) => {
  const actors = useQuery<ActorType[] | null | undefined, Error>(
    `actors-${searchString}`,
    () => searchActors({ query: searchString })
  );

  const { isLoading, isError, data, error } = actors;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error && error.message}</span>;
  }

  return (
    <>
      {!data || !data.length
        ? "No results found"
        : data.map((actor: ActorType) => (
            <Actor key={actor.id} actorData={actor} />
          ))}
    </>
  );
};
