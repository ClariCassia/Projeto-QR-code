const input = document.querySelector('.input')
const btnGenerator  = document.getElementById('btn-generator')
const qrCodeImg = document.getElementsByTagName('img')[0]
const errorInput = document.querySelector('.error-input')

btnGenerator .addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value
    if (validateInputFields(inputValue)) return
    geradorQrCode(inputValue)
})

input.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    const key = e.which || e.keyCode;
    const btnPressionado = key === 13;
    if (btnPressionado) {
        if (validateInputFields(inputValue)) return
        geradorQrCode(inputValue)
    }
});

let geradorQrCode = (inputValue) => {

    btnGenerator .innerHTML = `Gerando código ⏳...`

    setTimeout(() => {
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        btnGenerator .innerHTML = `Código gerado 👌 `
    }, 1500)
}

let validateInputFields = (inputValue) => {
    if (inputValue === '') {
        errorInput.classList.add('error-visibility')
        return true
    } else {
        errorInput.classList.remove('error-visibility')
    }
}