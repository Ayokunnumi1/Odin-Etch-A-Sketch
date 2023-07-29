const divContainer = document.querySelector('.div-container');
const firstSmallDiv = document.querySelector('.first-small-div');


for (let i = 0; i < 315; i++) {
    const firstSmallDiv = document.createElement('div');
    firstSmallDiv.setAttribute('class', 'first-small-div');
    divContainer.appendChild(firstSmallDiv);
    // console.log(i)
    firstSmallDiv.addEventListener('mouseenter', () => {
        firstSmallDiv.style.backgroundColor = 'black';        
    });
    
    firstSmallDiv.addEventListener('mouseleave', () => {
        firstSmallDiv.style.backgroundColor = ' ';
    });
}




