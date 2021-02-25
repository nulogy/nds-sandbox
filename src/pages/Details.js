import React from "react";
import {
  theme,
  Box,
  Flex,
  Title,
  SectionTitle,
  Heading2,
  SubsectionTitle,
  Text,
  Icon,
  IconicButton,
  Page,
  Tabs,
  Tab,
  Table,
  Form,
  Textarea,
  PrimaryButton,
  QuietButton,
  StatusIndicator
} from "@nulogy/components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Site A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Site B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Site C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Site D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Site E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Site F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Site G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const customCellRenderer = ({ cellData }) => (
  <>
    <Flex>
      <Icon color="red" mr="half" icon="error" />
      <Text>{cellData}</Text>
    </Flex>
  </>
);

const linkRenderer = ({ cellData }) => (
  <>
    <Flex>
      <Link to="Capacity">{cellData}</Link>
    </Flex>
  </>
);

const forecastColumns = [
  { label: "ID", dataKey: "forecastID", cellRenderer: linkRenderer },
  { label: "Customer", dataKey: "customer" },
  { label: "Start date", dataKey: "startDate" },
  {
    label: "Alert",
    dataKey: "performance",
    cellRenderer: customCellRenderer
  }
];

const forecastRows = [
  {
    forecastID: "PO Line Item Created",
    expectedCompletion: "Nov 3, 2019",
    startDate: "Dec 13, 2019",
    performance: "10 Days Late",
    id: "r1"
  }
];

const productionColumns = [
  { label: "Date", dataKey: "date" },
  { label: "Expected Quantity", dataKey: "expectedQuantity" },
  { label: "Actual Quantity", dataKey: "actualQuantity" }
];

const productionRows = [
  {
    date: "2019-10-01",
    expectedQuantity: "2,025 eaches",
    actualQuantity: "1,800 eaches",
    id: "r1"
  },
  {
    date: "2019-10-02",
    expectedQuantity: "2,475 eaches",
    actualQuantity: "2,250 eaches",
    id: "r2"
  },
  {
    date: "2019-10-03",
    expectedQuantity: "2,475 eaches",
    actualQuantity: "1,425 eaches",
    id: "r3"
  },
  {
    date: "2019-10-24",
    expectedQuantity: "2,475 eaches",
    actualQuantity: "-",
    id: "r8"
  }
];

const StorybookSidebarWidth = "calc(100vw  - 16px)";

export const Details = () => {
  return (
    <Page>
      <Flex>
        <Box p="x3" flexGrow="2">
          <Title mb="x6">Forecast Detail</Title>

          <LineChart
            width={900}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>

          <Table compact columns={forecastColumns} rows={forecastRows} />
        </Box>
        <Box
          bg="white"
          p="x3"
          pr="x2"
          width={{ extraSmall: StorybookSidebarWidth, medium: "400px", large: "472px" }}
          borderLeft={{ medium: `solid 1px ${theme.colors.lightGrey}` }}
          position={{ extraSmall: "absolute", medium: "static" }}
          borderRadius="medium"
        >
          <Box justifyContent="space-between" alignItems="flex-start" mb="x4">
            <Box mb="x3">
              <Heading2>Filters</Heading2>
              <Text>...</Text>
            </Box>
            <Box>
              <Heading2>Comments</Heading2>
              <Text>...</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Page>
  );
};
