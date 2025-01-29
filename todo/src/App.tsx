import { ThemeSwitcher } from "./components/theme-switcher";
import { Todo } from "./components/todo/Todo";
import { TodoForm } from "./components/todo/TodoForm";
import { TodoHeader } from "./components/todo/TodoHeader";
import { Todos } from "./components/todo/Todos";
import { useTodo } from "./contexts/todo.context";

const App = () => {
  const { todos, todosEmpty } = useTodo();
  return (
    <>
      <div className="pb-5 relative max-w-md flex flex-col gap-6 mx-auto container px-5">
        <div className="flex py-6 flex-col gap-6 sticky top-0 z-10 backdrop-blur-md bg-bg/80">
          <TodoHeader />
          <TodoForm />
        </div>
        <Todos>
          {todosEmpty ? (
            <li className="text-center text-sm text-muted-fg">No todos yet</li>
          ) : (
            todos.map((todo) => <Todo key={todo.id} todo={todo} />)
          )}
        </Todos>
        <div className="fixed bottom-5 right-5">
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default App;
