import fetcher from "utils/fetcher";
import kFormatter from "utils/kFormatter";

const getGeneralData = async () => {
  const response: any = await fetcher.get("/data");

  return {
    ...response,
    averageDay: kFormatter(response.averageDay),
    totalSecond: kFormatter(response.totalSecond),
  };
};

export default getGeneralData;
