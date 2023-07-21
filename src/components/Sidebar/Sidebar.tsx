import { Box, Text, VStack, Divider } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w={200} bg="gray.100" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Sidebar
        </Text>
        <Divider />
        {/* Add your Future sidebar content here */}
      </VStack>
    </Box>
  );
};

export default Sidebar;
