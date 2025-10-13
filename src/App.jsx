import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Headroom from "react-headroom";

import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

const HomePage = lazy(() => import("./Pages/HomePage"));
const Tokenomics = lazy(() => import("./Pages/Tokenomics"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Landing Layout
const MainLayout = ({ children }) => (
  <div className="flex flex-col mx-auto min-w-screen max-w-[1600px]">
    <Suspense fallback={<Loader />}>
      <Headroom><Navbar /></Headroom>
      {children}
      <Footer />
    </Suspense>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* ---------------- Public / Landing Pages ---------------- */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/tokenomics" element={<MainLayout><Tokenomics /></MainLayout>} />

          {/* ---------------- User Dashboard Routes ---------------- */}
          <Route path="/user/*" element={<UserRoutes />} />

          {/* ---------------- Admin Dashboard Routes ---------------- */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* ---------------- Catch-all redirect ---------------- */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;





// import React from 'react';
// import { lazy, useEffect } from 'react'
// import { Suspense } from 'react'
// import PropTypes from 'prop-types';

// import './App.css'
// import "../src/Styles/Loader.css"
// import Loader from './Components/Loader';
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import Headroom from 'react-headroom'

// const HomePage = lazy(() => import('./Pages/HomePage'))
// const Tokenomics = lazy(() => import('./Pages/Tokenomics'))

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Log the error to an error reporting service
//     console.error('Error caught by ErrorBoundary:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100vh',
//           gap: '1rem'
//         }}>
//           <h1>Oops! Something went wrong.</h1>
//           <p>{"We're"} sorry for the inconvenience. Please try refreshing the page.</p>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// ErrorBoundary.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// const MainLayout = ({ children }) => {

//   return (
//     <div className='flex flex-col mx-auto min-w-screen max-w-[1600px]'>
//       <Suspense fallback={<Loader />}>
//         <Headroom>
//           <Navbar />
//         </Headroom>
//         {children}
//         <Footer />
//       </Suspense>
//     </div>
//   );
// }
// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// function App() {
//   return (
//     <>
//       <ErrorBoundary>
//         <BrowserRouter>
//           <ScrollToTop />
//           <Routes>
//             <Route path="/l" element={<MainLayout>  <Loader />  </MainLayout>} />
//             <Route path="/" element={<MainLayout> <HomePage />  </MainLayout>} />
//             <Route path="/Tokenomics" element={<MainLayout> <Tokenomics />  </MainLayout>} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </BrowserRouter>
//       </ErrorBoundary>
//     </>
//   )
// }

// export default App
