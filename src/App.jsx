import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.routes.jsx";

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-zinc-950">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
