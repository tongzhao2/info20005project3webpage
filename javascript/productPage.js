function viewCheck() {

    if (window.innerWidth <= 600) {
        console.log("mobileSize");
        hideDesc();
        return;
    } else {
        showDesc();
    }
}

function showHideDesc() {
    console.log("showHideDesc() called");
    if (document.getElementById("itemDescription").style.display == "block") {
        hideDesc();
    } else {
        showDesc();
    }
}

function hideDesc() {
    console.log("hideDesc() called");
    document.getElementById("itemDescription").style.display = "none";
    document.getElementById("descIcon").src = "./images/general/Plus.png";
}

function showDesc() {
    console.log("showDesc() called");
    document.getElementById("itemDescription").style.display = "block";
    document.getElementById("descIcon").src = "./images/general/Minus.png";
}

function quanPlus() {
    console.log("quanPlus() called");
    document.getElementById("quantity").innerHTML = (parseInt(document.getElementById("quantity").innerHTML) + 1);
}

function quanMinus() {
    console.log("quanMinus() called");
    if (document.getElementById("quantity").innerHTML > 1) {
        document.getElementById("quantity").innerHTML = (parseInt(document.getElementById("quantity").innerHTML) - 1);
    }
}