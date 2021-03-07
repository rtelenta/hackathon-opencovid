import {
  Box,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import Card from "components/Card";
import React from "react";
import { format, parseISO } from "date-fns";
import esLocale from "date-fns/locale/es";
import * as charts from "@reactchartjs/react-chart.js";
import { useQuery } from "react-query";
import getRecovered from "../services/getRecovered";
import Icon from "components/Icon";

const data = (recovered: any, noFilter?: boolean) => (canvas: any) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 150, 0, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(72, 187, 120, 0.3)");

  const _recovered = [...recovered]
    .filter((_: any, key: number) => noFilter || key < 7)
    .map((data: any) => ({
      ...data,
      dateShort: format(parseISO(data.date), "dd-MMM", {
        locale: esLocale,
      }),
    }))
    .reverse();

  return {
    labels: _recovered.map((data: any) => data.dateShort),
    datasets: [
      {
        label: "Recuperados",
        data: _recovered.map((data: any) => data.recovered),
        fill: true,
        backgroundColor: gradient,
        pointRadius: 3,
        borderColor: "rgb(72, 187, 120)",
        pointBorderColor: "rgb(72, 187, 120)",
        pointBackgroundColor: "rgb(72, 187, 120)",
        pointHoverBackgroundColor: "rgb(72, 187, 120)",
        pointHoverBorderColor: "rgb(72, 187, 120)",
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        borderWidth: 1.2,
      },
    ],
  };
};

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};
const optionsLarge = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const Recovered: React.FC = () => {
  const { Line }: any = charts;
  const { data: recovered, isLoading } = useQuery("recovered", getRecovered);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) {
    return <Skeleton w="full" height="140px" />;
  }

  return (
    <Card shadowLarge>
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize="xs"
        mb="5"
        display="flex"
        justifyContent="space-between"
      >
        Recuperados diariamante
        <IconButton
          size="xs"
          aria-label="Search database"
          colorScheme="green"
          icon={<Icon name="search" color="green.400" size={18} />}
          variant="outline"
          onClick={onOpen}
        />
      </Heading>

      <Box onClick={onOpen} cursor="pointer">
        <Line data={data(recovered)} options={options} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Recuperados diariamante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Line data={data(recovered, true)} options={optionsLarge} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Recovered;
