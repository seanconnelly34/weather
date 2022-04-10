import React from "react";
import "./App.css";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import Forcast from "./components/Forcast";

const Tab = styled(TabUnstyled)`
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  color: #333339;
  cursor: pointer;
  font-size: 35px;
  font-weight: 300;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  display: flex;
  justify-content: center;

  &:hover {
    color: #5fb0e8;
  }

  &.${tabUnstyledClasses.selected} {
    color: #5fb0e8;
    font-weight: bold;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  -webkit-box-shadow: 1px 4px 20px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 4px 20px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 5px solid white;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  margin-bottom: 16px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
  return (
    <Container maxWidth='md'>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Halifax</Tab>
          <Tab>Moscow</Tab>
          <Tab>Mexico</Tab>
        </TabsList>
        <TabPanel value={0}>
          <Forcast city='Halifax' />
        </TabPanel>
        <TabPanel value={1}>
          <Forcast city='Moscow' />
        </TabPanel>
        <TabPanel value={2}>
          <Forcast city='Mexico' />
        </TabPanel>
      </TabsUnstyled>
    </Container>
  );
}
