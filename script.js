function phoneInput(product, finalProduct, isIncrease){
    const count = document.getElementById(product + "Count").value;
    const countNumber = parseFloat(count);
    // const totalCount = countNumber - 1;
    let totalCount = countNumber;
    if(isIncrease == true){
        totalCount = countNumber + 1;
    };
    if(isIncrease == false && countNumber > 0){
        totalCount = countNumber -1
    };
    document.getElementById(product + "Count").value = totalCount;
    document.getElementById(finalProduct + "Count").innerText = totalCount;
    // const totalBalance = totalCount * 1219;

    let totalBalance = 0;
    if(product == "phone" && finalProduct == "finalPhone"){
        totalBalance = totalCount * 1219;
    };
    if(product == "case" && finalProduct == "finalCase"){
        totalBalance = totalCount * 59;
    };


    document.getElementById(product + "Total").innerText = totalBalance;
    document.getElementById(finalProduct + "Total").innerText = totalBalance;
    calculateShopping();
};

function calculateShopping(){
    const phoneCount = getInput("phone");
    const caseCount = getInput("case");
    const shoppingCart = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById("shoppingCart").innerText = shoppingCart;
    document.getElementById("subTotal").innerText = shoppingCart;

    const tax = Math.round(shoppingCart * 0.05);
    document.getElementById("tax").innerText = tax;
    document.getElementById("finalTax").innerText = tax;

    const grandTotal = shoppingCart + tax;
    document.getElementById("grandTotal").innerText = grandTotal;
    document.getElementById("finalTotal").innerText = grandTotal;

    if(grandTotal < 1){
        document.getElementById("checkOut").style.display = "none";
    }
};

function getInput(product){
    const count = document.getElementById(product + "Count").value;
    const countNumber = parseFloat(count);
    return countNumber;
};


document.getElementById("phoneRemove").addEventListener("click", function(){
    phoneInput("phone", "finalPhone", false);
    document.getElementById("firstRaw").style.display = "none";
})

document.getElementById("caseRemove").addEventListener("click", function(){
    phoneInput("case", "finalCase", false);
    document.getElementById("secondRaw").style.display = "none";
})



// Submit to Delivery Details==========================
const checkOut = document.getElementById("checkOut").addEventListener("click", function(){
    document.getElementById("delivery").style.display = "block";
    document.getElementById("itemInfo").style.display = "none";
})


// Delaivery Details to Order Confirm==================
const orderConfirmed = document.getElementById("orderConfirmed").addEventListener("click", function(){
    document.getElementById("delivery").style.display = "none";
    document.getElementById("confirm").style.display = "block";
})

// Final Success Status======================
const confirmed = document.getElementById("finalConfirm").addEventListener("click", function(){
    document.getElementById("confirm").style.display = "none";
    document.getElementById("finalStatus").style.display = "block";
})







function addDetails(id){
    if(id == "nameInfo"){
        const nameInfo = document.getElementById("nameInfo").value;
        document.getElementById("customerName").innerHTML = nameInfo;
        document.getElementById("customerFinalName").innerHTML = nameInfo;
    }

    if(id == "emailInfo"){
        const emailInfo = document.getElementById("emailInfo").value;
        document.getElementById("customerEmail").innerHTML = emailInfo;
    }

    if(id == "phoneNumberInfo"){
        const phoneNumberInfo = document.getElementById("phoneNumberInfo").value;
        document.getElementById("customerPhoneNumber").innerHTML = phoneNumberInfo;
    }

    if(id == "presentAddressInfo"){
        const presentAddressInfo = document.getElementById("presentAddressInfo").value;
        document.getElementById("customerDeliveryAddress").innerHTML = presentAddressInfo;
    }
}