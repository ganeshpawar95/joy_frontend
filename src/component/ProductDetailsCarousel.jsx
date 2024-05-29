export default function ProductsDetailsCarousel() {
  return (
    <div className="col-md-6">
      <div className="product-img" style={{ height: "auto" }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item">
              <img
                src="assets/uploads/product/1704864930_2628.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item">
              <img
                src="assets/uploads/product/1704866797_8669.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item">
              <img
                src="assets/uploads/product/1643283113_4366.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item active left">
              <img
                src="assets/uploads/product/1643283113_9492.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item next left">
              <img
                src="assets/uploads/product/1643283113_9574.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item">
              <img
                src="assets/uploads/product/1643283113_6760.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item">
              <img
                src="assets/uploads/product/1643283113_6816.jpg"
                alt="Los Angeles"
              />
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="exzoom" id="exzoom">
        <div className="exzoom_nav">
          <p className="exzoom_nav_inner">
            <span className="current">
              <img
                src="../assets/uploads/product/1704864930_2628.jpg"
                width="60"
                height="60"
              />
            </span>
            <span>
              <img
                src="assets/uploads/product/1704866797_8669.jpg"
                width="60"
                height="60"
              />
            </span>
            <span>
              <img
                src="assets/uploads/product/1643283113_4366.jpg"
                height="60"
                style={{ left: "6px" }}
              />
            </span>
            <span>
              <img
                src="assets/uploads/product/1643283113_9492.jpg"
                height="60"
                style={{ left: "6px" }}
              />
            </span>
            <span>
              <img
                src="assets/uploads/product/1643283113_9574.jpg"
                height="60"
                style={{ left: "6px" }}
              />
            </span>
            <span>
              <img
                src="assets/uploads/product/1643283113_6760.jpg"
                height="60"
                style={{ left: "6px" }}
              />
            </span>
            <span>
              <img
                src="assets/uploads/product/1643283113_6816.jpg"
                height="60"
                style={{ left: "6px" }}
              />
            </span>
          </p>
        </div>
        <div className="exzoom_img_box">
          <div className="exzoom_img_ul_outer">
            <ul className="exzoom_img_ul">
              <li>
                <img
                  src="assets/uploads/product/1704864930_2628.jpg"
                  style={{ marginTop: "0px", width: "530px" }}
                />
              </li>
              <li>
                <img
                  src="assets/uploads/product/1704866797_8669.jpg"
                  style={{ marginTop: "0px", width: "530px" }}
                />
              </li>
              <li>
                <img
                  src="assets/uploads/product/1643283113_4366.jpg"
                  style={{ marginTop: "0px", width: "424px" }}
                />
              </li>
              <li>
                <img
                  src="assets/uploads/product/1643283113_9492.jpg"
                  style={{ marginTop: "0px", width: "424px" }}
                />
              </li>
              <li>
                <img
                  src="assets/uploads/product/1643283113_9574.jpg"
                  style={{ marginTop: "0px", width: "424px" }}
                />
              </li>
              <li>
                <img
                  src="assets/uploads/product/1643283113_6760.jpg"
                  style={{ marginTop: "0px", width: "424px" }}
                />
              </li>
              <li>
                <img
                  src="assets/uploads/product/1643283113_6816.jpg"
                  style={{ marginTop: "0px", width: "424px" }}
                />
              </li>
            </ul>
          </div>
          <div className="exzoom_zoom_outer">
            <span
              className="exzoom_zoom"
              style={{
                width: "265px",
                height: "265px",
                display: "none",
                left: "265px",
                top: "0px",
              }}
            ></span>
          </div>
          <p
            className="exzoom_preview"
            style={{
              width: "530px",
              height: "530px",
              left: "535px",
              display: "none",
            }}
          >
            <img
              className="exzoom_preview_img"
              src="assets/uploads/product/1704864930_2628.jpg"
              style={{
                width: "1060px",
                height: "1060px",
                left: "-528px",
                top: "0px",
              }}
            />
          </p>
        </div>
      </div>
      <ul className="secure-img">
        <li>
          <img src="assets/secure/checkout.png" />
        </li>
        <li>
          <img src="assets/secure/24x7.png" />
        </li>
        <li>
          <img src="assets/secure/Satisfaction.jpg" />
        </li>
        <li>
          <img src="assets/secure/Validity.jpg" />
        </li>
      </ul>
    </div>
  );
}
