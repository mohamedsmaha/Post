const main = "http://localhost:3000"
export const App_links : App_linkstype = {
    Home : `${main}/` , 
    Login: `${main}/login`
} 
type App_linkstype = {
    [key in links] : string
}
type links = "Home" | "Login"