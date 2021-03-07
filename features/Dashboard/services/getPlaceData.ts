import fetcher from "utils/fetcher";

const getPlaces = async (id: string | null = null) => {
  const response: any = await fetcher.get(`/places/${id || "all"}`);

  return response;
};

export default getPlaces;
