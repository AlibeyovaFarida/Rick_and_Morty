import CharacterDetail from '@/components/characters/characterDetail'
import { getSingleCharacter } from '@/services/getAllCharacters';
import { notFound } from 'next/navigation';

export default async function CharacterDetailPage({params}){
  const character = await getSingleCharacter(params?.id)
  if (character.error) {
    notFound();
  }
  const episodes = character?.episode?.reduce((acc, epi) => {
    const Episodes = async() => {
      const res = await fetch(epi)
      const data = await res.json()
      acc.push(data)
    }
    Episodes()
    return acc
  },[])
  const getLocation = async() => {
    const res = await fetch(character?.location?.url)
    const data = await res.json()
    return data
  }
  const location = await getLocation();
  return (
    <div>
      <CharacterDetail
        character={character}
        episodes={episodes}
        location={location}
      />
    </div>
  );
}

