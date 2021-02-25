import React from "react";
import { Page, Text } from "@nulogy/components";
import { useMainState } from "../context/MainContext";

export const Home = () => {
  const { user } = useMainState();
  return (
    <Page>
      <Text>
        Welcome{" "}
        <Text as="span" bg="lightBlue">
          {user}
        </Text>{" "}
        to your sandbox. Have fun!{" "}
      </Text>
    </Page>
  );
};
