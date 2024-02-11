import React from 'react'
import RickAndMorty from "../../assets/Rick&Morty2.svg"
import Image from 'next/image';
import Filter from "./filter/index"
import LocationCard from './locationCard';
import PaginationControlled from '../pagination';
const Locations = ({locations, pages}) => {
  return (
    <div className="flex flex-col items-center pt-[36px]">
      <Image src={RickAndMorty} alt="" />
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
        {locations?.map((location) => {
          return <LocationCard key={location?.id} location={location} />;
        })}
      </div>
      <PaginationControlled count={pages} />
    </div>
  );
}

export default Locations