  import "@/Scss/Commen/Login/Login.css"
const data = [
  {id : 1 , label : "Email :" , "placeholder" : "Email" , type : "text"},
  {id : 2 , label : "Phone Number :" , "placeholder" : "Phone Number" , type : "number"},
  {id : 3 , label : "Username :" , "placeholder" : "Username" , type : "text"},
  {id : 4 , label : "password :" , "placeholder" : "password" , type : "password"},
  {id : 1 , label : "birthday :" , "placeholder" : "Email" , type : "date"}



]
function Register() {
    return (
        <div className="LoginComponent">
            <p className='header'>Register</p>
            <form action="">
                {data.map(item => (
                <div className="inputbox">
                  <div className="label">
                      <label htmlFor={`${item.label}input`}>{item.label}</label>
                  </div>
                  <input type={item.type} id={`${item.label}input`} placeholder={item.placeholder} />
                </div>
                ))}
                <button>create</button>
            </form>
        </div>
    )
}

export default Register