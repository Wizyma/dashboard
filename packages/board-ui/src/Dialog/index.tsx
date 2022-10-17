import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export interface BoardDialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export const BoardDialog = (props: BoardDialogProps) => {
  const { onClose, open, children, title } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};
