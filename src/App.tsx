import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.routes";
import ThemeProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

