import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import PublicHeader from "./components/PublicHeader";
import PrivateHeader from "./components/PrivateHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import PrivateRoute from "./routes/PrivateRoute";

// ✅ Define private route config
const privateRoutes = [
  { path: "/profile", element: <Profile /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/logout", element: <Logout /> },
];

const AppLayout = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const location = useLocation();

  // Check if current route is private
  const isPrivateRoute = privateRoutes.some(
    (route) => route.path === location.pathname
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {isAuthenticated && isPrivateRoute ? <PrivateHeader /> : <PublicHeader />}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Private Routes */}
          {privateRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PrivateRoute>{element}</PrivateRoute>}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
