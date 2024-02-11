import React from "react";
import Image from "next/image";
import RickAndMorty from "../../assets/Rick&Morty3.svg"
import Search from "../search";
import EpisodeCard from "./episodeCard";
import PaginationControlled from "../pagination";
const Episodes = ({episodes, pages}) => {
  return (
    <div className="flex flex-col items-center pt-[36px]">
      <Image src={RickAndMorty} alt="" />
      <Search placeholder="Filter by name or episode (ex. S01 or S01E02)" maxWidth={"max-w-[500px]"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
        {episodes?.map((episode) => {
          return <EpisodeCard key={episode?.id} episode={episode} />;
        })}
      </div>
      <PaginationControlled count={pages} />
    </div>
  );
};

export default Episodes;
