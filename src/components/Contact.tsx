const Contact = () => (
  <section id="contact" className="container content-section text-center">
    <div className="row">
      <h2>Contact Dreams Made True</h2>
      <p>
        <a href="mailto:info@dreams-made-true.org">info@dreams-made-true.org</a>
      </p>
      <ul className="list-inline banner-social-buttons">
        <li>
          <a
            href="mailto:info@dreams-made-true.org"
            className="btn btn-default btn-lg"
          >
            <i className="fa-email fa-fw"></i>
            <span className="network-name">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/dreamsmadetruepageant/"
            target="_blank"
            className="btn btn-default btn-lg"
          >
            <i className="fa fa-facebook fa-fw"></i>
            <span className="network-name">Facebook</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
);
export default Contact;
