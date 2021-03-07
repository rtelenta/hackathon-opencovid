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
import * as charts from "@reactchartjs/react-chart.js";
import { useQuery } from "react-query";
import getVaccineDay from "../services/getVaccineDay";
import esLocale from "date-fns/locale/es";
import Icon from "components/Icon";

const data = (vaccinated: any, noFilter?: boolean) => (canvas: any) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 150, 0, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(11, 197, 234, 0.3)");

  const _vaccinated = [...vaccinated]
    .reverse()
    .filter((_: any, key: number) => noFilter || key < 7)
    .map((data: any) => ({
      ...data,
      dateShort: format(parseISO(data.date), "dd-MMM", {
        locale: esLocale,
      }),
    }))
    .reverse();

  return {
    labels: _vaccinated.map((data: any) => data.dateShort),
    datasets: [
      {
        label: "Vacunados",
        data: _vaccinated.map((data: any) => data.vaccine),
        fill: true,
        backgroundColor: gradient,
        pointRadius: 3,
        borderColor: "rgb(11, 197, 234)",
        pointBorderColor: "rgb(11, 197, 234)",
        pointBackgroundColor: "rgb(11, 197, 234)",
        pointHoverBackgroundColor: "rgb(11, 197, 234)",
        pointHoverBorderColor: "rgb(11, 197, 234)",
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

const Vaccinated: React.FC = () => {
  const { Line }: any = charts;
  const { data: vaccinated, isLoading } = useQuery("vaccinated", getVaccineDay);
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
        Vacunados diariamante{" "}
        <IconButton
          size="xs"
          aria-label="Search database"
          colorScheme="cyan"
          icon={<Icon name="search" color="cyan.400" size={18} />}
          variant="outline"
          onClick={onOpen}
        />
      </Heading>

      <Box onClick={onOpen} cursor="pointer">
        <Line data={data(vaccinated)} options={options} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vacunados diariamante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Line data={data(vaccinated, true)} options={optionsLarge} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Vaccinated;
