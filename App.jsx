import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSendFeedbackMutation } from "./slices/feedbackApiSlice";
import Home from "./components/home";
import About from "./components/about";
import Favorites from "./components/favorites";
import Profile from "./components/profile";
import Routine from "./components/Routine";
import Ai from "./components/Ai";
import Experts from "./components/experts";
import DoctorProfile from "./pages/experts/DoctorProfile";
import DoctorChat from "./pages/experts/DoctorChat";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgetPassword from "./components/ForgetPassword";
import ContactUs from "./pages/Home/components/ContactUs";
import AISkinReport from "./pages/Ai/AISkinReport";
import LoadingFace from "./pages/Ai/LoadingFace";
import AiChat from "./pages/Ai/AiChat";
import Article from "./components/Article";
import AccountHome from "./pages/profile/pages/AccountHome/AccountHome";
import YourSkin from "./pages/profile/pages/YourSkin/YourSkin";
import EmailPreferences from "./pages/profile/pages/EmailPreferences/EmailPreference";
import AccountSecurity from "./pages/profile/pages/AccountSecurity/AccountSecurity";
import PrivacyPolicy from "./pages/profile/pages/privacy-policy/PrivacyPolicy";
import TermsOfService from "./pages/profile/pages/terms-of-services/TermsOfService";
import Profilee from "./pages/profile/pages/profile/Profile";
import Support from "./pages/profile/pages/Support/Support";
import First from "./pages/SignUp/pages/first";
import Second from "./pages/SignUp/pages/second";
import Third from "./pages/SignUp/pages/third";
import Fourth from "./pages/SignUp/pages/forth";
import Fifth from "./pages/SignUp/pages/fifth";
import Sixth from "./pages/SignUp/pages/sixth";
import Seventh from "./pages/SignUp/pages/seventh";
import A from "./pages/SignUp/pages/a";
import B from "./pages/SignUp/pages/b";
import C from "./pages/SignUp/pages/c";
import Skintype from "./pages/SignUp/pages/skintype";
import LoadingScreen from "./pages/SignUp/pages/LoadingScreen";
import Final from "./pages/SignUp/pages/final";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleDetails from "./pages/Article/ArticleDetails";
import FeedbackModal from "./components/FeedbackModal"; 
import RoutineResult from "./pages/routine/RoutineResult"; 


const App = () => {

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("somahassan875@gmail.com");
  const [sendFeedback] = useSendFeedbackMutation();

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendFeedback({ message, email }).unwrap();
      alert("Thanks for your feedback! ❤️");
      setShowFeedbackModal(false);
      setMessage("");
    } catch (err) {
      alert("Failed to send feedback.");
    }
  };

  useEffect(() => {
    const openModal = () => setShowFeedbackModal(true);
    window.addEventListener("openFeedbackModal", openModal);
    return () => window.removeEventListener("openFeedbackModal", openModal);
  }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/ai" element={<Ai />} />
        <Route path="/ai/report" element={<AISkinReport />} />
        <Route path="/loadingFace" element={<LoadingFace />} />
        <Route path="/AiChat" element={<AiChat />} />

        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/profile/:id" element={<DoctorProfile />} />
        <Route path="/experts/chat/:id" element={<DoctorChat />} />

        <Route path="/routine" element={<Routine />} />
        <Route path="/routine-result" element={<RoutineResult />} />

        <Route path="/profile" element={<Profile />}>
          <Route index element={<AccountHome />} />
          <Route path="profile" element={<Profilee />} />
          <Route path="your-skin" element={<YourSkin />} />
          <Route path="email-preferences" element={<EmailPreferences />} />
          <Route path="account-security" element={<AccountSecurity />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="support" element={<Support />} />
        </Route>

        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/login"
          element={
            <Login
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
              openSignup={openSignup}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              isOpen={isSignupOpen}
              onClose={() => setIsSignupOpen(false)}
              openLogin={openLogin}
            />
          }
        />

        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/signup/first" element={<First />} />
        <Route path="/signup/second" element={<Second />} />
        <Route path="/signup/third" element={<Third />} />
        <Route path="/signup/fourth" element={<Fourth />} />
        <Route path="/signup/fifth" element={<Fifth />} />
        <Route path="/signup/sixth" element={<Sixth />} />
        <Route path="/signup/seventh" element={<Seventh />} />
        <Route path="/signup/a" element={<A />} />
        <Route path="/signup/b" element={<B />} />
        <Route path="/signup/c" element={<C />} />
        <Route path="/signup/skintype" element={<Skintype />} />
        <Route path="/signup/loading" element={<LoadingScreen />} />
        <Route path="/signup/final" element={<Final />} />

        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetails />} />

      </Routes>

      <FeedbackModal
    showModal={showFeedbackModal}
    setShowModal={setShowFeedbackModal}
    message={message}
    setMessage={setMessage}
    email={email}
    setEmail={setEmail}
    handleSubmit={handleFeedbackSubmit}
/>

      <ToastContainer position="top-right" autoClose={3000} />

     

    </>
  );
};

export default App;