import BackButton from '@/components/backButton';
import CharacterCard from '@/components/characters/characterCard';
import PageContainer from '@/container/PageContainer'
import React from 'react'

const EpisodeDetail = ({episode, cast}) => {
  return (
    <PageContainer>
      <div className="relative w-full flex flex-col items-center gap-6 pt-[30px] mb-[64px]">
        <BackButton top={"top-4 lg:top-6"} />
        <h2 className="text-[#081F32] text-[32px] lg:text-4xl font-roboto pt-6 lg:pt-10 text-center">
          {episode?.name}
        </h2>
        <div className="w-full flex justify-evenly items-stretch">
          <div>
            <h4 className="text-[#081F32] font-bold text-base font-roboto">
              Episode
            </h4>
            <span className="text-[#6E798C] text-sm font-roboto">
              {episode?.episode}
            </span>
          </div>
          <div>
            <h4 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
              Date
            </h4>
            <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
              {episode?.air_date}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl text-[#8E8E93] font-roboto font-medium">Cast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-5 gap-y-6 pt-[24px] pb-[48px]">
          {cast?.map((character) => {
            return <CharacterCard key={character?.id} character={character} />;
          })}
        </div>
      </div>
    </PageContainer>
  );
}

export default EpisodeDetail