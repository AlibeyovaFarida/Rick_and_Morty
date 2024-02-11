import Characters from "@/components/characters";
import PageContainer from "@/container/PageContainer";
import { getAllCharacters } from "@/services/getAllCharacters";
import { notFound } from "next/navigation";

export default async function Home({params,searchParams}) {
  const speciesParams = searchParams?.species
  const genderParams = searchParams?.gender
  const statusParams = searchParams?.status
  const nameParams = searchParams?.name
  const pageParams = searchParams?.page
  const {results, info} = await getAllCharacters(
    speciesParams,
    genderParams,
    statusParams,
    nameParams,
    pageParams
  );
  if(!results || params?.characters?.[0]==="404"){
    notFound()
  }
  return (
    <div>
      <PageContainer>
        <Characters characters={results} pages={info?.pages}/>
      </PageContainer>
    </div>
  );
}
