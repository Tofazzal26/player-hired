

const addToCart = document.querySelectorAll('.add-btn');

for( let i = 0; i < addToCart.length; i++) {
    const element = addToCart[i];
    element.addEventListener('click', function(event) {
        const playerName = event.target.parentNode.childNodes[3].innerText;
        const price = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[7].childNodes[1].innerText;
        
        const selectedPlayer = document.getElementById('selected-players-container');
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = playerName;
        p2.innerText = price;
        p3.innerText = category;
        div.classList.add('selected-players');
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedPlayer.appendChild(div);

        totalCost(price);

    })
}




function totalCost(price) {
    const totalCost = valueConvert('total-cost');
    const playerValue = parseInt(price);
    document.getElementById('total-cost').innerText = totalCost + playerValue;
}


function valueConvert(id) {
    const element = document.getElementById(id).innerText;
    const convertedValue = parseInt(element);
    return convertedValue;
}


