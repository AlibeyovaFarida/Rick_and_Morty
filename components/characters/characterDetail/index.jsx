import PageContainer from "@/container/PageContainer";
import React from "react";
import Image from "next/image";
import ArrowBtn from "@/assets/arrow.svg"
import BackButton from "@/components/backButton";
import Link from "next/link";
const CharacterDetail = ({character, episodes,location}) => {
  return (
    <PageContainer>
      <div className="relative flex flex-col items-center gap-4 mt-16 lg:mt-4 mb-[42px]">
        <BackButton top={"-top-8 lg:top-6"}/>
        <img src={character?.image} alt="" className="w-[146px] sm:w-[223px] md:w-[300px] h-[148px] sm:h-[224px] md:h-[300px] rounded-[50%]"/>
        <h2 className="text-[32px] lg:text-5xl font-roboto text-[#081F32] text-center">
          {character?.name}
        </h2>
      </div>
      <div className="flex mb-9 flex-col md:flex-row gap-[52px] md:gap-0">
        <div className="w-full">
          <h4 className="font-roboto text-[#8E8E93] mb-9">Informations</h4>
          <div className="pl-4 pr-5">
            <div className="pt-2 pb-3 border-b">
              <h5 className="text-[#081F32] font-bold text-base font-roboto">
                Gender
              </h5>
              <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
                {character?.gender}
              </span>
            </div>
            <div className="pt-2 pb-3 border-b">
              <h5 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
                Status
              </h5>
              <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
                {character?.status}
              </span>
            </div>
            <div className="pt-2 pb-3 border-b">
              <h5 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
                Specie
              </h5>
              <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
                {character?.species}
              </span>
            </div>
            <div className="pt-2 pb-3 border-b">
              <h5 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
                Origin
              </h5>
              <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
                {character?.origin?.name}
              </span>
            </div>
            <div className="pt-2 pb-3 border-b">
              <h5 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
                Type
              </h5>
              <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
                {character?.type == "" ? "Unknown" : character?.type}
              </span>
            </div>
            <div className="pt-2 pb-3 border-b flex justify-between">
              <div>
                <h5 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
                  Location
                </h5>
                <span className="text-[#6E798C] text-sm font-[Roboto] font-sans">
                  {character?.location?.name}
                </span>
              </div>
              <Link
                href={`/locations/${location?.id}`}
                className="flex justify-center items-center"
              >
                <button className="mr-4">
                  <Image src={ArrowBtn} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h4 className="font-roboto text-[#8E8E93] mb-9">Episodes</h4>
          <div className="pl-4 max-h-[400px] overflow-y-scroll">
            {episodes?.map((epi) => {
              return (
                <div
                  className="flex justify-between items-center pt-[10px] pb-4 border-b"
                  key={epi?.id}
                >
                  <div>
                    <h5 className="text-[#081F32] font-bold text-base font-[Roboto] font-sans">
                      {epi?.episode}
                    </h5>
                    <h6 className="text-[#6E798C] text-sm font-[Roboto] font-sans mb-[2px]">
                      {epi?.name}
                    </h6>
                    <span className="text-[#8E8E93] text-[10px] font-[Roboto] font-sans tracking-[1.5px] font-medium">
                      {epi?.air_date}
                    </span>
                  </div>
                  <Link href={`/episodes/${epi?.id}`}>
                    <button>
                      <Image src={ArrowBtn} alt="" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CharacterDetail;
