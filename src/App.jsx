import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Developer from "./pages/developer/Developer";
import Network from "./pages/network/Network";
import NotFound from "./pages/notFound/NotFound";
import Platform from "./pages/platform/Platform";
import Pricing from "./pages/pricing/Pricing";
import Resources from "./pages/resources/Resources";
import Usecase from "./pages/usecase/Usecase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./pages/signin/signin";
import Dashboard from "./pages/dashboard/dashb";
import ContextProvider from "./context/context";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="contact"
              element={
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="developer"
              element={
                <>
                  <Navbar />
                  <Developer />
                  <Footer />
                </>
              }
            />
            <Route
              path="network"
              element={
                <>
                  <Navbar />
                  <Network />
                  <Footer />
                </>
              }
            />
            <Route
              path="platform"
              element={
                <>
                  <Navbar />
                  <Platform />
                  <Footer />
                </>
              }
            />
            <Route
              path="pricing"
              element={
                <>
                  <Navbar />
                  <Pricing />
                  <Footer />
                </>
              }
            />
            <Route
              path="resources"
              element={
                <>
                  <Navbar />
                  <Resources />
                  <Footer />
                </>
              }
            />
            <Route
              path="usecase"
              element={
                <>
                  <Navbar />
                  <Usecase />
                  <Footer />
                </>
              }
            />
            <Route path="signin" element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <NotFound />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
};

export default App;
