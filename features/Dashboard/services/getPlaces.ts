import fetcher from "utils/fetcher";

const getPlaces = async () => {
  const response: any = await fetcher.get("/places");

  console.log(response);

  return response;
};

export default getPlaces;
