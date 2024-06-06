import React from "react";
import Header from "./Component/Header";

function Registration() {
  return (
    <>
      <Header />
      <div
        className="authWrapper"
        style={{ backgroundImage: "url(assets/web/img/auth-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="authInner">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12">
                    <div className="formBoAuth">
                      <div className="topInfo">
                        <h4>Sign up</h4>
                        <p>
                          Already have an account? <a href="#">Sing in</a>
                        </p>
                      </div>
                      <div className="mainFormInnerAuth">
                        <form>
                          <div className="row">
                            <div className="col-lg-6 col-xl-md-6 col-sm-12 col-xs-12">
                              <div class="form-group">
                                <label>Full name*</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-md-6 col-sm-12 col-xs-12">
                              <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-md-6 col-sm-12 col-xs-12">
                              <div class="form-group">
                                <label>Email*</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-md-6 col-sm-12 col-xs-12">
                              <div class="form-group">
                                <label>Phone Number*</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-md-6 col-sm-12 col-xs-12">
                              <div class="form-group">
                                <label>Password*</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-md-6 col-sm-12 col-xs-12">
                              <div class="form-group">
                                <label>Confirm Password*</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div className="col-xs-12">
                              <div class="checkbox">
                                <label>
                                  <input type="checkbox" /> I agree to receive
                                  special updates, offers, promotions from
                                  joyfulsurprise.in
                                </label>
                              </div>
                            </div>
                          </div>
                          <button type="submit">Register</button>
                        </form>
                        <div className="bottomAuth">
                          <h5>or sign in</h5>
                          <div className="extraSignInOptions">
                            <button type="button">OTP</button>
                            <button type="button">Gmail</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12">
                    <div className="offerPlaceAuth">Place for offer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
