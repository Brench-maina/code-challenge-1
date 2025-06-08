function estimateTransactionFee(amountToSend){
    
    let fee = amountToSend * 0.015;

    if(fee < 10){
        fee = 10; // minimum fee is KES 10
     }
      else if (fee > 70){
        fee = 70; // maximum fee is KES 70
        }
        // total fee
    const totalAmount = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log(`\nSend Money Securely!`);
}
// prompt the user
const input = prompt("Unatuma Ngapi?(KES)");
const amountToSend = parseFloat(input);

// validate the input
if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali ingiza kiasi halali cha pesa.");
}
else {
    estimateTransactionFee(amountToSend);
}