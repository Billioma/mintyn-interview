import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { Layout } from "../components/Layouts/PageLayout";
import { ROUTES } from "./routes";

const Wrapper = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();

  return (
    <Layout>
      <Wrapper key={location.pathname} />
    </Layout>
  );
};

export default Pages;
