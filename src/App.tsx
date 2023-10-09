import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import TaskRow from "./components/task/task-row";
import Task from "./models/Task";
import SearchBar from "./components/search/searchbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      deadline: new Date(),
      title: "Task 1",
      content: "Content 1",
      status: false,
    },
  ]);

  function handleOnTaskCheck(id: string, status: boolean) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: status,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  const handleOnTaskAdd = (title: string, content: string) => {
    const newTask: Task = {
      id: "2",
      deadline: new Date(),
      title: title,
      content: content,
      status: false,
    };

    setTasks(tasks.concat(newTask));
  };

  const doneTasks = tasks.filter((task) => {
    return task.status;
  });

  const notDoneTasks = tasks.filter((task) => {
    return !task.status;
  });

  return (
    <Box bgColor="gray.50" height={"100vh"}>
      <Container maxW={980} pt={50}>
        <HStack>
          <Heading>XXFaktor - Todo App</Heading>

          <Spacer />

          <Button
            colorScheme="cyan"
            onClick={() => {
              handleOnTaskAdd("Title", "Content");
            }}
          >
            Add Task
          </Button>
        </HStack>

        <Box my={15}>
          <SearchBar
            onDeleteSearch={() => {
              setSearchTerm("");
            }}
            onSearchChange={(newSearchTerm) => {
              setSearchTerm(newSearchTerm);
            }}
            onSearchClick={() => {}}
            searchTerm={searchTerm}
          />
        </Box>

        <Box>
          <Heading size="md" textColor="darkslategray">
            Incomplete
          </Heading>
          {notDoneTasks.length === 0 ? (
            <Text>No tasks found</Text>
          ) : (
            notDoneTasks.map((task) => (
              <TaskRow
                task={task}
                onCheck={handleOnTaskCheck}
                onDelete={() => {}}
                onEdit={() => {}}
              />
            ))
          )}
        </Box>

        <Box mt={15}>
          <Heading size="md" textColor="darkslategray">
            Completed
          </Heading>
          {doneTasks.length === 0 ? (
            <Text>No tasks found</Text>
          ) : (
            doneTasks.map((task) => (
              <TaskRow
                task={task}
                onCheck={handleOnTaskCheck}
                onDelete={() => {}}
                onEdit={() => {}}
              />
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
