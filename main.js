// Add item
function increment(incDec, prc, itm) {
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_amount = document.getElementById("pr_amount").innerHTML;
    var charge = document.getElementById("charge").innerHTML;
    var total_amount = document.getElementById("total_amount").innerHTML;
    if(count.value>=5) {
        count.value = 5;
        alert("Maximum 5 item allowed!");
    }
    else {
        count.value++;
        var result = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = result;

        // For product amount
        var total_product = parseInt(price.innerHTML) + parseInt(pr_amount);
        document.getElementById("pr_amount").innerHTML = total_product;

        // Total amount w/ $25 charge
        var finalAmount = total_product + parseInt(charge);

        document.getElementById("total_amount").innerHTML = finalAmount;

        var coupon_div = document.getElementById("coupon_div");
        coupon_div.style.display = "none";

        if(finalAmount >= 200) {
            coupon_div.style.display = "block";
        }
    }
}

// Remove item
function decrement(incDec, prc, itm) {
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_amount = document.getElementById("pr_amount").innerHTML;
    var charge = document.getElementById("charge").innerHTML;
    var total_amount = document.getElementById("total_amount").innerHTML;
    if(count.value<=0){
        count.value = 0;
        alert("Cart empty!");
    }
    else {
        count.value--;
        var result = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = result;

        // For product amount
        var total_product = parseInt(pr_amount) - parseInt(price.innerHTML);
        document.getElementById("pr_amount").innerHTML = total_product;

        // For total amount
        var finalAmount = total_product + parseInt(charge);

        document.getElementById("total_amount").innerHTML = finalAmount;

    }
}

var coupon_div = document.getElementById("coupon_div");
coupon_div.style.display = "none";

var applyBtn = document.getElementById("applyBtn");
applyBtn.addEventListener('click', function(){
    var couponInput = document.getElementById("couponInput");
    var total_amount = document.getElementById("total_amount").innerHTML;
    if(couponInput.value == 'LA_MIA') {
        var total = parseInt(total_amount) - 50;
        document.getElementById("total_amount").innerHTML = total;
        alert("Congrats! Coupon applied.");
        coupon_div.style.display = "none";
    }
    else {
        alert("Invalid coupon code!");
    }
});