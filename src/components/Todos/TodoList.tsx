// https://codesandbox.io/s/fquu1
import {
  HStack,
  Text,
  Stack,
  Icon,
  Spacer,
  Flex,
  StackDivider,
} from "@chakra-ui/react";

import { FaChevronRight } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

interface TodoListProps {
  todos: string[][];
  setActiveTodo: (thread: string[] | null) => void;
}

const TodoList = ({ todos, setActiveTodo }: TodoListProps) => {
  return (
    <Stack divider={<StackDivider color="gray.100" />}>
      {todos.map((todo: Array<string>, index: number) => {
        const [dateOfpromise, title, description, , , , progress] = todo; // skip url, screenshots, reminderDate
        return (
          <Stack
            w="full"
            fontSize="sm"
            p={2}
            spacing="0.5"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            bg={progress.toLowerCase() === "done" ? "green.50" : "bg-surface"}
            key={index}
            onClick={() => {
              setActiveTodo(todo);
            }}
          >
            <Flex alignItems="center">
              <Stack spacing={1}>
                <Text fontSize="md" color="black">
                  {title}
                </Text>
                <Text fontSize="xs" color="emphasized">
                  {description}
                </Text>
                <HStack w="full" mt={2} spacing={2}>
                  <BsClockHistory />
                  <Text style={{ fontSize: "10px" }} color="muted">
                    Date of Promise: {dateOfpromise}
                  </Text>
                </HStack>
              </Stack>
              <Spacer />
              <Icon as={FaChevronRight} cursor="pointer" />
            </Flex>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default TodoList;
