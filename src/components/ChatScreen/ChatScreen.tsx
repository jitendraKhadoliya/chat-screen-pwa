import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import { ChatData } from "../types";
import { Box, Flex, Stack } from "@chakra-ui/react";

const API_URL = "https://qa.corider.in/assignment/chat";

const ChatScreen = () => {
  const [chatData, setChatData] = useState<ChatData[]>([]);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchChats = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}?page=${page}`);
      const newChatsData = response.data;
      setChatData(() => [newChatsData]);
      // setChatData((prevChats) => [...prevChats, newChatsData]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching chats:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [page]);

  console.log("here is the data", chatData);

  return (
    <Box
      borderRadius="32px"
      width="375px"
      height="812px"
      background="#FAF9F4"
      justifyContent="center"
    >
      {/* status bar */}
      <Flex
        display="flex"
        width="375px"
        padding="14px 26px 12px 27px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          display="flex"
          width="54px"
          height="21px"
          justifyContent="center"
          alignItems="center"
          flexShrink={0}
        >
          9:41
        </Flex>
        <Flex
          display="flex"
          width="54px"
          height="21px"
          justifyContent="center"
          alignItems="center"
          flexShrink={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="13"
            viewBox="0 0 79 13"
            fill="none"
          >
            <rect
              opacity="0.35"
              x="52.172"
              y="0.5"
              width="24"
              height="12"
              rx="3"
              stroke="#141E0D"
            />
            <path
              opacity="0.4"
              d="M77.672 4.66669V8.66669C78.4767 8.32791 79 7.53982 79 6.66669C79 5.79355 78.4767 5.00546 77.672 4.66669Z"
              fill="#141E0D"
            />
            <rect
              x="53.672"
              y="2"
              width="21"
              height="9"
              rx="1.33333"
              fill="#141E0D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.8392 3.06735C38.3057 3.06745 40.678 3.96498 42.4656 5.57443C42.6002 5.69869 42.8154 5.69712 42.9479 5.57092L44.2347 4.3411C44.3018 4.27709 44.3393 4.19038 44.3387 4.10017C44.3382 4.00996 44.2997 3.92367 44.2317 3.86041C39.5398 -0.397806 32.1378 -0.397806 27.4459 3.86041C27.3779 3.92363 27.3393 4.00988 27.3387 4.1001C27.3381 4.19031 27.3755 4.27704 27.4425 4.3411L28.7297 5.57092C28.8622 5.69731 29.0775 5.69888 29.212 5.57443C30.9999 3.96488 33.3724 3.06735 35.8392 3.06735ZM35.8374 7.17524C37.1835 7.17516 38.4816 7.67327 39.4794 8.57279C39.6143 8.70045 39.8269 8.69768 39.9585 8.56655L41.2351 7.28238C41.3024 7.21502 41.3397 7.12364 41.3387 7.02869C41.3377 6.93373 41.2986 6.84313 41.23 6.77715C38.1915 3.96328 33.4859 3.96328 30.4474 6.77715C30.3788 6.84313 30.3396 6.93378 30.3387 7.02876C30.3378 7.12375 30.3753 7.21512 30.4426 7.28238L31.7189 8.56655C31.8505 8.69768 32.0631 8.70045 32.198 8.57279C33.1952 7.67386 34.4922 7.1758 35.8374 7.17524ZM38.3386 9.8944C38.3406 9.99694 38.3038 10.0958 38.2371 10.1676L36.0784 12.557C36.0151 12.6272 35.9288 12.6667 35.8388 12.6667C35.7488 12.6667 35.6625 12.6272 35.5992 12.557L33.4402 10.1676C33.3735 10.0958 33.3368 9.99686 33.3388 9.89431C33.3408 9.79177 33.3812 9.69466 33.4506 9.62592C34.8293 8.34702 36.8484 8.34702 38.227 9.62592C38.2963 9.69472 38.3367 9.79185 38.3386 9.8944Z"
              fill="#141E0D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.9386 1.79175C19.9386 1.17043 19.4611 0.666748 18.872 0.666748H17.8053C17.2162 0.666748 16.7386 1.17043 16.7386 1.79175V11.5417C16.7386 12.1631 17.2162 12.6667 17.8053 12.6667H18.872C19.4611 12.6667 19.9386 12.1631 19.9386 11.5417V1.79175ZM12.5053 3.06675H13.5719C14.1611 3.06675 14.6386 3.58252 14.6386 4.21875V11.5147C14.6386 12.151 14.1611 12.6667 13.5719 12.6667H12.5053C11.9162 12.6667 11.4386 12.151 11.4386 11.5147V4.21875C11.4386 3.58252 11.9162 3.06675 12.5053 3.06675ZM8.17195 5.66675H7.10528C6.51618 5.66675 6.03862 6.18908 6.03862 6.83341V11.5001C6.03862 12.1444 6.51618 12.6667 7.10528 12.6667H8.17195C8.76105 12.6667 9.23862 12.1444 9.23862 11.5001V6.83341C9.23862 6.18908 8.76105 5.66675 8.17195 5.66675ZM2.87195 8.06675H1.80528C1.21618 8.06675 0.738617 8.58162 0.738617 9.21675V11.5167C0.738617 12.1519 1.21618 12.6667 1.80528 12.6667H2.87195C3.46105 12.6667 3.93862 12.1519 3.93862 11.5167V9.21675C3.93862 8.58162 3.46105 8.06675 2.87195 8.06675Z"
              fill="#141E0D"
            />
          </svg>
        </Flex>
      </Flex>

      {loading ? <h1>Loading......</h1> : <ChatList chatData={chatData} />}
      <ChatInput />
    </Box>
  );
};

export default ChatScreen;
