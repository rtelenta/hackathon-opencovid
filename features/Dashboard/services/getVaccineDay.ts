import fetcher from "utils/fetcher";

const getVaccineDay = async () => {
  const response: any = await fetcher.get("/vaccine-day");

  return response;
};

export default getVaccineDay;
