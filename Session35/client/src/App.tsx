import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import RandomList from "./components/RandomList";
import ThemeBox from "./components/ThemeBox";
import ViewMode from "./components/ViewMode";
import SidebarMenu from "./components/SidebarMenu";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FavoritesUser from "./components/FavoritestUser";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <div style={{ display: "flex" }}>
              <SidebarMenu />
              <div style={{ flex: 1, padding: "20px" }}>
                <h1>Redux Toolkit Demo</h1>
                <HomePage />
                <hr style={{ margin: "30px 0" }} />
                <Counter />
                <hr style={{ margin: "30px 0" }} />
                <RandomList />
                <hr style={{ margin: "30px 0" }} />
                <ThemeBox />
                <hr style={{ margin: "30px 0" }} />
                <ViewMode />
                <hr style={{ margin: "30px 0" }} />
                <LanguageSwitcher />
                <hr style={{ margin: "30px 0" }} />
                <FavoritesUser />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;