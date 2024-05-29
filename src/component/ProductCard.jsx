export default function ProductCard() {
  return (
    <div class="col-md-3 product-block box">
      {/* <div class="ribbon">
        <span>Best seller</span>
      </div> */}
      {/* //{" "} */}
      <a href="product/name-a-star-valentine-combo.html">
        <div class="pro-box">
          <img
            src="assets/uploads/product/1704864930_2628.jpg"
            style={{ height: "275px;" }}
          />
          <h6
            style={{ "margin-bottom": "26px;" }}
            title="Name a star valentine combo"
            class="pro-name"
          >
            Name a star valen...
          </h6>

          <ul class="price-list">
            <li class="rs">2,590</li>
            <li class="strike">
              <span style={{ color: "#867e7e" }}>₹</span>
              <strike style={{ color: "#867e7e" }}>
                <span style={{ color: "#867e7e" }}>
                  3,490<span></span>
                </span>
              </strike>
            </li>
          </ul>
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
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </li>

            <li class="r-text">60 Reviews</li>
          </ul>
        </div>
      </a>
    </div>
  );
}
