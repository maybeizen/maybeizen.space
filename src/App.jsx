import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.routes.jsx";
import ThemeToggle from "./components/ThemeToggle";
import ThemeProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen">
          <ThemeToggle />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
