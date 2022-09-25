import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedBackStats from "./Components/FeedBackStats";
import Header from "./Components/Header";
import AboutPage from "./Pages/AboutPage";

import AboutIconsLink from "./Components/AboutIconsLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedBackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconsLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
