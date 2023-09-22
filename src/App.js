import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

const App = () => (
  <BrowserRouter>
    <Header />
    <Home />
    <About />
    <Contact />
  </BrowserRouter>
);

export default App;
