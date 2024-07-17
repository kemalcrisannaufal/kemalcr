import MainLayout from "../common/components/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "../common/components/elements/PageWrapper";
import HomePage from "./Home";
import AboutPage from "./AboutPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const Main = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;
