export type TodoHeaderProps = {
  /**
   * The title text to display in the header
   *
   * @default "Todo App"
   */
  title?: string;
  /**
   * The description text to display in the header
   *
   * @default "Manage your tasks with ease"
   */
  description?: string;
};

export const TodoHeader = ({
  title = "Todo App",
  description = "Manage your tasks with ease",
}: TodoHeaderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 leading-none">
        <h1 className="font-semibold text-lg tracking-tight">{title}</h1>
        <p className="text-muted-fg text-base">{description}</p>
      </div>
    </div>
  );
};
