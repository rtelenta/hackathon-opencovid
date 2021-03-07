import fetcher from "utils/fetcher";

const getRecovered = async () => {
  const response: any = await fetcher.get("/recovered-patients");

  return response;
};

export default getRecovered;
