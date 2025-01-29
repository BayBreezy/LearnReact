import { IconCheck, IconTrash, IconX } from "justd-icons";
import { toast } from "sonner";
import { useTodo, type Todo as TodoType } from "../../contexts/todo.context";
import { cn } from "../../utils/classes";
import { Button, buttonStyles, Tooltip } from "../ui";
import { ConfirmDeleteTodo } from "./ConfirmDeleteTodo";

export const Todo = ({ todo }: { todo: TodoType }) => {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className="flex flex-col gap-4 p-4 rounded-md border dark:bg-muted/30 dark:hover:bg-muted transition shadow-xs">
      <p className={cn(todo.completed ? "line-through text-muted-fg" : "")}>{todo.text}</p>
      <div className="flex items-center gap-2">
        <Tooltip delay={500}>
          <Tooltip.Trigger
            className={buttonStyles({
              size: "square-petite",
            })}
            onPress={() => {
              toast.success(todo.completed ? "Todo marked as undone" : "Todo marked as done");
              toggleTodo(todo.id);
            }}
            aria-label={todo.completed ? "Mark as undone" : "Mark as done"}
          >
            {todo.completed ? <IconX className="size-4" /> : <IconCheck className="size-4" />}
          </Tooltip.Trigger>
          <Tooltip.Content showArrow={false} intent="inverse">
            {todo.completed ? "Mark as undone" : "Mark as done"}
          </Tooltip.Content>
        </Tooltip>

        <ConfirmDeleteTodo
          trigger={
            <Tooltip delay={300}>
              <Tooltip.Trigger
                className={buttonStyles({
                  size: "square-petite",
                  appearance: "outline",
                  intent: "secondary",
                })}
                aria-label="Delete todo"
              >
                <IconTrash className="size-4" />
              </Tooltip.Trigger>
              <Tooltip.Content showArrow={false} intent="inverse">
                Delete todo
              </Tooltip.Content>
            </Tooltip>
          }
          title="Delete Todo"
          description="Are you sure you want to delete this todo?"
          confirm={
            <Button
              intent="danger"
              onPress={() => {
                removeTodo(todo.id);

                toast.success("Todo deleted", {
                  description: "You can't undo this action",
                });
              }}
            >
              Yes, Delete
            </Button>
          }
        />
      </div>
    </li>
  );
};
