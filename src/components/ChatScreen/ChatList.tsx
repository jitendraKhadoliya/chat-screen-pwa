import React, { useState } from "react";
import { ChatData } from "../types";
import ChatMessageComponent from "./ChatMessage";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ChatListProps {
  chatData: ChatData[];
}

const ChatList: React.FC<ChatListProps> = ({ chatData }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

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
                      src="https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8"
                      alt="Upper Image 1"
                      width="48px"
                      height="48px"
                      bgRepeat={"no-repeat"}
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
                  onClick={handleToggleClick}
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
                {toggle && (
                  <Box
                    display="flex"
                    width="156px"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderRadius="8px"
                    boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.12)"
                    pos={"absolute"}
                  >
                    {/* Frame 18  */}
                    <Box
                      cursor={"pointer"}
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
                      {/* Our Text goes here */}
                      <Text
                        color="#141E0D"
                        fontFamily="Mulish"
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="normal"
                      >
                        Members
                      </Text>
                    </Box>
                    {/* Frame 19  */}

                    <Box
                      cursor={"pointer"}
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
                            d="M6.98356 7.37767C7.56356 8.58569 8.35422 9.71789 9.35553 10.7192C10.3568 11.7205 11.4891 12.5112 12.6971 13.0912C12.801 13.1411 12.8529 13.166 12.9187 13.1852C13.1523 13.2533 13.4392 13.2044 13.637 13.0627C13.6927 13.0228 13.7403 12.9752 13.8356 12.8799C14.1269 12.5886 14.2726 12.4429 14.4191 12.3477C14.9715 11.9885 15.6837 11.9885 16.2361 12.3477C16.3825 12.4429 16.5282 12.5886 16.8196 12.8799L16.9819 13.0423C17.4248 13.4852 17.6462 13.7066 17.7665 13.9444C18.0058 14.4174 18.0058 14.976 17.7665 15.4489C17.6462 15.6867 17.4248 15.9082 16.9819 16.351L16.8506 16.4824C16.4092 16.9238 16.1886 17.1444 15.8885 17.313C15.5556 17.5 15.0385 17.6345 14.6567 17.6333C14.3126 17.6323 14.0774 17.5655 13.607 17.432C11.0792 16.7146 8.69387 15.3608 6.70388 13.3709C4.7139 11.3809 3.36017 8.99557 2.6427 6.46774C2.50919 5.99737 2.44244 5.76218 2.44141 5.41806C2.44028 5.03621 2.57475 4.51913 2.76176 4.18621C2.9303 3.88618 3.15098 3.66551 3.59233 3.22416L3.72369 3.09279C4.16656 2.64992 4.388 2.42849 4.62581 2.3082C5.09878 2.06898 5.65734 2.06898 6.1303 2.3082C6.36812 2.42849 6.58955 2.64992 7.03242 3.09279L7.19481 3.25518C7.48615 3.54652 7.63182 3.69219 7.72706 3.83867C8.08622 4.39108 8.08622 5.10323 7.72706 5.65564C7.63182 5.80212 7.48615 5.94779 7.19481 6.23913C7.09955 6.33439 7.05192 6.38202 7.01206 6.4377C6.87038 6.63556 6.82146 6.92244 6.88957 7.15607C6.90873 7.22181 6.93367 7.27376 6.98356 7.37767Z"
                            stroke="#141E0D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Box>
                      {/* Our Text goes here */}
                      <Text
                        color="#141E0D"
                        fontFamily="Mulish"
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="normal"
                      >
                        Share Number
                      </Text>
                    </Box>
                    {/* Frame 20  */}

                    <Box
                      cursor={"pointer"}
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.91667 6.66667L12.0833 10.8333M12.0833 6.66667L7.91667 10.8333M5.83333 15V16.9463C5.83333 17.3903 5.83333 17.6123 5.92436 17.7263C6.00352 17.8255 6.12356 17.8832 6.25045 17.8831C6.39636 17.8829 6.56973 17.7442 6.91646 17.4668L8.90434 15.8765C9.31043 15.5517 9.51347 15.3892 9.73957 15.2737C9.94017 15.1712 10.1537 15.0963 10.3743 15.051C10.6231 15 10.8831 15 11.4031 15H13.5C14.9001 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4001 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V11.6667C2.5 12.4416 2.5 12.8291 2.58519 13.147C2.81635 14.0098 3.49022 14.6836 4.35295 14.9148C4.67087 15 5.05836 15 5.83333 15Z"
                            stroke="#141E0D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Box>
                      {/* Our Text goes here */}
                      <Text
                        color="#141E0D"
                        fontFamily="Mulish"
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="normal"
                      >
                        Report
                      </Text>
                    </Box>
                  </Box>
                )}
              </Flex>
            </Flex>
          </Box>
          {/* Access the chat messages */}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
            maxHeight="60vh" // Set the maximum height for the box
            overflowY="scroll" // Enable vertical scrolling if content exceeds the height
            padding="16px"
            borderRadius="8px"
            boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.12)"
            // scrollbarWidth="none" // Disable default scrollbar
            scrollBehavior={"smooth"}
            // Custom scrollbar style
            css={{
              "&::-webkit-scrollbar": {
                width: "3px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
            }}
          >
            {chatDataItem.chats.map((chat) => (
              <>
                <ChatMessageComponent key={chat.id} chat={chat} />
              </>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ChatList;
