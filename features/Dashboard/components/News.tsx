import { HStack, Box } from "@chakra-ui/layout";
import { Collapse, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import splitArrayInChunks from "utils/splitArrayInChunks";
import TitleDateCard from "./TitleDateCard";

const News: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const news = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const newsChunks = splitArrayInChunks<number>(news, 3);

  return (
    <Box>
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Noticias para celebrar
      </Heading>

      <Box minH="158px">
        {newsChunks.map((card, chunkIndex) => (
          <Collapse
            in={activeSlide === chunkIndex}
            animateOpacity
            key={chunkIndex}
          >
            <HStack spacing="4">
              {card.map((val) => (
                <TitleDateCard key={val} />
              ))}
            </HStack>
          </Collapse>
        ))}
      </Box>

      {newsChunks.length && (
        <HStack justifyContent="center" mt="4">
          {Array.from(Array(newsChunks.length).keys()).map((val) => (
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
