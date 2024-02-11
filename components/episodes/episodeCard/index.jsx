import Link from 'next/link';
import React from 'react'

const EpisodeCard = ({episode}) => {
  return (
    <Link href={`/episodes/${episode?.id}`} className="flex flex-col justify-center max-h-32 py-[38px] px-4 bg-gray-100 shadow-lg rounded">
      <h6 className="text-xl font-medium leading-[30px] text-center">{episode?.name}</h6>
      <p className="text-sm text-center font-normal text-black text-opacity-60">
        {episode?.air_date}
      </p>
      <p className="text-sm text-center font-bold text-black text-opacity-60">
        {episode?.episode}
      </p>
    </Link>
  );
}

export default EpisodeCard