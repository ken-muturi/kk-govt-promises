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
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaChevronLeft, FaFileImage } from "react-icons/fa";
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
    <VStack w="full" h="full" mb={4} alignItems="left">
      <HStack w="full" p={2}>
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
        <Heading p={0} fontSize="lg">
          {title}
        </Heading>
      </HStack>
      <VStack p={2} alignItems="left">
        <Box p={2} pb={0} mb={4} w="full">
          <Text fontSize="xs" color="emphasized">
            {description}
          </Text>
          <HStack w="full" mt={1} spacing={2}>
            <BsClockHistory />
            <Text style={{ fontSize: "10px" }} color="muted">
              {dateOfPromise}
            </Text>
            <Spacer />
            <Box>
              <Text style={{ fontSize: "10px" }} color="muted">
                Reminder Date {reminderDate}
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box>
          <Heading size="sm">Screenshots</Heading>
          <VStack mt={2} spacing={2} alignItems="left">
            {screenshots.split("/\n").map((path: string, index: number) => (
              <HStack key={index}>
                <FaFileImage color="green.500" />
                <Link href={path} isExternal>
                  Google Drive Screenshot {index + 1}
                </Link>
              </HStack>
            ))}
          </VStack>
        </Box>

        <Box>
          <Heading size="sm">Links</Heading>
          <VStack mt={2} spacing={2} alignItems="left">
            {url.split("/\n").map((path: string, index: number) => (
              <Link href={path} isExternal>
                <Text>{path}</Text>
              </Link>
            ))}
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default TodoDetails;
