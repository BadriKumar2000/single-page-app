import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import NotFound from "./components/NotFound/notfound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/contact" Component={Contact} />
      <Route exact path="/*" Component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default App;
