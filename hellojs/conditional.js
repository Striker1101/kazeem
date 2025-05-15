const A = 5;
const B = 10;

if (A > B) {
  //do this
  //true block
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

const shirtColor = "green";
//blue, white, green, red

if (shirtColor == "blue") {
  console.log("blue_kazeem");
} else if (shirtColor == "white") {
  console.log("white_kazeem");
} else if (shirtColor == "green") {
  console.log("green_kazeem");
} else if (shirtColor == "red") {
  console.log("red_kazeem");
} else {
  console.log("shirtless_kazeem");
}

//switch
switch (shirtColor) {
  case "blue":
    console.log("blue_kazeem");
    break;

  case "white":
    console.log("white_kazeem");
    break;

  case "green":
    console.log("green_kazeem");
    break;

  case "red":
    console.log("red_kazeem");
    break;

  default:
    console.log("shirtless_kazeem");
    break;
}

/**
 *
 * //if statement
 * if                     ()                  { }
 * conditional keyword     condition           statement
 *
 * //if-else statement (else to give default option)
 *
 *  else {}
 *        default statement
 * 
 * 
 * //if statement
 * if(){}
 * 
 * //if-else
 * if(){}else{}
 * 
 * //nested if
 * if(){}else if(){}else{}
 * 
 * 
 * //switch 
 * switch (key) {
    case value:
        
        break;

    default:
        break;
}

 */
