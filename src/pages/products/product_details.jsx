import {
  FooterComponents,
  HeaderComponents,
  ProductCard,
  ProductDetailsReviewSection,
  ProductDetailsRightCard,
  ProductsDetailsCarousel,
} from "../../component";
import React from "react";
export default function ProductsDetails() {
  return (
    <React.Fragment>
      <div class="inner-banner">
        <div class="container">
          <p>Product View</p>
        </div>
      </div>

      <div className="page-sec" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <ProductsDetailsCarousel />
            <ProductDetailsRightCard />
          </div>
        </div>
        <ProductDetailsReviewSection />
      </div>
    </React.Fragment>
  );
}
