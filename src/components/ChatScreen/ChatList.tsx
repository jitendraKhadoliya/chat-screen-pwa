import React from "react";
import { ChatData } from "../types";
import ChatMessageComponent from "./ChatMessage";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ChatListProps {
  chatData: ChatData[];
}

const ChatList: React.FC<ChatListProps> = ({ chatData }) => {
  const groupImage = "../../asset/groupImage.jpg";

  return (
    <Box w={"100%"}>
      {chatData.map((chatDataItem) => (
        <Box key={chatDataItem.name}>
          <Box borderBottom="1px solid #E5E5E0">
            <Flex
              display="inline-flex"
              padding="20px 16px 16px 16px"
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
              w={"100%"}
            >
              <Flex
                display="flex"
                alignItems="center"
                gap="12px"
                alignSelf="stretch"
              >
                {/* Left Arrow */}
                <Box width="24px" height="24px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12H5M5 12L12 19M5 12L12 5"
                      stroke="#141E0D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box
                  flex="1 0 0"
                  color="#141E0D"
                  fontFamily="Mulish"
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  {/* Our content Name */}
                  <h3>{chatDataItem.name}</h3>
                </Box>
                <Box w={"20px"} h={"20px"} cursor={"pointer"}>
                  {/* Edit Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_889)">
                      <path
                        d="M9.16666 3.33332H5.66666C4.26653 3.33332 3.56647 3.33332 3.03169 3.6058C2.56128 3.84549 2.17883 4.22794 1.93915 4.69834C1.66666 5.23312 1.66666 5.93319 1.66666 7.33332V14.3333C1.66666 15.7335 1.66666 16.4335 1.93915 16.9683C2.17883 17.4387 2.56128 17.8212 3.03169 18.0608C3.56647 18.3333 4.26653 18.3333 5.66666 18.3333H12.6667C14.0668 18.3333 14.7669 18.3333 15.3016 18.0608C15.772 17.8212 16.1545 17.4387 16.3942 16.9683C16.6667 16.4335 16.6667 15.7335 16.6667 14.3333V10.8333M6.66664 13.3333H8.06209C8.46975 13.3333 8.67357 13.3333 8.86538 13.2873C9.03544 13.2464 9.19802 13.1791 9.34714 13.0877C9.51533 12.9847 9.65946 12.8405 9.94771 12.5523L17.9167 4.58332C18.607 3.89296 18.607 2.77368 17.9167 2.08332C17.2263 1.39296 16.107 1.39296 15.4167 2.08332L7.44769 10.0523C7.15944 10.3405 7.01531 10.4847 6.91224 10.6528C6.82086 10.802 6.75352 10.9645 6.71269 11.1346C6.66664 11.3264 6.66664 11.5302 6.66664 11.9379V13.3333Z"
                        stroke="#141E0D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_889">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
              </Flex>
              {/* Header Line */}
              <Flex display="flex" width="343px" alignItems="center" gap="12px">
                <Flex
                  display="flex"
                  alignItems="flex-start"
                  gap="16px"
                  flex="1 0 0"
                >
                  {/* Group Image */}

                  <Box
                    width="48px"
                    height="48px"
                    borderRadius="50%"
                    border="0px solid #FFF"
                    background="lightgray"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <Image
                      src={groupImage}
                      alt="Upper Image 1"
                      width="26px"
                      height="26px"
                      borderRadius="50%"
                    />
                  </Box>

                  {/* text content  */}
                  <Box width="215px">
                    <Flex alignItems={"center"} gap={"6px"}>
                      <Text
                        color="#606060"
                        fontFamily="Mulish"
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                      >
                        From
                      </Text>
                      <Text
                        color="#141E0D"
                        fontFamily="Mulish"
                        fontSize="18px"
                        fontStyle="normal"
                        fontWeight="700"
                        lineHeight="normal"
                      >
                        {chatDataItem.from}
                      </Text>
                    </Flex>

                    <Flex alignItems={"center"} gap={"6px"}>
                      <Text
                        color="#606060"
                        fontFamily="Mulish"
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                      >
                        To
                      </Text>
                      <Text
                        color="#141E0D"
                        fontFamily="Mulish"
                        fontSize="18px"
                        fontStyle="normal"
                        fontWeight="700"
                        lineHeight="normal"
                      >
                        {chatDataItem.to}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
                <Box
                  width="24px"
                  height="24px"
                  flexShrink={0}
                  cursor={"pointer"}
                >
                  {/* 3 DOt svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                      stroke="#141E0D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                      stroke="#141E0D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                      stroke="#141E0D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>

                {/* Your content goes here */}
              </Flex>
              <Flex w={"100%"} justifyContent={"flex-end"}>
                <Box
                  display="flex"
                  width="156px"
                  flexDirection="column"
                  alignItems="flex-start"
                  borderRadius="8px"
                  boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.12)"
                >
                  {/* Frame 18  */}
                  <Box
                    display="flex"
                    height="48px"
                    padding="7px 12px"
                    alignItems="center"
                    gap="12px"
                    alignSelf="stretch"
                    borderRadius="8px 8px 0px 0px"
                    border="1px solid #E5E5E0"
                    background="#FFF"
                  >
                    <Box width="20px" height="20px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M18.3333 17.5V15.8333C18.3333 14.2801 17.271 12.9751 15.8333 12.605M12.9167 2.7423C14.1383 3.23679 15 4.43443 15 5.83333C15 7.23224 14.1383 8.42988 12.9167 8.92437M14.1667 17.5C14.1667 15.9469 14.1667 15.1703 13.9129 14.5577C13.5746 13.741 12.9257 13.092 12.1089 12.7537C11.4964 12.5 10.7198 12.5 9.16667 12.5H6.66667C5.11353 12.5 4.33696 12.5 3.72439 12.7537C2.90763 13.092 2.25871 13.741 1.9204 14.5577C1.66667 15.1703 1.66667 15.9469 1.66667 17.5M11.25 5.83333C11.25 7.67428 9.75762 9.16667 7.91667 9.16667C6.07572 9.16667 4.58333 7.67428 4.58333 5.83333C4.58333 3.99238 6.07572 2.5 7.91667 2.5C9.75762 2.5 11.25 3.99238 11.25 5.83333Z"
                          stroke="#141E0D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      {/* Your content goes here */}
                    </Box>
                    {/* Your content goes here */}
                    asjsalk
                  </Box>
                  {/* Frame 19  */}

                  <Box
                    display="flex"
                    height="48px"
                    padding="7px 12px"
                    alignItems="center"
                    gap="12px"
                    alignSelf="stretch"
                    borderRadius="8px 8px 0px 0px"
                    border="1px solid #E5E5E0"
                    background="#FFF"
                  >
                    <Box
                      width="20px"
                      height="20px"
                      // Additional styles can be added here if needed
                    >
                      {/* Your content goes here */}
                    </Box>
                    {/* Your content goes here */}
                    asjsalk
                  </Box>
                  {/* Frame 20  */}

                  <Box
                    display="flex"
                    height="48px"
                    padding="7px 12px"
                    alignItems="center"
                    gap="12px"
                    alignSelf="stretch"
                    borderRadius="8px 8px 0px 0px"
                    border="1px solid #E5E5E0"
                    background="#FFF"
                  >
                    <Box
                      width="20px"
                      height="20px"
                      // Additional styles can be added here if needed
                    >
                      {/* Your content goes here */}
                    </Box>
                    {/* Your content goes here */}
                    asjsalk
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Box>
          {/* Access the chat messages */}

          {chatDataItem.chats.map((chat) => (
            <>
              <ChatMessageComponent key={chat.id} chat={chat} />
            </>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ChatList;
