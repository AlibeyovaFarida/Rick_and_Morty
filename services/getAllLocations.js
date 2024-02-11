export const getAllLocations = async (typeParams = "", dimensionParams="", nameParams="", pageParams="") => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/location?page=${pageParams}&name=${nameParams}&type=${typeParams}&dimension=${dimensionParams}`
  );
  const data = await res.json();
  return data;
};

export const getAllTypes = async () => {
  const { results } = await getAllLocations();
  const arr = results?.reduce((acc, location) => {
    acc.push(location?.type);
    return [...new Set(acc)];
  }, []);
  return arr;
};

export const getAllDimensions = async() => {
    const {results} = await getAllLocations()
    const arr = results?.reduce((acc, location) => {
      acc.push(location?.dimension);
      return [...new Set(acc)];
    }, []);
    return arr
}

export const getSingleLocation = async(id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  const data = await res.json()
  return data
}