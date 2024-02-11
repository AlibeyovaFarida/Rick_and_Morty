import Locations from '@/components/locations'
import PageContainer from '@/container/PageContainer'
import React from 'react'
import { getAllLocations } from "@/services/getAllLocations";
import { notFound } from 'next/navigation';


export default async function LocationsPage({searchParams}){
  const typeParams = searchParams?.type
  const dimensionParams = searchParams?.dimension
  const nameParams = searchParams?.name
  const pageParams = searchParams?.page
  const {results, info} = await getAllLocations(
    typeParams,
    dimensionParams,
    nameParams,
    pageParams
  );
  if(!results){
    notFound()
  }
  console.log(results)
  return (
    <PageContainer>
      <Locations locations={results} pages={info?.pages}/>
    </PageContainer>
  )
}

