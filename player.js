

const addToCart = document.querySelectorAll('.add-btn');

for( let i = 0; i < addToCart.length; i++) {
    const element = addToCart[i];
    element.addEventListener('click', function(event) {

        event.target.setAttribute('disabled', true);
        

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

        if( valueConvert('cart') + 1 > 6) {
            alert('You will be 6 player select');
            return;
        }
        event.target.parentNode.style.background = 'orange';

        const cart = valueConvert('cart');
        document.getElementById('cart').innerText = cart + 1;

        const left = valueConvert('left');
        document.getElementById('left').innerText = left - 1;


        
        totalCost(price);
        updateGrandTotal ();
        budgetValue(price);

    })
}

// function CartandLeft() {
//     let cart = valueConvert('cart');
//     cart = cart + 1
//     document.getElementById('cart').innerText = cart;
//     let left = valueConvert('left');

//     if( left > 0) {
//         left = left - 1
//         document.getElementById('left').innerText = left;
//         return;
//     }
// }


function budgetValue(price) {
    const priceCurrent = parseInt(price)
    const budget = valueConvert('budget');
    document.getElementById('budget').innerText =  budget - priceCurrent;
}


function totalCost(price) {
    const totalCost = valueConvert('total-cost');
    const playerValue = parseInt(price);
    document.getElementById('total-cost').innerText = totalCost + playerValue;
}


function updateGrandTotal (input) {
    if ( input == undefined) {
        const grandTotal = valueConvert('total-cost');
        document.getElementById('grand-total').innerText = grandTotal;
    } else {
        const couponCode = document.getElementById('coupon-code').value;
        if( couponCode == "love420") {
            const totalCost = valueConvert('total-cost');
            const discount = totalCost * .2;
            document.getElementById('grand-total').innerText = totalCost - discount;
            const couponInput = document.getElementById('input-section');
            couponInput.style.display = "none";
            
        } else if( couponCode == "") {
            alert('Please inter a valid coupon code')
        }
         else {
            alert('coupon code is not match !');
        }
    }
}


function valueConvert(id) {
    const element = document.getElementById(id).innerText;
    const convertedValue = parseInt(element);
    return convertedValue;
}


