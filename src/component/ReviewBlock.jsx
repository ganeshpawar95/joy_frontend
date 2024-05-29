const ReviewBlock = ({ name, date, title, description }) => (
  <div className="col-sm-3">
    <hr />
    <div className="review-block" style={{ height: "300px" }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="review-block-rate">
            <span
              className="glyphicon glyphicon-star stars"
              aria-hidden="true"
            ></span>
            <span
              className="glyphicon glyphicon-star stars"
              aria-hidden="true"
            ></span>
            <span
              className="glyphicon glyphicon-star stars"
              aria-hidden="true"
            ></span>
            <span
              className="glyphicon glyphicon-star stars"
              aria-hidden="true"
            ></span>
            <span
              className="glyphicon glyphicon-star stars"
              aria-hidden="true"
            ></span>
          </div>
          <div className="review-block-title">{title}</div>
          <div
            className="review-block-description"
            style={{ textAlign: "justify", lineHeight: "20px" }}
          >
            {description}
          </div>
          <br />
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: "-45px", marginLeft: "10px" }}>
      <div className="col-sm-6 float-left" style={{ fontSize: "13px" }}>
        {name}
      </div>
      <div className="col-sm-6 float-right" style={{ fontSize: "13px" }}>
        {date}
      </div>
    </div>
  </div>
);

export default ReviewBlock;
