// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
