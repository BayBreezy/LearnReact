import { IconBulletList } from "justd-icons";
import { useState } from "react";
import { toast } from "sonner";
import { useTodo } from "../../contexts/todo.context";
import { Button, Form, TextField } from "../ui";

export const TodoForm = () => {
  const { addTodo } = useTodo();
  const [todoText, setTodoText] = useState("");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoText);
        setTodoText("");
        toast.success("Todo added", {
          description: "You can now see it in the list below",
        });
      }}
      className="md:flex grid grid-cols-1 md:items-start gap-3"
    >
      <div className="grow">
        <TextField
          value={todoText}
          onChange={(e) => setTodoText(e)}
          placeholder="What would you like to do?"
          aria-label="Todo"
          name="todo"
          isRequired
          prefix={<IconBulletList />}
        />
      </div>
      <Button className="shrink-0" type="submit">
        Add
      </Button>
    </Form>
  );
};
