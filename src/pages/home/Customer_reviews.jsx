import { ReviewCard } from "../../component";
import CarouselCard from "../../component/CarouselCard";

export default function Customer_reviews() {
  return (
    <div class="home-sec review-sec">
      <div class="container">
        <h1>Customer Reviews</h1>
        <img class="bottom-head" src="assets/web/img/Underline.png" />

        {/* <section class="center slider slick-initialized slick-slider slick-dotted">
          <button
            class="slick-prev slick-arrow"
            aria-label="Previous"
            type="button"
            style={{ display: "block;" }}
          >
            Previous
          </button>
          <div class="slick-list draggable">
            <div
              class="slick-track"
              style={{
                opacity: "1;",
                width: "149460px",
                transform: "translate3d(-940px, 0px, 0px)",
              }}
            >
              <div
                class="slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabindex="-1"
                style={{ width: "430px" }}
              >
                <div>
                  <div style={{ width: "100%", display: "inline-block" }}>
                    <div
                      class="review-card"
                      style={{
                        width: "100%",
                        "box-shadow":
                          "rgb(60 64 67 / 4%) 0px 1px 2px 0px, rgb(60 64 67 / 25%) 0px 2px 6px 2px",
                      }}
                    >
                      <ul class="rating">
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
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <h6 style={{ "font-size": "16px;" }}>I like it</h6>
                      <p
                        class="review-text"
                        style={{
                          "margin-bottom": "40px",
                          "font-size": "14px",
                          height: "75px;",
                        }}
                      >
                        I am very happy with the service provided to me the gift
                        was jest awesome. It was a very unique g...
                      </p>
                      <div
                        class="review-details"
                        style={{ "font-size": "11px;" }}
                      >
                        <p class="c-name">Chandu</p>
                        <p class="date">Apr 20, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <CarouselCard />
        {/* <ReviewCard />
        <ReviewCard /> */}
      </div>
    </div>
  );
}
