import { HStack, Box } from "@chakra-ui/layout";
import { Collapse, Heading, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import getNews from "../services/getNews";
import TitleDateCard from "./TitleDateCard";

const News: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const { data: news, isLoading } = useQuery("news", getNews);

  if (isLoading) {
    return (
      <Box>
        <Heading
          as="h2"
          color="gray.600"
          mb="8"
          fontWeight="bold"
          fontSize="xl"
        >
          Noticias para celebrar
        </Heading>

        <HStack spacing="4">
          <Skeleton w="full" height="140px" />
          <Skeleton w="full" height="140px" />
          <Skeleton w="full" height="140px" />
        </HStack>
      </Box>
    );
  }

  return (
    <Box>
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Noticias para celebrar
      </Heading>

      <Box minH="158px">
        {news.map((card, chunkIndex) => (
          <Collapse
            in={activeSlide === chunkIndex}
            animateOpacity
            key={chunkIndex}
          >
            <HStack spacing="4">
              {card.map(({ title, date }) => (
                <TitleDateCard key={title} title={title} date={date} />
              ))}
            </HStack>
          </Collapse>
        ))}
      </Box>

      {news.length > 1 && (
        <HStack justifyContent="center" mt="4">
          {Array.from(Array(news.length).keys()).map((val) => (
            <Box
              as="button"
              w="2"
              h="2"
              _focus={{ outline: "none" }}
              bg={activeSlide === val ? "cyan.400" : "gray.400"}
              rounded="full"
              key={`indicator-${val}`}
              onClick={() => setActiveSlide(val)}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default News;
