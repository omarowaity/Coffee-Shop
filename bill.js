let items = document.querySelectorAll(".item");
let orders = document.querySelector(".orders");

let subtotal = document.querySelector('.subtotal');
let tax = document.querySelector('.tax');
let bill = document.querySelector('.bill');
let sum = 0;
let t = 0.1;
let total = 0;

for (let item of items) {
    let flavor = item.querySelector(".flavor");
    let price = item.querySelector(".price");
    let p = price.textContent;

    price.addEventListener('mouseover', function () {
        price.textContent = "Add to cart";
    })
    price.addEventListener('mouseout', function () {
        price.textContent = p;
    })

    price.addEventListener('click', function () {
        let order = document.createElement('li');
        order.classList.add('order');
        orders.appendChild(order);

        let quantity = document.createElement('div');
        quantity.classList.add('item-quantity');
        quantity.textContent = "1x";
        order.appendChild(quantity);

        let title = document.createElement('div');
        title.classList.add('item-title');
        title.textContent = flavor.textContent;
        order.appendChild(title);

        let pp = document.createElement('div');
        pp.classList.add('item-price');
        pp.textContent = p;
        order.appendChild(pp);

        sum += parseFloat(p);

        subtotal.textContent = "$" + sum;

        let tx = (t * sum).toFixed(3);
        tax.textContent = "$" + tx;

        total = (parseFloat(sum) + parseFloat(tx)).toFixed(3);
        bill.textContent = "$" + total;
    });
}