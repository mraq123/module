// import syntax dari file js lain
import index from "./index.js"



// ini function render harus di jalankan kalo engga di jalanin kaga bisa
const app = () => {
    document.getElementById("root").innerHTML = index()
}
//  dibawah ini buat yang menjalankan function (RENDER)
app()

// export app() agar bisa digunakan di file js lainnya
export default app 