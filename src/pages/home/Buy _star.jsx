import { BuyStartCard } from "../../component";

export default function BuyStart() {
  return (
    <div class="home-sec star-sec">
      <div class="container">
        <h1>Buy a Star</h1>
        <img class="bottom-head" src="assets/web/img/Underline.png" />
        <div class="row">
          <BuyStartCard />
          <BuyStartCard />

          <BuyStartCard />
        </div>
      </div>
    </div>
  );
}
