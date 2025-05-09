import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import FeedList from "./components/FeedList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import { AuthProvider, useAuth } from "./api/AuthContext.jsx";
import { Spinner } from "./components/Spinner.jsx";
import { ForgotPassword } from "./components/Auth/ForgotPassword.jsx";

function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return <Spinner/>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Signup />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/recipes" element={<PrivateRoute />}>
              <Route index element={<FeedList />} />
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
