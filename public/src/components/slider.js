import app from "../app.js"
import card from "./card.js"

const slider = () => {
    return `
    
        <section class="slider">
            <div class="cardcontainer">

            ${card('https://picsum.photos/seed/488/200', 'card1', 'ini adalah card pertama')}

            ${card('https://picsum.photos/seed/498/200', 'card2', 'ini adalah card kedua')}

            ${card('https://picsum.photos/seed/489/200', 'card3', 'ini adalah card ketiga')}

            ${card('https://picsum.photos/seed/490/200', 'card4', 'ini adalah card keempat')}

            ${card('https://picsum.photos/seed/491/200', 'card5', 'ini adalah card kelima')}

            ${card('https://picsum.photos/seed/492/200', 'card6', 'ini adalah card keenam')}
            
            
            
            </div>
        
        
        
        
        
        </section>
    
    
    `
}



export default slider