export const getAllEpisodes = async (nameParams="",pageParams="") => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${pageParams}&name=${nameParams}`
  );
  const data = await res.json();
  return data;
};
export const getSingleEpisode = async(id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const data = await res.json()
    return data
}