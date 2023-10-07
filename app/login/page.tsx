import { Static_images } from "@/Static_Data/Images";
import "@/Scss/Pages/Login/Login.css"

export default function login() {
  return (
    
      <div className="Login">
        <div className="Appcontent">
          <img src={Static_images.secound_logo} alt="" />
          <p>What a better society should be like </p>
        </div>
          <form action="">
            <div className="inputbox">
              <label htmlFor="UsernameInput">UserName</label>
              <input type="text" id="UsernameInput" />
            </div>
            <div className="inputbox">
              <label htmlFor="PasswordInput">Password</label>
              <input type="password" id="PasswordInput" />
            </div>
            <button type="submit">Submit</button>
          </form>

      </div>
    );
}
