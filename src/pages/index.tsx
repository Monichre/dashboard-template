import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import Dashboard from "../components/Dashboard";

const App = () => (
  <Layout>
    <SEO />
    <Dashboard />
  </Layout>
);

export default App;
