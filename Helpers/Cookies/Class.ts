import Cookies from "js-cookie"
class Cookie {
    set_Cookie(name:string  , value:any, expiress : number | "Infinity"){
        function infinity(){
            const distantFuture = new Date();
           return  distantFuture.setFullYear(distantFuture.getFullYear() + 100); // Set it to expire in 100 years (adjust as needed)
        }
        Cookies.set(name , value , {expires : expiress == "Infinity" ? infinity() : expiress})
    }
    private getCookie(name:string) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
        }
    }
    return null;
    }
    login(){
        const cookie = this.getCookie("login")
        if(cookie == null){
            this.set_Cookie('login' , false , "Infinity")
            return false
        }
        else{
            return cookie == "true"
        }
    }
}
export const Cookie_model = new Cookie