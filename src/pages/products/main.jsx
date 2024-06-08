import {
  FooterComponents,
  HeaderComponents,
  ProductCard,
} from "../../component";
import React from "react";
export default function ProductsMain() {
  return (
    <React.Fragment>
      <div class="inner-banner">
        <div class="container">
          <p>Products</p>
        </div>
      </div>

      <div class="page-sec">
        <div class="container">
          <div class="row">
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />

            <ProductCard />

            <ProductCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
