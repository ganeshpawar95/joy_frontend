import React from "react";
import ProductDetailsFeatures from "./ProductDetailsFeatures";
import { useNavigate } from "react-router-dom";

const ProductDetailsRightCard = () => {
  var nav = useNavigate();
  return (
    <div className="col-md-6">
      <div className="pro-desc">
        <h1 style={{ fontSize: "30px", color: "black", fontWeight: 600 }}>
          Name a star valentine combo
        </h1>
        <ul className="rating">
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
          <li className="r-text">60 Reviews</li>
        </ul>
        <ul className="price-list1">
          <li className="rs" style={{ marginRight: "4px" }}>
            2,590
          </li>
          <li className="strike" style={{ marginRight: "4px" }}>
            <span style={{ color: "#867e7e" }}>₹</span>
            <strike style={{ color: "#867e7e" }}>
              <span style={{ color: "#867e7e" }}>
                3,490<span></span>
              </span>
            </strike>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <label
              className="labels"
              style={{
                marginTop: "20px",
                fontSize: "18px",
              }}
            >
              Select certificate color
            </label>
            <ul
              style={{ listStyle: "none", display: "flex" }}
              id="colors"
              className="product-list-image-test medium-9 columns"
              data-ga-category="MainContent"
            >
              <li className="variantItem selectedVariant" color-data="Blue">
                <figure>
                  <img
                    className="productimg colors"
                    style={{ border: "1px solid #0c0b0b80" }}
                    src="/assets/uploads/variants/1704280698_1480.png"
                    alt="Mixed Roses Romantic Bunch"
                  />
                  <figcaption style={{ textAlign: "center" }}>
                    <span className="h-listprice webprice">Blue</span>
                  </figcaption>
                </figure>
              </li>
              <li className="variantItem selectedVariant" color-data="Pink">
                <figure>
                  <img
                    className="productimg colors"
                    style={{ border: "1px solid #0c0b0b80" }}
                    src="/assets/uploads/variants/1704280711_8180.png"
                    alt="Mixed Roses Romantic Bunch"
                  />
                  <figcaption style={{ textAlign: "center" }}>
                    <span className="h-listprice webprice">Pink</span>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <div className="medium-3 columns">&nbsp;</div>
          </div>
        </div>

        <ProductDetailsFeatures
          label={"Select Frame Color"}
          data={[{ name: "Black" }, { name: "White" }]}
        />
        <ProductDetailsFeatures
          label={"Select Frame Size(INCH)"}
          data={[{ name: "8X12" }, { name: "10X14" }]}
        />

        <ProductDetailsFeatures
          label={"Select Thickness"}
          data={[{ name: "3mm" }, { name: "4mm", is_selected: true }]}
        />

        <h3 className="product-sub-title">Enter Details</h3>
        <form method="post" id="myform" encType="multipart/form-data">
          <div class="small-form">
            <label class="labels">On whose name Star to be registered</label>
            <input type="text" name="text_35" class="input-box" required="" />
            <label class="labels">
              Any special date( ex: Birthday, Anniversary )
            </label>
            <input
              type="text"
              id="datepicker"
              readonly=""
              placeholder="YYYY-MM-DD"
              name="date_36"
              class="input-box hasDatepicker"
              required=""
            />
            <label class="labels">
              Special Note To Be Appeared On the Certificate
            </label>
            <input type="text" name="text_37" class="input-box" required="" />
            <label class="labels">Name for name a frame</label>
            <input type="text" name="text_38" class="input-box" required="" />
            <label class="labels">Photos for name a frame</label>
            <input
              type="file"
              name="file_file_39[]"
              id="image1"
              class="input-box"
              accept="image/x-png,image/gif,image/jpeg"
              multiple=""
              required=""
            />
            <p
              style={{
                color: "#df1616",
                "font-size": "14px",
                "margin-top": "-8px",
              }}
            >
              Note: Each letter one photo required. Maximum 8 photos.
            </p>{" "}
            <label class="labels">Photos for magnet</label>
            <input
              type="file"
              name="file_file_40[]"
              id="image"
              class="input-box"
              accept="image/x-png,image/gif,image/jpeg"
              multiple=""
              required=""
            />
          </div>
          <input
            type="submit"
            id="add_to_cart"
            class="btn shop e-b"
            value="Add to cart"
          />
          {/* <input
            type="button"
            // id="buy_now"
            onClick={() => nav("/checkout")}
            class="btn pay e-b"
            value="Buy now"
          /> */}
          <button onClick={() => nav("/login")}> Buy now</button>
        </form>
        <div
          className="product-info"
          style={{ height: "300px", overflowY: "scroll" }}
        >
          <h3 className="product-sub-title">Description</h3>
          <p>
            Planning a Gift for your loved ones? Then make it Out of the World.
            Naming a star is now an extraordinary way to express your love or
            gratitude towards your loved ones. Ever wonder looking at the
            millions of stars out there and imagining what it is like to own a
            star. We are here to provide you the perfect star for you and your
            loved ones which make it an excellent gift for any occasion.
          </p>
          {/* Rest of the description */}
        </div>
        <div className="mob-tabs">{/* Tab links and content */}</div>
      </div>
    </div>
  );
};

export default ProductDetailsRightCard;
