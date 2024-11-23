class Ornament {
    constructor(imageSrc) {
        this.imageSrc = imageSrc;

        this.initX = 5;
        this.initY = 5;
        this.firstX = 5;
        this.firstY = 5;

        this.initHeight = 100;

        this.boundaryLeft;
        this.boundaryRight;

        this.instantiate();
    }

    dragIt = (e) => {
        e.currentTarget.parentNode.style.left = this.initX + e.pageX - this.firstX + 'px';
        e.currentTarget.parentNode.style.top = this.initY + e.pageY - this.firstY + 'px';
    }

    hideResize = (e) => {
        e.currentTarget.querySelector(".resize").style = "display: none";
    }

    resizeLogic = (e) => {
        e.currentTarget.parentNode.style.height = this.initHeight + e.pageY - this.firstY + 'px';
        e.currentTarget.parentNode.style.width = e.currentTarget.parentNode.style.height;
    }
 
    instantiate() {

        var ornament = this; //keep a reference to the class instance on hand to deal with confusing 'this' scope stuff

        var ornamentHTML = document.createElement("div");
        ornamentHTML.classList.add("ornament");

        var imageHTML = document.createElement("img");
        imageHTML.src = ornament.imageSrc;

        var resizeHTML = document.createElement("div");
        resizeHTML.classList.add("resize");

        ornamentHTML.appendChild(resizeHTML);

        ornamentHTML.appendChild(imageHTML);

        document.querySelector("#sandbox").appendChild(ornamentHTML);

        /* -------- DRAGGABLE ---------*/
        imageHTML.addEventListener('mousedown', (e) => {
            e.preventDefault();

            ornament.initX = ornamentHTML.offsetLeft;
            ornament.initY = ornamentHTML.offsetTop;
            ornament.firstX = e.pageX;
            ornament.firstY = e.pageY;
    
            imageHTML.addEventListener('mousemove', this.dragIt, false);

            window.addEventListener('mouseup', () => {
                imageHTML.removeEventListener('mousemove', this.dragIt, false);
            }, { once: true } );


        }, false);

        /* -------- RESIZEABLE ---------*/
        ornamentHTML.addEventListener('mouseover', (e) => {
            e.preventDefault();

            //console.log(resizeHTML);
            resizeHTML.style = "display: block";

            resizeHTML.addEventListener('mousedown', (e) => {

                ornament.initHeight = parseInt(window.getComputedStyle(e.currentTarget.parentNode).height.substring(0, window.getComputedStyle(e.currentTarget.parentNode).height.length - 2));

                ornament.initX = ornamentHTML.offsetLeft;
                ornament.initY = ornamentHTML.offsetTop;
                ornament.firstX = e.pageX;
                ornament.firstY = e.pageY;

                resizeHTML.addEventListener('mousemove', this.resizeLogic, false)           

                resizeHTML.addEventListener('mouseup', () => {
                    resizeHTML.removeEventListener('mousemove', this.resizeLogic, false)
                }, false);
            }, false); 
        })
    }
}



function validateNumeric(input) {
    // Allow only numbers by replacing non-numeric characters
    input.value = input.value.replace(/\D/g, '');
}

const canvas = document.getElementById("sandbox");

//Snail Setup
const snailStart = document.getElementById("snailstart");
const snailDes = document.getElementById("snaildes");

window.addEventListener("load", (e) => {
    test = new Ornament("house.png");
})


