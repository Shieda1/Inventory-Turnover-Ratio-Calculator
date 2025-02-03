const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const result = document.getElementById('result');

// radio buttons
const inventoryTurnoverRatioRadio = document.getElementById('inventoryTurnoverRatioRadio');
const costofGoodsSoldRadio = document.getElementById('costofGoodsSoldRadio');
const averageInventoryRadio = document.getElementById('averageInventoryRadio');

let inventoryTurnoverRatio;
let costofGoodsSold = v1;
let averageInventory = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

inventoryTurnoverRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Sold';
  variable2.textContent = 'Average Inventory';
  costofGoodsSold = v1;
  averageInventory = v2;
  result.textContent = '';
});

costofGoodsSoldRadio.addEventListener('click', function() {
  variable1.textContent = 'ITR';
  variable2.textContent = 'Average Inventory';
  inventoryTurnoverRatio = v1;
  averageInventory = v2;
  result.textContent = '';
});

averageInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'ITR';
  variable2.textContent = 'Cost of Goods Sold';
  inventoryTurnoverRatio = v1;
  costofGoodsSold = v2;
  result.textContent = '';
});

btn1.addEventListener('click', function() {
  
  if(inventoryTurnoverRatioRadio.checked) {
    if(isNaN(computeInventoryTurnoverRatio()))
      result.textContent = "wrong input";
    else
      result.textContent = `Inventory Turnover Ratio = ${computeInventoryTurnoverRatio().toFixed(4)}`;
  }

  else if(costofGoodsSoldRadio.checked) {
    if(isNaN(computeCostofGoodsSold()))
      result.textContent = "wrong input";
    else
      result.textContent = `Cost of Goods Sold = ${computeCostofGoodsSold().toFixed(4)}`;
  }
    
  else if(averageInventoryRadio.checked) {
    if(isNaN(computeAverageInventory()))
      result.textContent = "wrong input";
    else
      result.textContent = `Average Inventory = ${computeAverageInventory().toFixed(4)}`;
  }
})

btn2.addEventListener('click', function() {
  
  v1.value = '';
  v2.value = '';
  result.textContent = '';
})

// calculation

function computeInventoryTurnoverRatio() {
  return Number(costofGoodsSold.value) / Number(averageInventory.value);
}

function computeCostofGoodsSold() {
  return Number(inventoryTurnoverRatio.value) * Number(averageInventory.value);
}

function computeAverageInventory() {
  return Number(costofGoodsSold.value) / Number(inventoryTurnoverRatio.value);
}

// design

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// progress

var scroll = this.document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  scroll.classList.toggle('active', window.scrollY > 150)

  
})

scroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// end progress