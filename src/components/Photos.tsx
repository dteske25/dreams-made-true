const Photos = () => (
  <section id="photos" className="content-section text-center">
    <div className="container photos-section">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Photos</h2>
        </div>
      </div>
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" id="images"></div>
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
  </section>
);
export default Photos;
