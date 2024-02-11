export const getAllCharacters = async (
  speciesParams = "",
  genderParams = "",
  statusParams = "",
  nameParams = "",
  pageParams = ""
) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageParams}&name=${nameParams}&species=${speciesParams}&gender=${genderParams}&status=${statusParams}`
  );
  const data = await res.json();
  return data;
};

export const getAllSpecies = async () => {
  const {results} = await getAllCharacters();
  const arr = results?.reduce((acc, character) => {
    acc.push(character?.species);
    return [...new Set(acc)];
  }, []);
  const species = arr.filter((specie) => {
    return specie !== "";
  });
  return species;
};
export const getAllGenders = async () => {
  const {results} = await getAllCharacters();
  const arr = results?.reduce((acc, character) => {
    acc.push(character?.gender);
    return [...new Set(acc)];
  }, []);
  const genders = arr.filter((gender) => {
    return gender !== "";
  });
  return genders;
};
export const getAllStatuses = async () => {
  const {results} = await getAllCharacters();
  const arr = results?.reduce((acc, character) => {
    acc.push(character?.status);
    return [...new Set(acc)];
  }, []);
  const statuses = arr.filter((status) => {
    return status !== "";
  });
  return statuses;
};

export const getSingleCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json()
  return data;
}
