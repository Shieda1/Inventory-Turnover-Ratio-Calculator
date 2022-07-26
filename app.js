// https://calculator.swiftutors.com/inventory-turnover-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
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
});

costofGoodsSoldRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory Turnover Ratio';
  variable2.textContent = 'Average Inventory';
  inventoryTurnoverRatio = v1;
  averageInventory = v2;
});

averageInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory Turnover Ratio';
  variable2.textContent = 'Cost of Goods Sold';
  inventoryTurnoverRatio = v1;
  costofGoodsSold = v2;
});

btn.addEventListener('click', function() {
  
  if(inventoryTurnoverRatioRadio.checked)
    result.textContent = `Inventory Turnover Ratio = ${computeInventoryTurnoverRatio().toFixed(2)}`;

  else if(costofGoodsSoldRadio.checked)
    result.textContent = `Cost of Goods Sold = ${computeCostofGoodsSold().toFixed(2)}`;

  else if(averageInventoryRadio.checked)
    result.textContent = `Average Inventory = ${computeAverageInventory().toFixed(2)}`;
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