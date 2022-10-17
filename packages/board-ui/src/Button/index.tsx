import Button, { ButtonProps } from "@mui/material/Button";

export interface BoardButton extends ButtonProps {
  label: string;
}

export const BoardButton = ({ label, ...props }: BoardButton) => {
  return <Button {...props}>{label}</Button>;
};
