import React from "react";
import { Page, Box, Flex, Text, List, ListItem, Heading2 } from "@nulogy/components";
import { useMainState } from "../context/MainContext";
import { Link } from "react-router-dom";

const DashboardBox = ({ children, title }) => (
  <Box width={1 / 3} height="400px" borderRadius="large" boxShadow="large" border="1px solid #eee">
    <Box backgroundColor="darkBlue" padding="x1">
      <Heading2 color="white" fontSize="medium" fontWeight="bold" mb="0">
        {title}
      </Heading2>
    </Box>
    <Box p="x1">{children}</Box>
  </Box>
);

export const Home = () => {
  const { user } = useMainState();
  return (
    <Page p="0">
      <Flex>
        <DashboardBox title="Activity">hey</DashboardBox>
        <DashboardBox title="Capacity">hey</DashboardBox>
        <DashboardBox title="Forecasts">hey</DashboardBox>
      </Flex>
      <Flex>
        <DashboardBox title="Alerts">
          <Link to="Details">Kraft -- Forecast over historical</Link>
        </DashboardBox>
        <DashboardBox title="???">hey</DashboardBox>
        <DashboardBox title="???">hey</DashboardBox>
      </Flex>
    </Page>
  );
};
