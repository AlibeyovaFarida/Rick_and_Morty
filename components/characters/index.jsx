"use client"
import Image from "next/image";
import RickAndMorty from "../../assets/Rick&Morty.svg";
import PaginationControlled from "../pagination";
import CharacterCard from "./characterCard";
import Filter from "./filter";

const Characters = ({ characters, pages }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center pt-[36px] max-w-[975px]">
        <Image src={RickAndMorty} width={600} height={200} alt="" />
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
          {characters?.map((character) => {
            return (
              <CharacterCard key={character?.name} character={character} />
            );
          })}
        </div>
        <PaginationControlled count={pages}/>
      </div>
    </div>
  );
};

export default Characters;
