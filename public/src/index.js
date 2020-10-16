// import app js 
import app from "./app.js"
import navbar from "./components/navbar.js"
import hero from "./components/hero.js"
import headline from './components/headline.js'
import slider from './components/slider.js'
import menu from './components/menu.js'
import footer from './components/footer.js'

const index = () => {
    return `

    ${navbar()}
    ${menu()}
    ${hero()}
    ${headline()}
    ${slider()}
    ${footer()}
    
    
    
    
    
    `


}


// EXport inex() agar bisa di gunakan di file js lainnya
export default index