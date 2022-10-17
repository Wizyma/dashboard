import { InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type BoardSearchInputProps = TextFieldProps & {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
};

export const BoardSearchInput = ({
  iconStart,
  iconEnd,
  InputProps,
  ...props
}: BoardSearchInputProps) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};
