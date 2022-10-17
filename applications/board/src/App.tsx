import { Layout } from "@dashboard/board-ui";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { useMenu } from "./hooks";

import "./App.css";

const App = () => {
  const menu = useMenu();
  const path = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (path.pathname === "/") {
      navigate("/documents");
    }
  }, [path.pathname]);

  return (
    <Layout headerContent={<Logo />} menu={menu}>
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default App;
