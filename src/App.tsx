import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
