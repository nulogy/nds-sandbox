import React from "react";
import {
  theme,
  Box,
  Flex,
  Title,
  SectionTitle,
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
  QuietButton
} from "@nulogy/components";

const customCellRenderer = ({ cellData }) => (
  <>
    <Flex>
      <Icon color="red" mr="half" icon="error" />
      <Text>{cellData}</Text>
    </Flex>
  </>
);

const milestoneColumns = [
  { label: "Milestone", dataKey: "milestone" },
  { label: "Expected Completion", dataKey: "expectedCompletion" },
  { label: "Actual Completion", dataKey: "actualCompletion" },
  {
    label: "Performance",
    dataKey: "performance",
    cellRenderer: customCellRenderer
  }
];

const milestoneRows = [
  {
    milestone: "PO Line Item Created",
    expectedCompletion: "Nov 3, 2019",
    actualCompletion: "Dec 13, 2019",
    performance: "10 Days Late",
    id: "r1"
  },
  {
    milestone: "PO Line Item Created",
    expectedCompletion: "Nov 3, 2019",
    actualCompletion: "Dec 13, 2019",
    performance: "40 Days Late",
    id: "r2"
  },
  {
    milestone: "PO Line Item Created",
    expectedCompletion: "Nov 3, 2019",
    actualCompletion: "Dec 13, 2019",
    performance: "40 Days Late",
    id: "r3"
  },
  {
    milestone: "PO Line Item Created",
    expectedCompletion: "Nov 3, 2019",
    actualCompletion: "Dec 13, 2019",
    performance: "40 Days Late",
    id: "r8"
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
          <Title mb="x6">I am title</Title>
          <Tabs defaultSelectedIndex={0}>
            <Tab label="Details">
              <Box pt="x2" mb="x3">
                <SectionTitle mb="x4">Details</SectionTitle>
                <Flex flexWrap="wrap" justifyContent="space-between" mb="x3">
                  <Box width={1 / 3} pr="x1" mb="x3">
                    <Text mb="x1" fontSize="small" fontWeight="bold" lineHeight="smallTextBase">
                      Purchase Order Number
                    </Text>
                    <Text>7050007201911</Text>
                  </Box>
                  <Box width={1 / 3} px="x1" mb="x3">
                    <Text mb="x1" fontSize="small" fontWeight="bold" lineHeight="smallTextBase">
                      Purchase Order Number
                    </Text>
                    <Text>7050007201912</Text>
                  </Box>
                  <Box width={1 / 3} pl="x1" mb="x3">
                    <Text mb="x1" fontSize="small" fontWeight="bold" lineHeight="smallTextBase">
                      Purchase Order Number
                    </Text>
                    <Text>7050007201913</Text>
                  </Box>
                  <Box width={1 / 3} pr="x1" mb="x3">
                    <Text mb="x1" fontSize="small" fontWeight="bold" lineHeight="smallTextBase">
                      Purchase Order Number
                    </Text>
                    <Text>7050007201914</Text>
                  </Box>
                  <Box width={1 / 3} px="x1" mb="x3">
                    <Text mb="x1" fontSize="small" fontWeight="bold" lineHeight="smallTextBase">
                      Purchase Order Number
                    </Text>
                    <Text>7050007201915</Text>
                  </Box>
                  <Box width={1 / 3} pl="x1" mb="x3">
                    <Text mb="x1" fontSize="small" fontWeight="bold" lineHeight="smallTextBase">
                      Purchase Order Number
                    </Text>
                    <Text>7050007201916</Text>
                  </Box>
                </Flex>
              </Box>
            </Tab>

            <Tab label="Milestones">
              <Box py="x2">
                <SectionTitle mb="x2">Milestone Performance</SectionTitle>
                <Table columns={milestoneColumns} rows={milestoneRows} />
              </Box>
            </Tab>
            <Tab label="Production Records">
              <Box pt="x2" mb="x3">
                <SectionTitle mb="x2">Production Records</SectionTitle>
                <Table columns={productionColumns} rows={productionRows} />
              </Box>
              <Box pt="x1">
                <SubsectionTitle mb="x3">Comments</SubsectionTitle>
                <Form>
                  <Textarea rows="4" mb="x3" placeholder="Leave a comment..." />
                  <Box>
                    <PrimaryButton mr="x1">Comment</PrimaryButton>
                    <QuietButton>Cancel</QuietButton>
                  </Box>
                </Form>
              </Box>
            </Tab>
          </Tabs>
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
          <Flex justifyContent="space-between" alignItems="flex-start" mb="x4">
            <SectionTitle mt="half">I am sidebar</SectionTitle>
            <IconicButton icon="close" />
          </Flex>
          <Text>I am sidbar content.</Text>
        </Box>
      </Flex>
    </Page>
  );
};
