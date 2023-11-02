const main = "http://localhost:3000"
export const App_links : App_linkstype = {
    Home(){return `${main}`},
    Login(){return `${main}/login`},
    Profile(id){return `${main}/profile/${id}`}
} 
type App_linkstype = {
    Home    : () => string ,
    Login   : () => string ,
    Profile : (id : number) => string
}
type links = "Home" | "Login" | "Profile"