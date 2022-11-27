import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Info from "./Info";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Register from "./Register";
import Winners from "./Winners";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Info />
      <Register />
      <Winners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
