import "./App.css";
//componentes
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailePage from "./pages/DetailPage/DetailePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
function App() {
  return (
    <Router>
      <>
        <div>
          <Header />
        </div>
        <div>
          <NavBar/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/Detail/:id" element={<DetailePage/>}/>
            <Route path="/Category/:categoryId" element={<CategoryPage/>}/>          
          </Routes>
        </div>
      </>
    </Router>
  ); 
}

export default App;
