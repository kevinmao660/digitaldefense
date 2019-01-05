function getCode() {
  var thing = document.getElementById("encryption").value;
  var shiftamount = document.getElementById("shift").value;
  var shift= parseInt(shiftamount,10);
  var code = thing.split("");
  var array = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/","_","+","{","}",":","<",">","?"]; 
  for(e=0;e<code.length;e++){
    for (i = 0; i < array.length ; i++) {
      if(code[e]===array[i]){
      code[e]=array[i+shift];
      i=300;
      }
    }
  }
    var stuff = code.length - 1;
    var goodCode = code.toString();
    for (j = 0; j < stuff; j++) {
      goodCode = goodCode.replace(",", "");
    }
    document.getElementById("encryption").value = goodCode;
}




function beggar() {
  var thing = document.getElementById("encryption").value;
  var shiftamount = document.getElementById("shift").value;
  var shift= parseInt(shiftamount,10);
  var code = thing.split("");
  var array = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/","_","+","{","}",":","<",">","?"]; 
  for(e=0;e<code.length;e++){
    for (i = 0; i < array.length ; i++) {
      if(code[e]===array[i]){
      code[e]=array[i-shift];
      i=300;
      }
    }
  }
    var stuff = code.length - 1;
    var goodCode = code.toString();
    for (j = 0; j < stuff; j++) {
      goodCode = goodCode.replace(",", "");
    }
    document.getElementById("encryption").value = goodCode;
}

function passCheck() {

  var userpass = document.getElementById("password").value;

  var lettercount = userpass.split("");

  var count = lettercount.length;

  var score = lettercount.length;

  score = parseInt(score);

  if (lettercount[0] != lettercount[1]) {
    score = score + 5;
  }

  if (lettercount[2] != lettercount [3]) {
    score = score + 5;
  }

  if (score < 20) {
    alert("Your Password isn't very Secure");
  }
  
  if(30>score>20){
    alert("Your Password is OK");
  }
  if(score>30){
    alert("Your password is Great");
  }
}

function generate() {
  var words = ["pink", "sheep", "chocolate", "jacket", "laptop", "sprite", "chair"];
  var numbers = ["134", "2345", "13", "45", "545", "6145", "7435", "843", "93", "3450"];
  var symbols = ["!", "@", "^", "$", "*"];

  var generatedpass = words[Math.floor(Math.random()*words.length)] + numbers[Math.floor(Math.random()*numbers.length)] + numbers[Math.floor(Math.random()*numbers.length)] + symbols[Math.floor(Math.random()*symbols.length)] + words[Math.floor(Math.random()*words.length)]+words[Math.floor(Math.random()*words.length)]+words[Math.floor(Math.random()*words.length)];

  alert(generatedpass);
}


