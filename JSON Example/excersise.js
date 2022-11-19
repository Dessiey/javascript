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
  