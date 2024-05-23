
let QrImage = document.querySelector(".QrImage");
let btn = document.querySelector(".btn")
let qrText = document.querySelector(".qrText");
btn.addEventListener("click", function(){
    let result = qrText.value;
    QrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=www.facebook.com/" + qrText.value;
})

