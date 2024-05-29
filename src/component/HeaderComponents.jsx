export default function HeaderComponents() {
  return (
    <header>
      <div id="cover-spin"></div>
      <div class="top-nav">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div>
                <p class="top-text" style={{ "font-size": "15px" }}>
                  100% Satisfaction Guarantee.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div>
                <p class="top-text" style={{ "font-size": "15px" }}>
                  Delivery Time 5-6 days
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <ul class="top-icons">
                <li class="desk">
                  <i class="fa fa-envelope"></i>
                  <a href="mailto:support@joyfulsurprises.in">
                    support@joyfulsurprises.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="menu_main_full">
          <nav class="navbar navbar-default">
            <div class="menu-line">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  {" "}
                  <span class="icon-bar"></span> <span class="icon-bar"></span>{" "}
                  <span class="icon-bar"></span>{" "}
                </button>
                <a class="navbar-brand" href="index.htm">
                  <img src="assets/web/img/js-logo-brand.png" class="logo" />
                </a>{" "}
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right" id="urls">
                  <li>
                    <a href="index.htm">Home</a>
                  </li>
                  <li>
                    <a href="all-products.html">Products</a>
                  </li>
                  <li>
                    <a href="find-your-star.html">Find Your Star</a>
                  </li>
                  {/* <!-- <li><a href="#" class="woo"><i class="fa fa-user-circle-o"></i> My Account</a></li>
					  <li><a href="#" class="woo cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</a></li> --> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="menu_rlinks">
          <div class="shop-block">
            <ul>
              <li>
                <a
                  href=""
                  class="cd-btn js-cd-panel-trigger woo cart"
                  data-panel="main"
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                  <span class="acc-text">Cart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
