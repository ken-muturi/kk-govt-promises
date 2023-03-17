import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex alignItems="center" p={2}>
      <Heading
        fontSize="2xl"
        py={2}
        borderBottom="2px"
        borderBottomColor="gray.200"
      >
        Kenya Kwanza Government Promises
      </Heading>
    </Flex>
  );
};

export default Header;
