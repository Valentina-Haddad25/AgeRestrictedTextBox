function checkAge() {
    let age = document.getElementById("input").value;
    let output = document.getElementById("output");

    if (isNaN(Number(age))) {
        output.innerHTML = "You didn't give me a number!";
        document.getElementById("main-output").style.visibility = "hidden";
    } else if (Number(age) < 0) {
        output.innerHTML = "You gave me a negative number, stop being silly";
        document.getElementById("main-output").style.visibility = "hidden";
    } else if (Number(age) % 1 !== 0) {
        output.innerHTML = "You gave me a decimal, you so and so";
        document.getElementById("main-output").style.visibility = "hidden";
    } else if (Number(age) >= 18 && Number(age) < 150) {
        output.innerHTML = "Welcome!";
        document.getElementById("main-output").style.visibility = "visible";
    } else {
        output.innerHTML = "You are not allowed to see the content";
        document.getElementById("main-output").style.visibility = "hidden";
    }
}

document.getElementById("main-output").style.visibility = "hidden"; // Initial hidden state

