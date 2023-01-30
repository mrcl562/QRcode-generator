let imgContainer = document.querySelector(".imgContainer");
let qrImage = document.querySelector(".qrImage");
let qrText = document.querySelector(".qrText");

document.addEventListener("keypress", (ev)=>{
    ev.key === "Enter" ? generateQR() : false;
})

const generateQR = () =>{
    if(qrText.value.length > 0){
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgContainer.classList.add("showImg");
    }else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000)
    }
}