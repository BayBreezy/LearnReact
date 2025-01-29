import { createId } from "@paralleldrive/cuid2";
import { createContext, useContext, useEffect, useState } from "react";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => Todo[];
  removeTodo: (id: string) => Todo[];
  toggleTodo: (id: string) => void;
  todosEmpty?: boolean;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

/**
 * Custom hook to use the todo context
 */
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todosEmpty, setTodosEmpty] = useState<boolean>();
  const TODO_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState<Todo[]>(() => {
    // get todos from local storage
    const todos = localStorage.getItem(TODO_STORAGE_KEY);
    // return parsed todos or empty array
    return todos ? JSON.parse(todos) : [];
  });

  useEffect(() => {
    if (todos.length === 0) {
      setTodosEmpty(true);
    } else {
      setTodosEmpty(false);
    }
    // store in ocal storage when todos change
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /**
   * Add a new todo
   *
   * @param text - the text of the todo
   */
  const addTodo = (text: string) => {
    const newTodo = { id: createId(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    return todos;
  };

  /**
   * Remove a todo by id
   */
  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    return todos;
  };
  /**
   * Toggle a todo's completed status
   */
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todosEmpty, todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
