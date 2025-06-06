//prices
const PRICE_GM = 0.6;
const PRICE_SIC = 0.6;

//for goblin morningstar item
function quanMinusGM() {
    document.getElementById("quantityGM").innerHTML = (parseInt(document.getElementById("quantityGM").innerHTML) - 1);
    if (parseInt(document.getElementById("quantityGM").innerHTML) < 1) {
        deleteGM();
    }
    updatePrices();
}
function quanPlusGM() {
    document.getElementById("quantityGM").innerHTML = (parseInt(document.getElementById("quantityGM").innerHTML) + 1);
    updatePrices();
}

function deleteGM() {
    document.getElementById("quantityGM").innerHTML = "0";
    document.getElementById("goblinMorningstar").style.display = "none";
    updatePrices();
}

//for saw it coming item
function quanMinusSIC() {
    document.getElementById("quantitySIC").innerHTML = (parseInt(document.getElementById("quantitySIC").innerHTML) - 1);
    if (parseInt(document.getElementById("quantitySIC").innerHTML) < 1) {
        deleteSIC();
    }
    updatePrices();
}
function quanPlusSIC() {
    document.getElementById("quantitySIC").innerHTML = (parseInt(document.getElementById("quantitySIC").innerHTML) + 1);
    updatePrices();
}

function deleteSIC() {
    document.getElementById("quantitySIC").innerHTML = "0";
    document.getElementById("sawItComing").style.display = "none";
    updatePrices();
}

//calculate the prices of stacks of items
function updatePrices(){
    let quantityGM = parseInt(document.getElementById("quantityGM").innerHTML);
    let totalPriceGM = quantityGM * PRICE_GM;
    document.getElementById("priceGM").innerHTML = "$ " + totalPriceGM.toFixed(2);
    let quantitySIC = parseInt(document.getElementById("quantitySIC").innerHTML);
    let totalPriceSIC = quantitySIC * PRICE_SIC;
    document.getElementById("priceSIC").innerHTML = "$ " + totalPriceSIC.toFixed(2);

    updateSubtotal();
}

//calculate subtotal from all items
function updateSubtotal() {
    let subtotalPrice = 0;
    let totalPriceGM = parseFloat(document.getElementById("priceGM").innerHTML.slice(2));
    subtotalPrice += totalPriceGM;
    let totalPriceSIC = parseFloat(document.getElementById("priceSIC").innerHTML.slice(2));
    subtotalPrice += totalPriceSIC;
    document.getElementById("subtotalPrice").innerHTML = "$ " + subtotalPrice.toFixed(2);
}


