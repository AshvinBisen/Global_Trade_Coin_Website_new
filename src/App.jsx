import React, { lazy, Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Headroom from "react-headroom";

// Components
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Layouts
import AdminLayout from "./Pages/Admin/AdminLayout";
import UserLayout from "./Pages/User/UserLayout";

// Lazy Pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const AdminDashboard = lazy(() => import("./Pages/Admin/Dashboard"));
const AdminHistory = lazy(() => import("./Pages/Admin/History"));
const AdminInvestHistory = lazy(() => import("./Pages/Admin/InvestHistory"));
const UserDashboard = lazy(() => import("./Pages/User/Dashboard"));
const UserHistory = lazy(() => import("./Pages/User/History"));
const InvestHistory = lazy(() => import("./Pages/User/InvestHistory"));
const UserStats = lazy(() => import("./Pages/User/Stats"));

/* ===========================
    Error Boundary
=========================== */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "1rem",
          }}
        >
          <h1>Oops! Something went wrong.</h1>
          <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

/* ===========================
    Scroll To Top
=========================== */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* ===========================
    Main Landing Layout
=========================== */
const MainLayout = ({ children }) => (
  <div className="flex flex-col mx-auto min-w-screen max-w-[1600px]">
    <Suspense fallback={<Loader />}>
      <Headroom>
        <Navbar />
      </Headroom>
      {children}
      <Footer />
    </Suspense>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

/* ===========================
    App Component
=========================== */
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>

            {/* 🌐 Public Landing Routes */}
            <Route
              path="/"
              element={
                <MainLayout>
                  <HomePage />
                </MainLayout>
              }
            />

            {/* 🧑‍💻 User Dashboard Routes */}
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="history" element={<UserHistory />} />
              <Route path="invest-history" element={<InvestHistory />} />
              <Route path="stats" element={<UserStats />} />
            </Route>

            {/* 👑 Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="history" element={<AdminHistory />} />
                <Route path="invest-history" element={<AdminInvestHistory />} />
            </Route>

            {/* 🚫 Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
