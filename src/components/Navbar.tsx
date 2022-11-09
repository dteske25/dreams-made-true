import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  }, []);

  return (
    <nav
      className={clsx("navbar", "navbar-custom", "navbar-fixed-top", {
        "top-nav-collapse": scrollHeight > 50,
      })}
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-main-collapse"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="navbar-brand">
            <ScrollLink smooth spy to="root">
              Dreams Made True, Inc.
            </ScrollLink>
          </div>
        </div>

        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="hidden">
              <a href="#root"></a>
            </li>
            {/* <li>
              <ScrollLink activeClass="active" smooth spy to="announcements">
                Announcements
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink activeClass="active" smooth spy to="about">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink activeClass="active" smooth spy to="info">
                Info
              </ScrollLink>
            </li>
            <li>
              <ScrollLink activeClass="active" smooth spy to="register">
                Register
              </ScrollLink>
            </li>
            <li>
              <ScrollLink activeClass="active" smooth spy to="winners">
                Winners
              </ScrollLink>
            </li>
            <li>
              <ScrollLink activeClass="active" smooth spy to="contact">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
