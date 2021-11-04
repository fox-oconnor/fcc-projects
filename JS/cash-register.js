//freeCodeCamp - JavaScript Algorithms and Data Structures Certification

//Cash Register - Project Five 

function checkCashRegister(price, cash, cid) {
  //Create the register obj with status and change key/value pairs.
  const register = {
    status : "OPEN",        //Cash drawer status.
    change : [],            //Place holder for the change value to be returned
  }
  const regCash = cid
  let cashback = parseInt((cash - price).toFixed(2));
  let regTotal = 0;
  //Add the total amount of cash in the register.
  for(const money in regCash){
    parseInt(money); //Change the string money into an interger to be used as an index.
    regTotal += regCash[money][1];
  } 
  regTotal = parseInt(regTotal.toFixed(2)); // Round the decimal to two places.

  if(regTotal < cashback){
    register.status = "INSUFFICIENT_FUNDS"
  }else if(regTotal == cashback){
    register.status = "CLOSED";
    register.change = cid;
  };


function change(amountReturned){
// Seperate the returned dollar amount from the returned change, and create a 2D array to contain the values of dollars and cents.
    let bills = Math.floor(amountReturned);
    let cents = amountReturned - bills;
    let billAmt, centAmt;
    
    const billArr = [
        ["ONE HUNDRED", 100], 
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE" , 5],
        ["ONE", 1],
    ]
    const centArr =[
        ["QUARTER", .25],
        ["DIME", .10],
        ["NICKLE", .05],
        ["PENNY", .01]
    ]
    
    const regDrawer =[];
// Calculate the bills to be returned, if any.
    for(let i = 0; i < billArr.length; i++){
        let val = billArr[i][1];
            if (bills > val){
                billAmt = bills / val;
                    if(billAmt != 0){
                        register.change.push([billArr[i][0], billAmt * val]);
                    }bills = bills - billAmt;
            }
    }
    
// Calculate the change to be returned, if any.
   for(let i = 0; i < centArr.length; i++){
       let val = centArr[i][1];
        if (cents > val){
            let centAmt = cents / val;
            if(centAmt != 0){
                register.change.push([centArr[i][0], Number((centAmt * val).toFixed(2))]);
            }
        }cents = cents - centAmt;
   }
  } //End of func change()

if(register.status == "OPEN"){
  change(cashback);
}
  return register;
};

