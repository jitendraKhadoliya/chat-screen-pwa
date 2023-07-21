import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [showDoc, setShowDoc] = useState<boolean>(false);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Implement the logic to send the message
    console.log("Sending message:", message);
    setMessage("");
  };

  const handleShowClick = () => {
    setShowDoc(!showDoc);
  };

  return (
    <div>
      <Box
        pos={"absolute"}
        mt={"-46px"}
        m={"auto"}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      ></Box>
      <Box
        display="inline-flex"
        paddingBottom="0px"
        flexDirection="column"
        alignItems="flex-start"
        background="#FAF9F4"
      >
        <Box
          display="flex"
          width="375px"
          padding="8px 16px"
          justifyContent="flex-end"
          alignItems="center"
          gap="12px"
          bg={" #FAF9F4"}
        >
          <Box
            display="flex"
            padding="11px 12px"
            alignItems="center"
            gap="16px"
            flex="1 0 0"
            borderRadius="8px"
            background="#FFF"
          >
            {/* Input */}
            <Box display="flex" alignItems="flex-start" flex="1 0 0">
              {/* Your content goes here */}
              <Box
                display="flex"
                alignItems="flex-start"
                flex="1 0 0"
                // background={"red.300"}
                cursor={"pointer"}
              >
                <Text>I</Text>

                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Reply to @Rohit Yadav"
                  width={"100%"}
                />
                {/* Your content goes here */}
              </Box>
            </Box>

            {/* SVG FOR DOCUMENT */}
            <Box
              width="20px"
              height="20px"
              cursor={"pointer"}
              onClick={handleShowClick}
            >
              {showDoc && (
                <Box
                  display="inline-flex"
                  padding="12px 16px"
                  justifyContent="center"
                  alignItems="flex-end"
                  gap="16px"
                  borderRadius="999px"
                  background="var(--colours-brand-primary, #008000)"
                  boxShadow="0px -1px 8px 0px rgba(0, 0, 0, 0.05)"
                  pos={"absolute"}
                  mt={"-62px"}
                  ml={"-53px"}
                >
                  {/* CAMERA */}
                  <Box w={"20px"} h={"20px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M1.66667 6.41814C1.66667 5.17468 2.67469 4.16666 3.91815 4.16666C4.56422 4.16666 5.13781 3.75324 5.34211 3.14032L5.41667 2.91666C5.45183 2.81118 5.46941 2.75844 5.48821 2.71166C5.72837 2.11426 6.29116 1.70863 6.93385 1.6697C6.98418 1.66666 7.03977 1.66666 7.15095 1.66666H12.8491C12.9602 1.66666 13.0158 1.66666 13.0662 1.6697C13.7088 1.70863 14.2716 2.11426 14.5118 2.71166C14.5306 2.75844 14.5482 2.81118 14.5833 2.91666L14.6579 3.14032C14.8622 3.75324 15.4358 4.16666 16.0819 4.16666C17.3253 4.16666 18.3333 5.17468 18.3333 6.41814V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.03169 17.2275C2.56129 16.9878 2.17883 16.6054 1.93915 16.135C1.66667 15.6002 1.66667 14.9001 1.66667 13.5V6.41814Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 9.99999C13.75 7.92892 12.0711 6.24999 10 6.24999C7.92893 6.24999 6.25 7.92892 6.25 9.99999C6.25 12.0711 7.92893 13.75 10 13.75Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Box w={"20px"} h={"20px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M18 6.42857L12.9091 10L18 13.5714V6.42857Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4545 5H3.45455C2.65122 5 2 5.63959 2 6.42857V13.5714C2 14.3604 2.65122 15 3.45455 15H11.4545C12.2579 15 12.9091 14.3604 12.9091 13.5714V6.42857C12.9091 5.63959 12.2579 5 11.4545 5Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Box w={"20px"} h={"20px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6667 10.4167V5.66666C16.6667 4.26653 16.6667 3.56646 16.3942 3.03168C16.1545 2.56128 15.7721 2.17882 15.3016 1.93914C14.7669 1.66666 14.0668 1.66666 12.6667 1.66666H7.33334C5.9332 1.66666 5.23314 1.66666 4.69836 1.93914C4.22795 2.17882 3.8455 2.56128 3.60582 3.03168C3.33334 3.56646 3.33334 4.26653 3.33334 5.66666V14.3333C3.33334 15.7335 3.33334 16.4335 3.60582 16.9683C3.8455 17.4387 4.22795 17.8212 4.69836 18.0608C5.23314 18.3333 5.93317 18.3333 7.33322 18.3333H10.4167M11.6667 9.16666H6.66667M8.33334 12.5H6.66667M13.3333 5.83332H6.66667M12.5 15.8333L15 18.3333M15 18.3333L17.5 15.8333M15 18.3333V13.3333"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.6271 9.08291L10.1141 16.5959C8.40554 18.3045 5.63544 18.3045 3.9269 16.5959C2.21835 14.8874 2.21835 12.1173 3.9269 10.4087L11.4399 2.89573C12.5789 1.7567 14.4257 1.7567 15.5647 2.89573C16.7037 4.03476 16.7037 5.88149 15.5647 7.02052L8.34631 14.2389C7.7768 14.8084 6.85343 14.8084 6.28392 14.2389C5.7144 13.6694 5.7144 12.746 6.28392 12.1765L12.6184 5.84201"
                  stroke="#141E0D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
            {/* SVG FOR SEND */}
            <Box
              width="20px"
              height="20px"
              cursor={"pointer"}
              onClick={handleSendMessage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.75036 10H4.16702M4.09648 10.2429L2.15071 16.0552C1.99785 16.5118 1.92142 16.7401 1.97627 16.8807C2.0239 17.0028 2.1262 17.0954 2.25244 17.1306C2.3978 17.1712 2.61736 17.0724 3.05647 16.8748L16.9827 10.608C17.4113 10.4151 17.6256 10.3187 17.6918 10.1847C17.7494 10.0683 17.7494 9.93174 17.6918 9.81535C17.6256 9.68139 17.4113 9.58495 16.9827 9.39208L3.05161 3.12313C2.61383 2.92612 2.39493 2.82762 2.24971 2.86803C2.1236 2.90312 2.0213 2.99544 1.97351 3.11731C1.91847 3.25764 1.99408 3.48545 2.14531 3.94108L4.09702 9.8213C4.12299 9.89955 4.13598 9.93868 4.14111 9.9787C4.14565 10.0142 4.14561 10.0502 4.14097 10.0857C4.13574 10.1257 4.12265 10.1648 4.09648 10.2429Z"
                  stroke="#141E0D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>

            {/* Your content goes here */}
          </Box>
        </Box>

        {/* Your content goes here */}
        {/* <input type="text" value={message} onChange={handleMessageChange} /> */}
        {/* <button onClick={handleSendMessage}>Send</button> */}
      </Box>
    </div>
  );
};

export default ChatInput;
