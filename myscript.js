var changeButton = document.getElementById("change");

function checkCashRegister(price, cash, cid) {
  var difference = (cash-price)*100; 
  var value = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var cid2 = {
    status: "OPEN",
    change: []
  };
  var cmpArr = [];
  var cmpArr2 = [].concat(cid).reverse();
  var cid3 = [].concat(cmpArr2);

  var diff = [];
  function newDifference(d) {
    if (!(diff.length == 0))  diff = [];
    for (var i = 0; i<9; i++) {
      diff.push(Math.floor(d/value[i]));
    }
  }

  newDifference(difference);

  var money = [];
  for (var i = 0; i<9; i++) {
    money.push(Math.round(cid[i][1]*100/value[i]));
  }

  function registerEmpty() {
    for(var i=0; i<8; i++) {
      if (cmpArr[i][1]!=cmpArr2[i][1]) return false;
    }
    return true;
  }

  if (diff[8]!=0) {
    if(diff[8]<=money[8]) {
      cid2.change.push(["ONE HUNDRED", diff[8]*100]);
      difference-=(value[8]*diff[8]);
      cmpArr.push(["ONE HUNDRED", diff[8]*100]);
    }
    else {
      cid2.change.push(["ONE HUNDRED", money[8]*100]);
      difference-=(value[8]*money[8]);
      cmpArr.push(["ONE HUNDRED", money[8]*100]);
    }
    if(difference!=0) newDifference(difference);
    else {
      cmpArr = cmpArr.concat(cid3.slice(1));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }  
  }
  else cmpArr.push(["ONE HUNDRED", 0]);

 if (diff[7]!=0) {
    if (diff[7]<=money[7]) {
      cid2.change.push(["TWENTY", diff[7]*20]);
      difference-=(value[7]*diff[7]);
      cmpArr.push(["TWENTY", diff[7]*20]);
    }
    else {
      cid2.change.push(["TWENTY", money[7]*20]);
      difference-=(value[7]*money[7]);
      cmpArr.push(["TWENTY", money[7]*20]);
    }
    if(difference!=0) newDifference(difference);
    else {
      cmpArr = cmpArr.concat(cid3.slice(2));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }  
  }
  else cmpArr.push(["TWENTY", 0]);
 
 if (diff[6]!=0) {
    if(diff[6]<=money[6]) {
      cid2.change.push(["TEN", diff[6]*10]);
      difference-=(value[6]*diff[6]);
      cmpArr.push(["TEN", diff[6]*20]);
    }
    else {
      cid2.change.push(["TEN", money[6]*10]);
      difference-=(value[6]*money[6]);
      cmpArr.push(["TEN", money[6]*20]);
    }
    if(difference!=0) newDifference(difference);
    else {
      cmpArr = cmpArr.concat(cid3.slice(3));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }  
  }
  else cmpArr.push(["TEN", 0]);

  if (diff[5]!=0) {
    if(diff[5]<=money[5]) {
      cid2.change.push(["FIVE", diff[5]*5]);
      difference-=(value[5]*diff[5]);
      cmpArr.push(["FIVE", diff[5]*5]);
    }
    else {
      cid2.change.push(["FIVE", money[5]*5]);
      difference-=(value[5]*money[5]);
      cmpArr.push(["FIVE", money[5]*5]);
    }
    if(difference!=0) newDifference(difference);
    else {
      cmpArr = cmpArr.concat(cid3.slice(4));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }  
  }
  else cmpArr.push(["FIVE", 0]);

  if (diff[4]!=0) {
    if(diff[4]<=money[4]) {
      cid2.change.push(["ONE", diff[4]]);
      difference-=(value[4]*diff[4]);
      cmpArr.push(["ONE", diff[4]]);
    }
    else {
      cid2.change.push(["ONE", money[4]]);
      difference-=(value[4]*money[4]);
      cmpArr.push(["ONE", money[4]]);
    }
    if(difference!=0) newDifference(difference);
    else {
      cmpArr = cmpArr.concat(cid3.slice(5));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }  
  }
  else cmpArr.push(["ONE", 0]);

  if (diff[3]!=0) {
    if(diff[3]<=money[3]) {
      cid2.change.push(["QUARTER", diff[3]*0.25]);
      difference-=(value[3]*diff[3]);
      cmpArr.push(["QUARTER", diff[3]]);
    }
    else {
      cid2.change.push(["QUARTER", money[3]*0.25]);
      difference-=(value[3]*money[3]);
      cmpArr.push(["QUARTER", money[3]]);
    }
    if(difference!=0) newDifference(difference);
    else {  
      cmpArr = cmpArr.concat(cid3.slice(6));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }   
  }
  else cmpArr.push(["QUARTER", 0]);

  if (diff[2]!=0) {
    if(diff[2]<=money[2]){
      cid2.change.push(["DIME", diff[2]*0.1]);
      difference-=(value[2]*diff[2]);
      cmpArr.push(["DIME", diff[2]*0.1]);
    }
    else {
      cid2.change.push(["DIME", money[2]*0.1]);
      difference-=(value[2]*money[2]);
      cmpArr.push(["DIME", money[2]*0.1]);
    }  
    if(difference!=0) newDifference(difference);
    else {
      cmpArr = cmpArr.concat(cid3.slice(7));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }    
  }
  else cmpArr.push(["DIME", 0]);  
  
  if (diff[1]!=0) {
    if(diff[1]<=money[1]){
    cid2.change.push(["NICKEL", diff[1]*0.05]);
    difference-=(value[1]*diff[1]);
    cmpArr.push(["NICKEL", diff[1]*0.05]);
    }
    else {
      cid2.change.push(["NICKEL", money[1]*0.05]);
      difference-=(value[1]*money[1]);
    cmpArr.push(["NICKEL", money[1]*0.05]);
    } 
    if(difference!=0) newDifference(difference);
    else {
    cmpArr = cmpArr.concat(cid3.slice(8));
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2; 
    }  
  }  
  else cmpArr.push(["NICKEL", 0]);
  
  if (diff[0]!=0 && diff[0]<=money[0]) {
    cid2.change.push(["PENNY", diff[0]*0.01]);
    difference-=(value[0]*diff[0]);
    if(difference==0) {
    cmpArr.push(["PENNY", diff[0]*0.01]);
      if (registerEmpty()) {
        cid2.status = "CLOSED";
        cid2.change = cid;
      }
      return cid2;   
    }
  }
  else cmpArr.push(["PENNY", 0]);
  
  cid2.status = "INSUFFICIENT_FUNDS";
  cid2.change = [];
  return cid2;
}


changeButton.addEventListener("click", function() {
  var number = document.getElementById("text").value;
  var properties = number.split(', ');
  var arr = JSON.parse(properties.slice(2, properties.length).toString(' '));
  var c = checkCashRegister(parseFloat(properties[0]), parseFloat(properties[1]), arr);
  document.getElementById('return-change').innerHTML = JSON.stringify(c);
});

