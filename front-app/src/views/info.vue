<script>
export default {
  name: "infoView",
};
</script>
<style>
  .colors {
    background-color: #023c5b;
  }
  .read {
    color: #023c5b;
  }
</style>

<template>
    <section>
        <div class="ugf-main-wrap ugf-bg">
          <div class="ugf-header">
            <div class="logo">
              <a href="#"><img src="images/logo-dark.png" class="img-fluid" alt=""></a>
            </div>
            <ul class="steps">
              <li class="step on-process"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>01. Create Account</li>
              <li class="step"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>02. Select Plan</li>
              <li class="step"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>03. Payment Details</li>
            </ul>
            <div class="alternet-access">
              <p>Already have an account? <a href="login.html">Log in now!</a></p>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="ugf-container">
                  <div class="content-wrap">
                    <div class="ugf-form-block-header">
                      <h1>Register Your Account</h1>
                      <p>Inter your valid email address and password <br> to register your account</p>
                    </div>
                    <div class="ugf-third-party-login">
                      <a href="#"><img src="images/account-icon/google.png" alt=""> Sign up with Google</a>
                      <a href="#"><img src="images/account-icon/facebook.png" alt=""> Sign up with Facebook</a>
                    </div>
                    <div class="ugf-block-separator">
                      <p>Or</p> 
                    </div>
                    <div class="ugf-input-block">
                      <form action="register-2.html">
                        <div class="form-group">
                          <input type="name" class="form-control" id="inputText" placeholder="Full Name">
                        </div>
                        <div class="form-group">
                          <input type="email" class="form-control" id="inputMail" placeholder="Email Address">
                        </div>
                        <div class="form-group pass-block">
                          <input type="password" class="form-control" id="inputPass" placeholder="Password">
                        </div>
                        <div class="form-group">
                          <input type="name" class="form-control" id="inputCompany" placeholder="Company Name (Optional)">
                        </div>
                        <button type="submit" class="btn">Register Account</button>
                        <p class="terms">By clicking here and continuing, <br> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                      </form>
                    </div>
                    <div class="alternet-access">
                      <p>Already have an account? <a href="login.html">Log in now!</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<!--        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>

    <script src="js/custom.js"></script>
-->

    </section>
</template>
