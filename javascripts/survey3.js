/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/



function checkCashRegister(price, cash, cid) {
    const value = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];
    function main(price, cash, cid) {
      let money = [
      ["ONE HUNDRED", 0], 
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0], 
      ["ONE", 0], 
      ["QUARTER", 0], 
      ["DIME", 0], 
      ["NICKEL", 0], 
      ["PENNY", 0],
    ];
    let changeNed = (cash - price) * 100;
    let ACash = [...cid].reverse().map(el => [el[0], el[1] * 100]);
    let sum = ACash.reduce((a, b) => (a + b[1]),0) / 100;

    if (sum === changeNed/ 100) {
      return {status: "CLOSED", change: [...cid]};
    } else for (let i = 0; i < ACash.length; i++) {
    while ((value[i] <= changeNed) && (ACash[i][1] > 0)) {

          money[i][1] += value[i];

          changeNed -= value[i];

          ACash[i][1] -= value[i];
        }
      };
      
      let change = money.map(el => [el[0], el[1] / 100]).filter(el => el[1] !== 0);
      if (change.reduce((a, b) => (a + b[1]),0) < changeNed) {
          return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change};
    }
    return main(price, cash, cid);;
  };