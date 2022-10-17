import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#F76A76",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          width: "100%",
          textAlign: "center",
          fontWeight: "inherit",
        },
      },
    },
  },
});
