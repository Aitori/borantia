import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import styled from "styled-components";
import Navbar from "./components/Navbar";

const PageLayout = styled.div`
  height: 100%;
  width: 100%;
  background: #100e15;
`;

function App() {
  return (
    <Router>
      <PageLayout>
        <Navbar />
        <Route>
          <LandingPage />
        </Route>
      </PageLayout>
    </Router>
  );
}

export default App;
