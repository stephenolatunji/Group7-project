import React from "react";
import { Button } from "semantic-ui-react";

const Signup = () => {
  return (
          <div class="ui container">

      <h1>CREST</h1>
      <p>
        Registaring to this website, you accept our <span>Terms of Use</span>{" "}
        and our <span>Privacy policy</span>
      </p>
      <div>
        <div>Sign Up</div>
        <button class="ui primary button">GOOGLE</button>
        <button class="ui primary button">FACEBOOK</button>
        <button class="ui primary button">TWITTER</button>

        <div class="ui horizontal divider">
    or
  </div>

        <form class="ui form">
  <div class="field">
    {/* <label>First Name</label> */}
    <input type="text" placeholder="User Name" />
  </div>
  <div class="field">
    {/* <label>Password</label> */}
    <input type="email" placeholder="Email" />
  </div>
  <div class="field">
    {/* <label>Password</label> */}
    <input type="password" placeholder="Password" />
  </div>
  <p>Your password be at least six characters long and must contain letters, numbers an special characters,cannot contain white space</p>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" class="visible" readonly="" tabindex="0" />
      <label>I wish to recieve newsletters, promotions and news from Crest</label>
    </div>
  </div>

  <button type="submit" class="ui primary button">Signup</button>
</form>
<p>Already a Member? <span>Sign in</span></p>
      </div>
    </div>
  );
};
export default Signup;
