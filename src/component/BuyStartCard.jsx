export default function BuyStartCard() {
  return (
    <div class="col-md-4 buy-block box">
      {/* <div class="ribbon">
        <span>Best seller</span>
      </div> */}
      <div class="star-box">
        <img src="assets/web/home/star_img.jpg" />
        <div
          class="star-box-text"
          style={{
            "box-shadow": "rgb(100 100 111 / 20%) 0px 7px 29px 0",
          }}
        >
          <h3>Name a Star with frame</h3>

          <p class="price">Rs. 1,980</p>

          <p>
            Name a guaranteed visible star. Visible throughout the whole year.
            Star certificate along with the map will be placed in a frame &amp;
            packed in a box will be deliverd. <br />
            Delivery all over India.
          </p>

          <a class="buy-btn" href="assets/product/name-a-star">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
}
