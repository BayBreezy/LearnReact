import { IconMinus, IconPlus } from "justd-icons";
import { useState } from "react";
import { toast } from "sonner";
import { ThemeSwitcher } from "./components/theme-switcher";
import { Button, Container } from "./components/ui";

function App() {
  // state to hold the count
  const [count, setCount] = useState(0);
  // function to decrement the count
  const decrement = () => {
    if (count === 1) {
      toast.warning("Count is already at 0");
    }
    if (count === 0) return;
    setCount((p) => p - 1);
  };

  return (
    <>
      <header className="bg-bg sticky top-0 z-20 border-b">
        <Container className="flex h-16 items-center justify-between">
          <ThemeSwitcher />
        </Container>
      </header>
      <Container className="flex flex-col py-10">
        <h1 className="text-lg font-semibold">Count is: {count}</h1>
        <div className="mt-6 flex items-center gap-2">
          <Button isDisabled={count <= 0} size="square-petite" onPress={() => decrement()}>
            <IconMinus />
            <span className="sr-only">Decrement the count</span>
          </Button>
          <Button size="square-petite" onPress={() => setCount((p) => p + 1)}>
            <IconPlus />
            <span className="sr-only">Increment the count</span>
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
