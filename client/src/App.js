
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer

// Import pages
import PrivateRoute from "./components/PrivateRoute";
import WorkerAuth from "./pages/WorkerAuth";
import AuthPage from "./pages/AuthPage";
import Cart from "./pages/Cart"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import WorkerSignup from "./pages/WorkerSignup";
import WorkerLogin from "./pages/WorkerLogin";
import WorkerDashboard from "./pages/WorkerDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Accessibility from "./pages/Accessibility";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import SelectService from "./pages/SelectService";
import SelectDate from "./pages/SelectDate";
import ReviewBooking from "./pages/ReviewBooking";
import ThankYou from "./pages/ThankYou";
import { AuthProvider } from "./context/AuthContext"; 


function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />         
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/worker-signup" element={<WorkerSignup />} />
          <Route path="/worker-login" element={<WorkerLogin />} />
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<Refund />} />          
          <Route path="/select-service" element={<SelectService />} />
          <Route path="/select-date" element={<SelectDate />} />
          <Route path="/review-booking" element={<ReviewBooking />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/worker-signup" element={<WorkerAuth />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/worker-auth" element={<WorkerAuth />} />
        <Route
          path="/admin-dashboard"
          element={
             <PrivateRoute>
               <AdminDashboard />
             </PrivateRoute>
            }
          />
        </Routes>
       </AuthProvider>
      <Footer /> 
    </Router>
  );
}

export default App;