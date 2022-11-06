const Navbar = () => {
  return (
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
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
            <i className="fa fa-pause" id="play-button"></i>
            <a className="page-scroll" href="#root">
              <span className="light">Dreams Made True, Inc.</span>
            </a>
          </div>
        </div>

        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="hidden">
              <a href="#root"></a>
            </li>
            <li>
              <a className="page-scroll" href="#announcements">
                Announcements
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#info">
                Info
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#register">
                Register
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#winners">
                Winners
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#photos">
                Photos
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
