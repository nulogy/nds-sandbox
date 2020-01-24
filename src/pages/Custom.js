import React from "react";
import { Box, Flex, Title, theme, SectionTitle, Text, IconicButton } from "@nulogy/components";

const contentHeight = "calc(100vh - 72px - 16px)";
const sidebarWidth = "calc(100vw - 16px)";

export const Custom = () => {
  return (
    <>
      <Flex bg="whiteGrey" flexDirection="column">
        <Flex m="x1" bg="white" boxShadow="large" borderRadius="medium" minHeight={contentHeight}>
          <Box p="x3" pt="x1" flexGrow="2">
            <Title mb="x6">I am title</Title>
          </Box>
          <Box
            bg="white"
            p="x3"
            pr="x2"
            width={{ extraSmall: sidebarWidth, medium: "400px", large: "472px" }}
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
      </Flex>
    </>
  );
};
