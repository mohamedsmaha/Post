export const App_links : App_linkstype = {
    Home : "http://localhost:3000/"
} 
type App_linkstype = {
    [key in links] : string
}
type links = "Home"