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

function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center text-white">Loading...</div>;

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
