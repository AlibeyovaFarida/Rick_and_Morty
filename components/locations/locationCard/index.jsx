import Link from 'next/link';
import React from 'react'

const LocationCard = ({location}) => {
  return (
    <Link href={`/locations/${location?.id}`} className="flex flex-col justify-center max-h-32 py-[38px] px-4 bg-gray-100 shadow-lg rounded">
      <h6 className="text-xl font-medium leading-[30px] text-center">{location?.name}</h6>
      <p className="text-sm text-center font-normal text-black text-opacity-60">
        {location?.type}
      </p>
    </Link>
  );
}

export default LocationCard