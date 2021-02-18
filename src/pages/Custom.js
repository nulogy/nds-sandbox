import React from "react";
import { Page } from "@nulogy/components";

const contentHeight = "calc(100vh - 72px - 16px)";

export const Custom = () => {
  return <Page minHeight={contentHeight} title="Title"></Page>;
};
