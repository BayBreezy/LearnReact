import { Button, Modal } from "@/components/ui";

export type ConfirmDeleteTodoProps = {
  trigger?: React.ReactNode | string;
  title?: React.ReactNode | string;
  description?: React.ReactNode | string;
  cancel?: React.ReactNode | string;
  confirm?: React.ReactNode | string;
};
export const ConfirmDeleteTodo = ({
  trigger = "Delete",
  title = "Confirm Action",
  description = "Are you sure?",
  cancel = "Cancel",
  confirm = "Delete",
}: ConfirmDeleteTodoProps) => {
  return (
    <Modal>
      {trigger && typeof trigger === "string" ? <Button>{trigger}</Button> : trigger}
      <Modal.Content size="sm">
        <Modal.Header>
          <Modal.Title>{title || "Confirm Action"}</Modal.Title>
          <Modal.Description>{description || ""}</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          {cancel && typeof cancel === "string" ? <Modal.Close>{cancel}</Modal.Close> : cancel}
          {confirm && typeof confirm === "string" ? <Button>{confirm}</Button> : confirm}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
