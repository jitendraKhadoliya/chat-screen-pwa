import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Text fontSize="lg" fontWeight="bold">
        Chat Header
      </Text>
      {/* Add any other header content or navigation buttons here */}
    </Box>
  );
};

export default Header;
