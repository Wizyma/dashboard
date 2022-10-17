import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

export type LayoutProps = {
  headerContent?: React.ReactElement<any>;
  menu: {
    label: string;
    onClick?: () => void;
    Icon?: React.ElementType<any>;
    isSelected?: boolean;
  }[];
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
  headerContent,
  menu,
  children,
}) => {
  const drawerWidth = 180;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        {headerContent ? <Toolbar>{headerContent}</Toolbar> : <Toolbar />}
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menu.map(({ label, onClick, Icon, isSelected }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  selected={isSelected}
                  className={"listbutton"}
                  onClick={onClick}
                >
                  {Icon && (
                    <ListItemIcon className={"listbuttonicon"}>
                      <Icon />
                    </ListItemIcon>
                  )}
                  <ListItemText className={"listbuttontext"} primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" height="100vh" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
