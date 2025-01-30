import { IconSearch } from "justd-icons";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./components/theme-switcher";
import { Button, Form, TextField } from "./components/ui";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { LOCAL_STORAGE_KEY } from "./utils/constants";

export const App = () => {
  const [search, setSearch] = useState(() => {
    const s = localStorage.getItem(LOCAL_STORAGE_KEY);
    return s ? s : "";
  });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!search) setOn(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, search);
  }, [search]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length > 2) setOn(true);
  };

  return (
    <div className="container mx-auto max-w-lg px-5 py-10">
      <div className="flex flex-col gap-1 leading-none">
        <h1 className="text-lg font-semibold tracking-tight">Weather App</h1>
        <p className="text-muted-fg">Check the weather for a particular location</p>
      </div>
      <Form
        onSubmit={handleSubmit}
        className="my-8 grid w-full grid-cols-1 gap-2 gap-y-4 md:flex md:items-start"
      >
        <TextField
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e)}
          type="search"
          className="w-full"
          isRequired
          placeholder="Search..."
          prefix={<IconSearch />}
        />
        <Button type="submit">
          <IconSearch className="size-4 shrink-0" />
          Search
        </Button>
      </Form>
      {on && search && <WeatherDisplay search={search} />}
      <div className="fixed right-5 bottom-5">
        <ThemeSwitcher />
      </div>
    </div>
  );
};
