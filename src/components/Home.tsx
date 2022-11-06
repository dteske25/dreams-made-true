import { Link } from "react-router-dom";
import { paths } from "../routes";
import About from "./About";
import Announcements from "./Announcements";
import Contact from "./Contact";
import Info from "./Info";
import Photos from "./Photos";
import Register from "./Register";
import Navbar from "./Navbar";
import Winners from "./Winners";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">Dreams Made True</h1>
                <p className="intro-text">
                  An organization dedicated to improving the lives of Iowa girls
                  with special needs.
                </p>
                <a href="#announcements" className="btn btn-circle page-scroll">
                  <i className="fa fa-angle-double-down animated"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Announcements />
      <About />
      <Info />
      <Register />
      <Winners />
      <Photos />
      <Contact />
      <footer>
        <div className="container text-center">
          <p>
            Copyright &copy; Dreams Made True, Inc. {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
