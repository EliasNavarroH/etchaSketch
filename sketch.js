document.addEventListener("DOMContentLoaded", function(){
    sliderBoard();
    boardSize(8);
});


//function to create the grid to sketch based on the user input
function boardSize(size){ 
    let board = document.querySelector(".grid-container");
    board.style.gridTemplateColumns = `repeat( ${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//before creating the grid we need to clean the container
    while (board.firstChild) { 
        board.removeChild(board.firstChild);
    }
// a loop to add the grid size
    let sizeDivs =  size * size;
    for(let i = 0; i <= sizeDivs; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
        div.classList.add("div-grid");
    }

    buttons();
}

//function that change the divs color when se mouse hover
function changeColor (){
    let colorDivs = document.querySelectorAll(".div-grid");
    let isMouseDown = false;
    colorDivs.forEach(function (colorDiv) {
        colorDiv.addEventListener("mousedown", function(){
            event.preventDefault();
            isMouseDown = true;
        });
        colorDiv.addEventListener("mouseup", function(){
            isMouseDown = false;
        });
        colorDiv.addEventListener("mouseover", function (){
           if (isMouseDown){ 
           this.style.backgroundColor = "black";
           }
        });
    });
}

//function that change the divs with random colors
function rainbowColor(){
    let colorDivs = document.querySelectorAll(".div-grid");
    let isMouseDown = false;
    colorDivs.forEach(function (colorDiv) {
        colorDiv.addEventListener("mousedown", function(){
            event.preventDefault()
            isMouseDown = true;
        });
        colorDiv.addEventListener("mouseup", function(){
            isMouseDown = false;
        });
        colorDiv.addEventListener("mouseover", function (){
            if(isMouseDown){
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                this.style.backgroundColor = bgColor;
            }
        });
    });
}

//function that erase the divs
function eraseColor(){
   let colorDivs = document.querySelectorAll(".div-grid");
   let isMouseDown = false;
    colorDivs.forEach(function (colorDiv) {
        colorDiv.addEventListener("mousedown", function(){
            event.preventDefault()
            isMouseDown = true;
        });
        colorDiv.addEventListener("mouseup", function(){
            isMouseDown = false;
        });
        colorDiv.addEventListener("mouseover", function (){
           if (isMouseDown){ 
           this.style.backgroundColor = "white";
           }
        });
    });
}

//make the range slider change the px grid 
function sliderBoard (){
    let slider =  document.querySelector(".form-range");
    let rangeValue = document.querySelector(".rangeValue"); //this selects the span attribute to change the view in the HTML

    slider.addEventListener("input", function(){
        let size = parseInt(this.value);

        rangeValue.textContent = `${size}px x ${size}px` ;
        boardSize(size);
    });
}

//button action function
function buttons(){
    let blackButton = document.getElementById("black-button");
    blackButton.addEventListener("click", function(){
       changeColor();  
    });

    let rainbowButton = document.getElementById("rainbow-button");
    rainbowButton.addEventListener("click", function(){
        console.log("button pressed");
        rainbowColor();
    });

    let eraseButton =  document.getElementById("erase-button");
    eraseButton.addEventListener("click", function(){
        eraseColor();

    })
}

