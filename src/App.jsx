import "./assets/css/style.min.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// L'APP È NAVIGABILE TRAMITE IL LOGO CHE PORTA ALLA MAIN ED IL SPLITBUTTON NELLA NAVBAR PER PROFILE E SETTINGS
function App() {
  const [actualPage, setActualPage] = useState("main");

  function handlePage(page) {
    setActualPage(page);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-darkgray">
              <Header callbackDetailPage={handlePage} />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route path="/profile" element={<Profile callbackDetailPage={handlePage} />} />
        <Route path="/settings" element={<Settings callbackDetailPage={handlePage} />} />
      </Routes>
    </BrowserRouter>
  );
  {
    /* <>
      {actualPage == "main" && (
        <div className="bg-darkgray">
          <Header callbackDetailPage={handlePage} />
          <Main />
          <Footer />
        </div>
      )}
      {actualPage == "profile" && <Profile callbackDetailPage={handlePage} />}
      {actualPage == "settings" && <Settings callbackDetailPage={handlePage} />}
    </> */
  }
}

export default App;
