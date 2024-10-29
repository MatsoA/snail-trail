class Ornament {
    constructor(imageSrc) {
        this.imageSrc = imageSrc;

        this.initX = 5;
        this.initY = 5;
        this.firstX = 5;
        this.firstY = 5;

        this.boundaryLeft;
        this.boundaryRight;

        this.instantiate();
    }

    // dragIt(ornament) {
    //     return function dragItCurry(e) {
    //         e.currentTarget.style.left = ornament.initX + e.pageX - ornament.firstX + 'px';
	//         e.currentTarget.style.top = ornament.initY + e.pageY - ornament.firstY + 'px';
    //     }
    // }

    dragIt(e) {
        e.currentTarget.style.left = this.initX + e.pageX - this.firstX + 'px';
        e.currentTarget.style.top = this.initY + e.pageY - this.firstY + 'px';
    }


    instantiate() {

        var ornament = this; //keep a reference to the class instance on hand to deal with confusing 'this' scope stuff

        var imageHTML = document.createElement("img");
        imageHTML.src = ornament.imageSrc;
        imageHTML.classList.add("ornament");

        var boundDragIt = ornament.dragIt.bind(ornament); //so that we can access the class coordinate vars

        document.querySelector("#sandbox").appendChild(imageHTML);

        imageHTML.addEventListener('mousedown', (e) => {
            e.preventDefault();

            ornament.initX = imageHTML.offsetLeft;
            ornament.initY = imageHTML.offsetTop;
            ornament.firstX = e.pageX;
            ornament.firstY = e.pageY;
    
            imageHTML.addEventListener('mousemove', boundDragIt, false);

            window.addEventListener('mouseup', () => {
                imageHTML.removeEventListener('mousemove', boundDragIt, false);
            }, { once: true } );


        }, false);
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


