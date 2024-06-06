import React from "react";
import Header from "./Component/Header";

function Forgotpassword() {
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
                        <h4>Reset your password</h4>
                        <p>
                          Dont have an account? <a href="#">Sing up</a>
                        </p>
                      </div>
                      <div className="mainFormInnerAuth">
                        <form>
                          <div class="form-group">
                            <label>
                              OTP will be send to your registered email id and
                              mobile number
                            </label>
                            <input type="text" class="form-control" />
                          </div>
                          <button type="submit">SEND OTP</button>
                        </form>
                        <div className="bottomAuth">
                          <h5>or sign in</h5>
                          <button
                            style={{ marginBottom: "10px" }}
                            type="button"
                          >
                            SIGN IN WITH PASSWORD
                          </button>
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

export default Forgotpassword;
