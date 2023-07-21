import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Stack,
  extendTheme,
} from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatScreen from "./components/ChatScreen/ChatScreen";

const theme = extendTheme({
  // Custom theme configuration
});

const App = () => {
  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <Box
        bg={"#1e1e1e"}
        display={"flex"}
        alignItems="center" // Align items vertically (on the cross axis)
        justifyContent="center" // Justify content horizontally (on the main axis)
      >
        <ChatScreen />
      </Box>
    </ChakraProvider>
  );
};

export default App;
