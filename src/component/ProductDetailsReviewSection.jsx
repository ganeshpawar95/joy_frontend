import React from "react";
import ReviewBlock from "./ReviewBlock";

const ProductDetailsReviewSection = () => {
  return (
    <div className="page-sec review-write">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="rating-block">
              <h2 className="bold padding-bottom-7">
                4.8{" "}
                <i
                  className="glyphicon glyphicon-star"
                  style={{ fontSize: "22px" }}
                ></i>
                <br />
                <span style={{ fontSize: "15px", fontWeight: "100" }}>
                  60 reviews
                </span>
              </h2>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="pull-left">
              <div
                className="pull-left"
                style={{ width: "35px", lineHeight: "1" }}
              >
                <div style={{ height: "9px", margin: "5px 0" }}>
                  5 <span className="glyphicon glyphicon-star"></span>
                </div>
              </div>
              <div className="pull-left" style={{ width: "180px" }}>
                <div
                  className="progress"
                  style={{ height: "9px", margin: "8px 0" }}
                >
                  <div
                    className="progress-bar progress-bar-success"
                    role="progressbar"
                    aria-valuenow="5"
                    aria-valuemin="0"
                    aria-valuemax="5"
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ marginLeft: "10px" }}>
                48
              </div>
            </div>
            {/* Repeat similar blocks for other ratings */}
          </div>
          <div className="col-sm-6"></div>
        </div>
        <div className="row">
          {/* Repeat review blocks */}
          <ReviewBlock
            name="Priyanka debdas"
            date="Feb 11, 2021"
            title="Loved it"
            description="Its very special for me...thank you sooo much...n best thing is customer service.......❤️❤️❤️"
          />
          <ReviewBlock
            name="Nishi"
            date="Apr 04, 2021"
            title="Thankyou for maki..."
            description="It looked perfectly as I wanted and thankyou for the extraordinary service 😊 Couldn't ask for anything better😊 and definitely worth every penny❤️"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href="../review/name-a-star-valentine-combo.html"
            style={{
              marginTop: "20px",
              background: "#fff",
              color: "black",
              fontWeight: "600",
            }}
            className="btn"
          >
            See more reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsReviewSection;
