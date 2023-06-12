const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance 
new Chart(chart, {
    type: 'line',
    data: {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov'],

        datasets: [ 
            {
            label: 'BTC',
            data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974,
                48847, 48116, 61004],
                borderColor: 'red',
                borderWidth : 2
        },
        
        {
            label: 'ETH',
            data: [31500, 41000, 88000, 26000, 46000, 32698, 5000, 3000,
                18656, 24832, 36844],
            borderColor: 'blue',
            borderWidth : 2
        }

        ]

    },
    options: {
        responsive:  true
    }

})




// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})



// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('i:first-child').classList.toggle('active');

    themeBtn.querySelector('i:last-child').classList.toggle('active');
})


// interest 
let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  let duration = document.getElementById("duration").value;
  let simpleInterest =
    duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
  let amount = p + simpleInterest;
  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);

// js for delayscreen 
function showDelayScreen() {
    var delayScreen = document.getElementById("delayScreen");
    delayScreen.classList.remove("hide");
    setTimeout(function() {
        delayScreen.classList.add("hide");
    }, 300);
}