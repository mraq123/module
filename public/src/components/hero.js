import app from "../app.js"

const hero = () => {
    return `
    <section class="hero" style="
    width : 100vw;
    height : 80vh;
    display : flex;
    justify-content : space-between;
    align-items : center;
    background-image : url(https://picsum.photos/seed/${hero.state.imgNo}/900);
    background-size : cover;
    padding : 0 10%;
    font-family: 'Staatliches', cursive;
    border : 3px solid black;
    ">
    

    <span class="material-icons" style="
    font-size : 4rem;
    cursor : grabbing;
    color : white;

    " onclick ="prev()">
    arrow_back_ios  
    </span>

    <div>
        <h1 onclick="showModal()">${hero.state.text}</h1>
        ${hero.state.showModal === true ? (
            "<input placeholder='masukan judul' onchange='ubahtext(event)'/>"
        ) : ''}

    </div >

    <span class="material-icons" style="
    font-size : 4rem;
    cursor : grabbing;
    color : white;
    " onclick="next()">
        arrow_forward_ios
    </span>

    
    
    
    </section >


    `
}

hero.state = {
    text: "EMAK NYAMBEL?",
    settext: (event) => {
        hero.state.text = event
        app()
    },

    imgNo: 120,
    imgprev: () => {
        hero.state.imgNo -= 1
        app()
    },
    imgnext: () => {
        hero.state.imgNo += 1
        app()
    },
    showModal: false,
    setShowModal: () => {
        hero.state.showModal = !hero.state.showModal
        app()
    }
}




window.prev = () => {
    hero.state.imgprev()
    console.log(hero.state.imgNo)
}

window.next = () => {
    hero.state.imgnext()
}

window.showModal = () => {
    hero.state.setShowModal()
    console.log(hero.state.showModal)
}

window.ubahtext = (event) => {
    hero.state.settext(event.target.value)
}





export default hero