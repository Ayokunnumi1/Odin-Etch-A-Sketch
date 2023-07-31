const divContainer = document.querySelector('.div-container');
const clickMe = document.querySelector('.click-me');
const modalOverlay = document.querySelector('.modal-overlay');
const submitButton = document.querySelector('#submit-button');
const inputSquares = document.querySelector('#input-squares');
const modalParagraph = document.querySelector('.modal-paragraph');
const eraser = document.querySelector('.Eraser');
const colors = document.querySelector('.Color');
const divContainerId = document.querySelector('#divContainerId');

function mouseEnter(smallDiv) {
    smallDiv.style.backgroundColor = 'black';        
};

function mouseLeave(smallDiv) {
    smallDiv.style.backgroundColor = ' ';
};
    
    
for (let i = 0; i < 500; i++) {
    const smallDiv = document.createElement('div');
    smallDiv.setAttribute('class', 'small-div');
    divContainer.appendChild(smallDiv);
    // console.log(i)
    smallDiv.addEventListener('mouseenter', () => mouseEnter(smallDiv));
    smallDiv.addEventListener('mouseleave', () => mouseLeave(smallDiv));  
}

clickMe.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});


// submitButton.addEventListener('click', () => {
//     divContainer.innerHTML = '';
//     firstSmallDiv.style.display = '';
//     let userInput = parseInt(inputSquares.value);
//     for (let i = 0; i < userInput; i++) {
//         if (userInput >= 16 && userInput <= 64) {
//             const userInputSquare = document.createElement('div');
//             userInputSquare.setAttribute('class', 'user-input-square');
//             divContainer.appendChild(userInputSquare);
//             userInputSquare.style.width = userInput + 'px';
//             userInputSquare.style.height = userInput + 'px';
//             userInputSquare.style.border = '3px solid red';
//             modalOverlay.style.display = 'none';
//         }


//         else {
//         modalParagraph.textContent = 'WRONG MOVE';
//         modalParagraph.style.color = 'red';
//     }

//     }
    

// });

submitButton.addEventListener('click', () => {
    let userInput = parseInt(inputSquares.value);
    const smallDiv = document.querySelectorAll('.small-div');
    const smallDivArray = Array.from(smallDiv);
    if (userInput >= 16 && userInput <= 64) {
        // divContainer.style.width = '250' + 'px';
        // divContainer.style.height = '150' + 'px';
        smallDivArray.forEach((smallDivArr) => {
            smallDivArr.style.width = userInput + 'px';
            smallDivArr.style.height = userInput + 'px';
        });
        modalOverlay.style.display = 'none';
    }
    else {
        modalParagraph.textContent = 'WRONG MOVE';
        modalParagraph.style.color = 'red';
    }
});

eraser.addEventListener('click', () => {
    const smallDiv = document.querySelectorAll('.small-div');
    const smallDivArray = Array.from(smallDiv);
    smallDivArray.forEach((smallDivArr) => {
    // smallDivArr.removeEventListener('mouseenter', () => mouseEnter(smallDiv));
    // smallDivArr.removeEventListener('mouseleave', () => mouseLeave (smallDiv));
        smallDivArr.style.backgroundColor = '';
    });
});

colors.addEventListener('click', () => {
    divContainerId.classList.add('.Color-me');
});





