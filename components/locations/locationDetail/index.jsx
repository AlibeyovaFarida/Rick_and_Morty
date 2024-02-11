import BackButton from '@/components/backButton';
import CharacterCard from '@/components/characters/characterCard';
import PageContainer from '@/container/PageContainer'
import React from 'react'


const LocationDetail = ({residents, location}) => {
  return (
    <PageContainer>
      <div className="relative w-full flex flex-col items-center gap-6 pt-[30px] mb-[64px]">
        <BackButton top={"top-4 lg:top-6"} />
        <h2 className="text-[#081F32] text-[32px] lg:text-4xl font-roboto text-center pt-6 lg:pt-10">
          {location?.name}
        </h2>
        <div className="w-full flex justify-evenly items-stretch">
          <div>
            <h4 className="text-[#081F32] font-bold text-base font-roboto">
              Type
            </h4>
            <span className="text-[#6E798C] text-sm font-roboto">
              {location?.type}
            </span>
          </div>
          <div>
            <h4 className="text-[#081F32] font-bold text-base font-roboto">
              Dimension
            </h4>
            <span className="text-[#6E798C] text-sm font-roboto">
              {location?.dimension}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl text-[#8E8E93] font-roboto font-medium">
          Residents
        </h3>
        {residents.length == 0 ? (
          <div className="flex align-center justify-center text-4xl text-center mt-10 text-[#32733d]">
            No residents live in this location 🛸
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-5 gap-y-6 pt-[24px] pb-[48px]">
            {residents?.map((resident) => {
              return (
                <CharacterCard key={resident?.name} character={resident} />
              );
            })}
          </div>
        )}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-5 gap-y-6 pt-[24px] pb-[48px]">
          {residents?.map((resident) => {
            return <CharacterCard key={resident?.name} character={resident} />;
          })}
        </div> */}
      </div>
    </PageContainer>
  );
}

export default LocationDetail