// ChatMessage.tsx
import React from "react";
import { ChatMessage } from "../types";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ChatMessageProps {
  chat: ChatMessage;
}

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ chat }) => {
  return (
    <div>
      <Box mt={"11px"}></Box>
      <Flex
        w="90%"
        m={"auto"}
        justify={"center"}
        align={"center"}
        gap={"15px"}
        mt={"5"}
        mb={"5"}
      >
        <Box
          width="116px"
          height="2px"
          flexShrink={0}
          as="svg" // Use the 'as' prop to render an 'svg' element
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 116 2"
          fill="none"
        >
          <path d="M0 1H116" strokeWidth="1" stroke="#B7B7B7" />
        </Box>

        <Text
          color="#B7B7B7"
          fontFamily="Mulish"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="normal"
        >
          {chat.time}
        </Text>
        <Box
          width="116px"
          height="2px"
          flexShrink={0}
          as="svg" // Use the 'as' prop to render an 'svg' element
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 116 2"
          fill="none"
        >
          <path d="M0 1H116" strokeWidth="1" stroke="#B7B7B7" />
        </Box>
      </Flex>

      <Box display="inline-flex" alignItems="flex-start" gap="8px" mx={"16px"}>
        <Image
          src={chat.sender.image}
          alt="Upper Image 1"
          width="26px"
          height="26px"
          borderRadius="12px"
          bgRepeat={"no-repeat"}
        />
        <Box
          display="flex"
          padding="8px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          borderRadius="0px 12px 12px 12px"
          background="#FFF"
          boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.08)"
        >
          <Text
            alignSelf="stretch"
            color="#606060"
            fontFamily="Mulish"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            {/* Our Text message goes here */}
            {chat.message}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default ChatMessageComponent;
