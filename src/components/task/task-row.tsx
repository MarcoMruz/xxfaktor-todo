import { Box, Card, Checkbox, HStack, Heading, Text } from "@chakra-ui/react";
import Task from "../../models/Task";

type Props = {
  task: Task;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCheck: (id: string, status: boolean) => void;
};

const TaskRow = ({ task, onEdit, onCheck, onDelete }: Props) => {
  return (
    <Card p={15}>
      <HStack>
        <Checkbox
          isChecked={task.status}
          onChange={() => {
            onCheck(task.id, !task.status);
          }}
          size="lg"
          pr={15}
          colorScheme="cyan"
        />
        <Box>
          <Heading size="sm" as="h3">
            {task.title}
          </Heading>
          <Text textColor="GrayText">{task.deadline.toLocaleString()}</Text>
          <Text>{task.content}</Text>
        </Box>
      </HStack>
    </Card>
  );
};

export default TaskRow;
