//check viewport to set default state for the description
function viewCheck() {

    if (window.innerWidth <= 600) {
        console.log("mobileSize");
        hideDesc();
        return;
    } else {
        showDesc();
    }
}


// check whether to hide or show description based on current state
function showHideDesc() {
    console.log("showHideDesc() called");
    if (document.getElementById("itemDescription").style.display == "block") {
        hideDesc();
    } else {
        showDesc();
    }
}

//hide description
function hideDesc() {
    console.log("hideDesc() called");
    document.getElementById("itemDescription").style.display = "none";
    document.getElementById("descIcon").src = "./images/general/Plus.png";
}

//unfold description
function showDesc() {
    console.log("showDesc() called");
    document.getElementById("itemDescription").style.display = "block";
    document.getElementById("descIcon").src = "./images/general/Minus.png";
}

//increases quantity of item
function quanPlus() {
    console.log("quanPlus() called");
    document.getElementById("quantity").innerHTML = (parseInt(document.getElementById("quantity").innerHTML) + 1);
}

//decreases quantity of item
function quanMinus() {
    console.log("quanMinus() called");
    if (document.getElementById("quantity").innerHTML > 1) {
        document.getElementById("quantity").innerHTML = (parseInt(document.getElementById("quantity").innerHTML) - 1);
    }
}