const zero= document.getElementById("zero");
const one= document.getElementById("one");
const two= document.getElementById("two");
const three= document.getElementById("three");
const four= document.getElementById("four");
const five = document.getElementById("five");
const six= document.getElementById("six");
const seven= document.getElementById("seven");
const eight= document.getElementById("eight");
const nine= document.getElementById("nine");
const plus= document.getElementById("plus");
const sub= document.getElementById("minus");
const mul= document.getElementById("product");
const divide= document.getElementById("divide");
const equal= document.getElementById("eql");
const ans= document.getElementById("display")

var num1="";
var num2="";
var operator="";
var result="";

zero.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"0";
    }
    else{
        num2=num2+"0";
    }
    ans.value= num1+operator+num2;
});
one.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"1";
    }
    else{
        num2=num2+"1";
    }
    ans.value= num1+operator+num2;

});
two.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"2";
    }
    else{
        num2=num2+"2";
    }
    ans.value= num1+operator+num2;

});
three.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"3";
    }
    else{
        num2=num2+"3";
    }
    ans.value= num1+operator+num2;

});
four.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"4";
    }
    else{
        num2=num2+"4";
    }
    ans.value= num1+operator+num2;
});
five.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"5";
    }
    else{
        num2=num2+"5";
    }
    ans.value= num1+operator+num2;
});
six.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"6";
    }
    else{
        num2=num2+"6";
    }
    ans.value= num1+operator+num2;
});
seven.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"7";
    }
    else{
        num2=num2+"7";
    }
    ans.value= num1+operator+num2;
});
eight.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"8";
    }
    else{
        num2=num2+"8";
    }
    ans.value= num1+operator+num2;
});
nine.addEventListener('click', function(){
    if (operator == ""){
    num1=num1+"9";
    }
    else{
        num2=num2+"9";
    }
    ans.value= num1+operator+num2;
});
