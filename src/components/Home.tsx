import { Link } from "react-scroll";

import About from "./About";
import Announcements from "./Announcements";
import Contact from "./Contact";
import Info from "./Info";
import Navbar from "./Navbar";
import Photos from "./Photos";
import Register from "./Register";
import Winners from "./Winners";

const Home = () => {
  return (
    <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
      <Navbar />
      <header className="intro" style={{ height: "100vh" }}>
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">Dreams Made True</h1>
                <p className="intro-text">
                  An organization dedicated to improving the lives of Iowa girls
                  with special needs.
                </p>
                <Link
                  smooth
                  spy
                  to="announcements"
                  className="btn btn-circle page-scroll"
                >
                  <i className="fa fa-angle-double-down animated"></i>
                </Link>
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
      <Contact />
      <footer>
        <div className="container text-center">
          <p>
            Copyright &copy; Dreams Made True, Inc. {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
