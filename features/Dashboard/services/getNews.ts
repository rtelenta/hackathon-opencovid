import fetcher from "utils/fetcher";
import splitArrayInChunks from "utils/splitArrayInChunks";

const getNews = async () => {
  const response: any = await fetcher.get("/happy-news");
  const chunks = 3;

  return splitArrayInChunks<any>(response, chunks);
};

export default getNews;
