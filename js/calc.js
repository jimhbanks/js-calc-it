

// get number using "number" id
var number = document.getElementsByClassName("number");
// get operator using "operator" id
var operator = document.getElementsByClassName("operator")

// get by id ('eq' is this case), then use the eventlistener to reg 'click' 
var equals = document.getElementById('eq');
 equals.addEventListener('click', function(event){
console.log(this.value);
 });

// get by id ('clear' is this case), then use the eventlistener to reg 'click'.  Return value.  Added clear as id to html
var clear = document.getElementById('clear');
 clear.addEventListener('click', function(event){
console.log(this.value);
return this.value;
 });

// 
for(var i=0;i<number.length;i++){
number[i].addEventListener('click', function(event){
  console.log(this.value);
});
}

for(var j=0;j<operator.length;j++){
 operator[j].addEventListener('click', function(event){
 var oper = this.value;
 // console.log.(oper);
 return.this.value;
   console.log(this.value);
 return.oper
 }});
}

var addition function('num1', 'num1', 'operator')
    if (operator === '+') {
      var sum = num1 + num2;
}
console.log(sum);
debugger 


}   




































