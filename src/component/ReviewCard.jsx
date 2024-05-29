import Rating from "react-rating";

export default function ReviewCard() {
  return (
    <div
      class=" slick-cloned"
      //   data-slick-index="-2"
      //   aria-hidden="true"
      //   tabindex="-1"
      style={{ width: "430px" }}
    >
      <div>
        <div style={{ width: "100%", display: "inline-block;" }}>
          <div
            class="review-card"
            style={{
              width: "100%",
              "box-shadow":
                "rgb(60 64 67 / 4%) 0px 1px 2px 0px, rgb(60 64 67 / 25%) 0px 2px 6px 2px;",
            }}
          >
            <Rating
              emptySymbol={<i class="fa fa-star-o"></i>}
              // fullSymbol={<i class="fa fa-star" aria-hidden="true" />}
              fractions={2}
              placeholderRating={4}
              className="rating"
            />
            {/* <ul class="rating">
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
            </ul> */}
            <h6 style={{ "font-size": "16px;" }}>Quality </h6>
            <p
              class="review-text"
              style={{
                "margin-bottom": "40px",
                "font-size": "14px",
                height: "75px;",
              }}
            >
              love the prompt delivery, products and price is reasonable.
            </p>
            <div class="review-details" style={{ "font-size": "11px;" }}>
              <p class="c-name">Bharath</p>
              <p class="date">Jul 06, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
