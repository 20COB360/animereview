import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Header from "./components/header/header";
import AnimeIndividual from "./pages/individual-anime-render/anime-individual";
import MovieIndividual from "./pages/individual-movie-render/movie-individual";
import About from "./pages/aboutus/about"
import Home from "./pages/home/home";
import ScrollToTop from "./components/scroll-top/scroll-to-top";
import SearchSidebarWrapper from "./components/search-sidebar/search-sidebar-wrapper";

function App() {
  return (
    <>
      <Header />
      <SearchSidebarWrapper/>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/anime-individual" element={<AnimeIndividual />}></Route>
          <Route path="/movie-individual" element={<MovieIndividual />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
