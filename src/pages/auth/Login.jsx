import React from "react";
export default function Login() {
  const backgroundImageStyle = {
    backgroundImage: `url('assets/images/Joyfulsurprises-loginpage-background.jpg')`,
  };

  return (
    <React.Fragment>
      <div class="inner-banner">
        <div class="container">
          <p>Login</p>
        </div>
      </div>

      <div class="page-sec pageSecbg">
        {/* <div class="container loginbox" style={{ backgroundColor: "white" }}>
          <div class="row">
            <div className="col-1"></div>

            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  
                </div>
              </div>
            </div>

            <div className="col-1"></div>
          </div>
        </div> */}
        <div class="container-fluid joyful-surprise-bg">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 signup-form">
              <div class="row mb-3">
                <div class="col-xs-12">
                  <h1>Sign Up</h1>
                </div>
                <div class="col-xs-12 text-right">
                  <p>
                    Already have an account? <a href="#">Sign in</a>
                  </p>
                </div>
              </div>
              <form>
                <div class="row mb-3">
                  <label for="fullName" class="col-sm-2 col-form-label">
                    Full Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="username" class="col-sm-2 col-form-label">
                    Username
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="email" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="phoneNumber" class="col-sm-2 col-form-label">
                    Phone Number
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="tel"
                      class="form-control"
                      id="phoneNumber"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="password" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="confirmPassword" class="col-sm-2 col-form-label">
                    Confirm Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12">
                    <div class="checkbox">
                      <label for="terms">
                        <input type="checkbox" id="terms" /> I agree to receive
                        special updates, offers, promotions from Joyful
                        Surprises
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div className="col-6">
              <form>
                <div class="row">
                  <div class="col-5">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
