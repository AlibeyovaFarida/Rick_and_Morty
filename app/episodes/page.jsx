import Episodes from "@/components/episodes";
import PageContainer from "@/container/PageContainer";
import { getAllEpisodes } from "@/services/getAllEpisodes";
import { notFound } from "next/navigation";
import React from "react";

export default async function EpisodesPage({searchParams}) {
  const nameParams = searchParams?.name
  const pageParams = searchParams?.page
  const {results, info} = await getAllEpisodes(nameParams, pageParams);
  if(!results){
    notFound()
  }
  return (
    <PageContainer>
      <Episodes episodes={results} pages={info?.pages}/>
    </PageContainer>
  );
}
