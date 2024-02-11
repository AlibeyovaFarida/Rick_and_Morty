import EpisodeDetail from '@/components/episodes/episodeDetail'
import { getSingleEpisode } from '@/services/getAllEpisodes'
import { notFound } from 'next/navigation';

export default async function EpisodeDetailPage({params})  {
  const episode = await getSingleEpisode(params.id);
  if (episode.error) {
    notFound();
  }
  const cast = episode?.characters?.reduce((acc, ch) => {
    const Cast = async () => {
      const res = await fetch(ch);
      const data = await res.json();
      acc.push(data);
    };
    Cast();
    return acc;
  }, []);
  return (
    <div>
      <EpisodeDetail episode={episode} cast={cast}/>
    </div>
  );
}

