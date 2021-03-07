import fetcher from "utils/fetcher";

const getPlaces = async () => {
  const response: any = await fetcher.get("/places");

  return response;
};

export default getPlaces;
