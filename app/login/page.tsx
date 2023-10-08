import { Static_images } from "@/Static_Data/Images";
import "@/Scss/Pages/Login/Login.css"

export default function login() {
  return (
    <>
    <div className="LoginPage">
      <img src={Static_images.Wave} alt=""  className="Wave"/>
      <div className="Login">
        <div className="Appcontent">
          <img src={Static_images.secound_logo} alt="" />
          <p>What a better society should be like </p>
        </div>
        <div className="login">
            <p>Login</p>
            <form action="">
            <div className="inputbox">
              <input type="text" id="UsernameInput" placeholder="UserName / Email / Number" />
            </div>
            <div className="inputbox">
              {/* <label htmlFor="PasswordInput">Password</label> */}
              <input type="password" id="PasswordInput" placeholder="Password"/>
            </div>
            <div className="buttons">
              <button>Register</button>
              <button>forget password</button>
            </div>
            <button type="submit">login</button>
            </form>
        </div>
      </div>
      <img src={Static_images.Wave} alt=""  className="Wave2"/>
    </div>
      </>
    );
}
