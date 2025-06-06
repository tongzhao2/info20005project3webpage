function filterShow(){
    
    console.log("filterShow() called");
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("filterButton").style.display = "none";
}

function filterHide(){
    console.log("filterHide() called");
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("filterButton").style.display = "flex";
}

//resets filter to always show when in desktop view
function filterCheck(){
    if (window.innerWidth <= 600){
        console.log("mobileSize");
        filterHide();
        return;
    } else{
        filterShow();
    }
}
