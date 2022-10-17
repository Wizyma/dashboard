import { Dashboard, DocumentScanner, List } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import type { LayoutProps } from "@dashboard/board-ui";

export const useMenu = (): LayoutProps["menu"] => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return [
    {
      label: "Dashboard",
      Icon: Dashboard,
      onClick: () => navigate("/dashboard"),
      isSelected: pathname === "/dashboard",
    },
    {
      label: "My lists",
      Icon: List,
      onClick: () => navigate("/list"),
      isSelected: pathname === "/list",
    },
    {
      label: "Documents",
      Icon: DocumentScanner,
      onClick: () => navigate("/documents"),
      isSelected: pathname === "/documents",
    },
  ];
};
