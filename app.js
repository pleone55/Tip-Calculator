function calculateTip() {
    var billAmount = document.getElementById("bill-amount").value;
    var serviceQuality = document.getElementById("service-quality").value;
    var peopleAmount = document.getElementById("people-amount").value;

    if(billAmount === "" || serviceQuality === 0) {
        alert("Please fill out the proper bill amount and select the quality service you received")
    }

    if(peopleAmount === "" || peopleAmount <= 1) {
        peopleAmount = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculate the tip
    var total = (billAmount * serviceQuality) / peopleAmount;

    //round to two decimal places
    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("total").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};

//hide tip amount on load
document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

//onClick call
document.getElementById("calculate").onclick = 
function() {
    calculateTip();
};