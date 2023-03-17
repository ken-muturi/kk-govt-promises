import {
  Box,
  Spacer,
  VStack,
  Text,
  HStack,
  Tooltip,
  Heading,
  IconButton,
  Link,
  StackDivider,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaChevronLeft, FaExternalLinkAlt, FaFileImage } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
interface TodoDetailsProps {
  activeTodo: string[];
  setActiveTodo: (todo: string[] | null) => void;
}

const TodoDetails = ({ activeTodo, setActiveTodo }: TodoDetailsProps) => {
  const btnRef = useRef(null);
  const [
    dateOfPromise,
    title,
    description,
    url,
    screenshots,
    reminderDate,
    progress,
  ] = activeTodo;

  return (
    <VStack
      spacing={4}
      p={progress.toLowerCase() === "done" ? 4 : 0}
      h="full"
      alignItems="left"
      bg={progress.toLowerCase() === "done" ? "green.50" : "bg-surface"}
    >
      <HStack w="full">
        <Tooltip label="Back to thread list" hasArrow>
          <IconButton
            size="xs"
            ref={btnRef}
            aria-label="Back to thread list"
            icon={<FaChevronLeft />}
            onClick={() => {
              setActiveTodo(null);
            }}
          />
        </Tooltip>
        <Heading p={0} fontSize="sm">
          {title}
        </Heading>
      </HStack>

      <Box w="full" fontSize="sm">
        <Text>{description}</Text>
        <HStack w="full" mt={2} spacing={2}>
          <BsClockHistory />
          <Text fontSize="xs">Date of Promise: {dateOfPromise}</Text>
        </HStack>
      </Box>
      <hr />
      <HStack spacing={2} alignItems="left" fontSize="sm" color="green.500">
        <HStack spacing={2}>
          <Text>Screenshots</Text>
          {screenshots.split("/\n").map((path: string, index: number) => (
            <Link
              borderRadius="lg"
              p={2}
              bg="gray.100"
              key={index}
              href={path}
              isExternal
            >
              <FaFileImage />
            </Link>
          ))}
        </HStack>
        <HStack spacing={2}>
          <Text>Reference: </Text>
          {url.split("/\n").map((path: string, index: number) => (
            <Link borderRadius="lg" p={2} bg="gray.100" href={path} isExternal>
              <FaExternalLinkAlt color="green.500" />
            </Link>
          ))}
        </HStack>
      </HStack>
    </VStack>
  );
};

export default TodoDetails;
