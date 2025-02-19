"use strict";

const container = document.getElementById("container");
const getTotal = document.getElementById("total");
let total = 0;

const addBtn = document.querySelector("#add-btn");

for (let index = 0; index < addBtn.length; index++) {
    const element = addBtn[index];
    element.addEventListener('click', addAndDisplay);
}

function addAndDisplay(event) {
    const price = parseFloat(addBtn.price);
    getTotal.textContent = total += price;
}