import { FooterComponents, HeaderComponents } from "../../component";
import About_star_registration from "./About_star_registration";
import All_our_offers_Include from "./All_our_offers_Include";
import BuyStart from "./Buy _star";
import Customer_reviews from "./Customer_reviews";

export default function HomePage() {
  return (
    <div>
      <HeaderComponents />
      <div class="banner-sec">
        <a href="https://joyfulsurprises.in/all-products">
          <img src="assets/web/img/Banner-Final-Desktop.jpg" />
        </a>
        <div class="container"></div>
      </div>
      <BuyStart />
      <About_star_registration />
      <All_our_offers_Include />
      <Customer_reviews />
      <FooterComponents />
    </div>
  );
}
