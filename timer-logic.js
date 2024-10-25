function validateNumeric(input) {
    // Allow only numbers by replacing non-numeric characters
    input.value = input.value.replace(/\D/g, '');
}

const canvas = document.getElementById("sandbox");
const ctx = canvas.getContext("2d");

//Snail Setup
const snailStart = document.getElementById("snailstart");
const snailDes = document.getElementById("snaildes");

window.addEventListener("load", (e) => {
    canvas.width = window.screen.availWidth * 0.50;
    canvas.height = window.screen.availHeight * 0.50;

    ctx.drawImage(snailStart, 100, 200, 100, 100);

    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.drawImage(snailDes, 600, 200, 100, 100);
    ctx.restore();
})


