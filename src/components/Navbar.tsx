import { Typography } from "@mui/material";
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
      role='navigation'
    >
      <div className='container'>
        <div className='navbar-header'>
          <div className='navbar-brand'>
            <ScrollLink smooth spy to='root'>
              <Typography>Dreams Made True, Inc.</Typography>
            </ScrollLink>
          </div>
        </div>

        <div className='collapse navbar-collapse navbar-right navbar-main-collapse'>
          <ul className='nav navbar-nav'>
            <li className='hidden'>
              <a href='#root'></a>
            </li>
            <li>
              <ScrollLink
                activeClass='active'
                smooth
                spy
                to='about'
                offset={-100}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass='active'
                smooth
                spy
                to='info'
                offset={-100}
              >
                Info
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass='active'
                smooth
                spy
                to='register'
                offset={-100}
              >
                Register
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass='active'
                smooth
                spy
                to='winners'
                offset={-100}
              >
                Winners
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass='active'
                smooth
                spy
                to='contact'
                offset={-100}
              >
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
