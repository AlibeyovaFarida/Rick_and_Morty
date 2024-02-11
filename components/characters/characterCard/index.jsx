import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const CharacterCard = ({character}) => {
  return (
    <Link href={`/character/${character?.id}`} className="shadow-[0px_2px_4px_0px_rgba(0,0,0,0.14),_0px_3px_4px_0px_rgba(0,_0,_0,_0.12),_0px_1px_5px_0px_rgba(0,_0,_0,_0.20)] rounded max-w-[240px]">
      <Image src={character?.image} width={240} height={224} alt="" className='rounded'/>
      <div className="px-4 py-3">
        <h6 className='text-xl font-medium'>{character?.name}</h6>
        <p className='text-sm text-black text-opacity-60'>{character.species}</p>
      </div>
    </Link>
  );
}

export default CharacterCard