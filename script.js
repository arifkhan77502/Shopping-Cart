// For First Product
function phoneInput(product, isIncrease, finalProduct){
    var count = document.getElementById(product + "Count").value;
    var countNumber = parseFloat(count);
    var totalCount = countNumber;

    if(isIncrease == true){
        totalCount = countNumber + 1;
    }
    if(isIncrease == false && countNumber > 0){
        totalCount = countNumber - 1;
    }

    document.getElementById(product + "Count").value = totalCount;
    document.getElementById(finalProduct + "Count").innerText = totalCount;

    var totalBalance = 0;
    if(product == "phone" && finalProduct == "finalPhone"){
        totalBalance = totalCount * 1219;
    }
    if(product == "case" && finalProduct == "finalCase"){
        totalBalance = totalCount * 59;
    }

    document.getElementById(product + "Total").innerText = totalBalance;
    document.getElementById(finalProduct + "Total").innerText = totalBalance;

    var phoneCount = getInput("phone");
    var caseCount = getInput("case");

    var shoppingCart = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById("shoppingCart").innerText = shoppingCart;
    document.getElementById("subTotal").innerText = shoppingCart;

    var tax = (shoppingCart * 0.05);
    document.getElementById("tax").innerText = Math.round(tax);document.getElementById("finalTax").innerText = Math.round(tax);

    var total =  (shoppingCart) + tax;
    document.getElementById("total").innerText = Math.round(total);document.getElementById("grandTotal").innerText = Math.round(total);
}



function getInput(product){
    var count = document.getElementById(product + "Count").value;
    var countNumber = parseFloat(count);
    return countNumber;
}

function remove(product){
    var remove = document.getElementById(product + "Remove");
    remove.style.display = "none";
}

document.getElementById("checkOutButton").addEventListener("click", function(){
    var shopping = document.getElementById("shopping");
    var delivery = document.getElementById("delivery");

    shopping.style.display = "none";
    delivery.style.display = "block";
})

document.getElementById("submitButton").addEventListener("click", function(){
    var delivery = document.getElementById("delivery");
    var confirmation = document.getElementById("confirmation");

    delivery.style.display = "none";
    confirmation.style.display = "block";

    var nameInfo = document.getElementById("name").value;
    document.getElementById("customerName").innerText = nameInfo;
    document.getElementById("customerFinalName").innerText = nameInfo;

    var email = document.getElementById("email").value;
    document.getElementById("customerEmail").innerText = email;

    var phoneNumber = document.getElementById("phoneNumber").value;
    document.getElementById("contactNumber").innerText = phoneNumber;

    var address = document.getElementById("address").value;
    document.getElementById("deliveryAddress").innerText = address;
})

document.getElementById("confirmation").addEventListener("click", function(){
    var confirmation = document.getElementById("confirmation");
    var finalStatus = document.getElementById("finalStatus");

    confirmation.style.display = "none";
    finalStatus.style.display = "block";
})
















