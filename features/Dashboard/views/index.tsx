import { Box, Flex } from "@chakra-ui/react";
import Layout from "components/Layout";
import DataColumn from "../components/DataColumn";
import LinksColumn from "../components/LinksColumn";
import News from "../components/News";
import SearchResult from "../components/SearchResult";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Flex flexGrow={1}>
        <DataColumn />

        <Box bg="bg.dark" flexGrow={1} flexShrink={1} py="14" px="12" as="main">
          <News />
          <SearchResult />
        </Box>

        <LinksColumn />
      </Flex>
    </Layout>
  );
};

export default Dashboard;
