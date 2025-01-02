import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";


function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Gallery></Gallery>
      <News></News>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
