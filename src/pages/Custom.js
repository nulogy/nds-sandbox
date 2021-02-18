import React from "react";
import { Box, Flex, Page, Title, theme, SectionTitle, Text, IconicButton } from "@nulogy/components";

const contentHeight = "calc(100vh - 72px - 16px)";
const sidebarWidth = "calc(100vw - 16px)";

export const Custom = () => {
  return <Page minHeight={contentHeight} title="Title"></Page>;
};
