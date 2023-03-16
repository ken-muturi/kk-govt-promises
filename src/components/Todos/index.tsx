// https://codesandbox.io/s/fquu1
import { VStack, Box, Center, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import Header from "../Header";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";
const Papa = require("papaparse");

const TodoApp = () => {
  const [activeTodo, setActiveTodo] = useState<string[] | null>(null);
  const { data: kkPromises } = useQuery({
    queryKey: ["kk-promises"],
    queryFn: async () =>
      axios
        .get<string>(
          `https://docs.google.com/spreadsheets/d/e/2PACX-1vSj9b1Qi_bKfVddzZ2d25AE24-i2QaVPCz5knnhauDIDi7ziNABcgPHfiRzA3nXPaDGQYmR_G_cgL7P/pub?output=csv`
        )
        .then((res) => res.data),
  });
  const todos = kkPromises ? Papa.parse(kkPromises)?.data : [];
  todos.shift(); // remove the header row;

  return (
    <VStack
      w="30rem"
      mt="5rem"
      mx="auto"
      py={12}
      boxShadow="sm"
      borderRadius="2xl"
      borderColor="gray.200"
      borderWidth="3px"
      p={2}
    >
      <Header />
      <Box h="40rem" overflowY="auto" p={2}>
        {activeTodo ? (
          <TodoDetails activeTodo={activeTodo} setActiveTodo={setActiveTodo} />
        ) : (
          <TodoList todos={todos} setActiveTodo={setActiveTodo} />
        )}
      </Box>
    </VStack>
  );
};

export default TodoApp;
