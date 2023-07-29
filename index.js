const divContainer = document.querySelector('.div-container');



for (let i = 0; i < 204; i++) {
    const firstSmallDiv = document.createElement('div');
    firstSmallDiv.setAttribute('class', 'first-small-div');
    divContainer.appendChild(firstSmallDiv);
    console.log(i)
}
// firstSmallDiv.textContent = 'HII'
