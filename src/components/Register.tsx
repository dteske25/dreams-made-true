const Register = () => (
  <section id="register" className="content-section text-center">
    <div className="register-section">
      <div className="container">
        <div className="col-lg-8 col-lg-offset-2">
          <h2>Register</h2>
          <p>
            If you are an Iowa girl with special needs, you can be part of the
            Dreams Made True, Inc. Pageant. Registration is preferred by June 1,
            2021, along with the $50.00 registration fee. This fee covers all
            pageant events, meals, a t-shirt for the contestant, and two adult
            tickets to the main event. Registrations received after June 1 are
            not guaranteed a t-shirt or recognition in the program.
          </p>
          <a
            href="https://docs.google.com/forms/d/1hhnQwhHq4I2i-Ww-7SYhNhY-0DZWsszbsLKsh-rdunk/"
            target="_blank"
            className="btn btn-default btn-lg"
          >
            Contestant Registration
          </a>
          <p></p>
          <p>
            Click here to pay the $50.00 registration fee or to become a partner
            with Dreams Made True, Inc. We welcome all partners who value the
            lives of our Iowa girls with special needs and want to help us make
            them feel honored and special for at least one weekend a year.
            Dreams Made True, Inc., is a non-profit organization, and ALL
            proceeds go to making this special weekend a dream made true for
            these girls! Gifts are tax deductible.
          </p>
          <p>
            <form method="post" action="https://www.paypal.com/cgi-bin/webscr">
              <input type="hidden" value="_s-xclick" name="cmd" />
              <input
                type="hidden"
                value="7TKZPANMCWN52"
                name="hosted_button_id"
              />
              <input
                type="image"
                style={{ border: "0" }}
                alt="PayPal - The safer, easier way to pay online!"
                name="submit"
                src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif"
              />
              <img
                alt=""
                width="1"
                height="1"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                style={{ borderWidth: "0px", borderStyle: "solid" }}
              />
            </form>
          </p>
          <p>
            Because of what we try to accomplish here at Dreams Made True, Inc.,
            we also have a large need for volunteers. If you are interested in
            volunteering during the pageant, please fill out this form, and you
            will become a part of the Dreams Made True, Inc. Pageant.
            <br /> Please note: By filling out this form, you are committing to
            being a part of the Pageant, and will be expected to attend.
          </p>
          <a
            href="https://docs.google.com/forms/d/1d_FhnPuAVttPRM5jrenjANnGy63BMiaXMdNB2jgy1zQ/"
            target="_blank"
            className="btn btn-default btn-lg"
          >
            Volunteer Registration
          </a>
          <p></p>
          <p>
            If you have any more questions or would like more information about
            the registration process, please email{" "}
            <a href="mailto:register@dreams-made-true.org">
              register@dreams-made-true.org
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Register;
