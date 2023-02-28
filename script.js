const buttonClicked = (event) => {
    //When the button is clicked, something will happen
  const buttonText = event.target.innerHTML;
  const screen = document.getElementById("screen");
  if (screen.innerHTML === "0" || screen.innerhtml === "ERROR") {
    screen.innerHTML = buttonText;//If the screen shows a zero, let it get overwritten when a button is clicked.
    //Then the screen will show whatever number was clicked
  } else {
    screen.innerHTML = screen.innerHTML + buttonText;//Otherwise,  enter the number I want.
  }
};

const equalClicked = (event) =>{ //When the = button is clicked, do this:
    try {
    const input = document.getElementById("screen").innerHTML;//take what is on the screen
    const output = eval(input);//calculate to find the answer
        document.getElementById("screen").innerHTML = output
    } catch (error) {// If there is an error, display "ERROR"
        document.getElementById("screen").innerHTML = "ERROR";
    }
}
    const clearClicked = (event) => {//clear the screen and display "0".
        document.getElementById("screen").innerHTML = "0";//show the answer
    };

    document.addEventListener("keydown", (event) => {//when a user presses a key, run the code in this function. 
        const screen = document.getElementById("screen");
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        if (numbers.includes(event.key)) {
            if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
                screen.innerHTML = event.key;//if the screen displays "0" or "ERROR" then override the screen with whatever key gets pushed??
            } else {
                screen.innerHTML = screen.innerHTML + event.key;
            }
    }
});