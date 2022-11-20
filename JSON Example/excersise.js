function displayMessage() {
    console.log("Hello World");
  }
  
  displayMessage();

  function findSquare(num) {
    return num*num;
  }
  
  console.log(findSquare(2)) //4
  console.log(findSquare(9)) //81
  console.log(findSquare(15)) //225

  function calFahrenheit(cel) {
    return (cel*9/5)+32; //Conversion formula
  }
  
  console.log(calFahrenheit(0)) //32
  console.log(calFahrenheit(20)) //68
  console.log(calFahrenheit(40)) //104

  function rectangleArea(a,b) {
    return `The area of rectangle is ${a*b}`;
  }
  
  console.log(rectangleArea(10,20)) //The area of rectangle is 200
  console.log(rectangleArea(30,30)) //The area of rectangle is 900


  function compoundInt(principle, rate, time, n) {
    var interest = principle * (Math.pow((1 + (rate / n)), (n * time)));
    return principle + interest;
  }
  
  console.log(compoundInt(20000,5,2,2)) //3021250
  console.log(compoundInt(150000,25,1,2)) //27487500

  function getFactorial(num) {
    if(num==1){
      return 1; // Termination condition
    }
    if(num==0 || num<0){
      return 0; // Termination condition
    }
    return num*getFactorial(num-1);
  }
  
  console.log(getFactorial(5)) // 120
  console.log(getFactorial(12)) // 479001600