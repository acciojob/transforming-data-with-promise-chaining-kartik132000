//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    let inputValue = parseFloat(document.getElementById("ip").value);
    let outputDiv = document.getElementById("output");
    
    if (isNaN(inputValue)) {
        outputDiv.innerHTML = "Please enter a valid number.";
        return;
    }
    
    outputDiv.innerHTML = ""; // Clear previous results
    
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num *= 2;
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num -= 3;
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num /= 2;
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num += 10;
            outputDiv.innerHTML = `Final Result: ${num}`;
            resolve(num);
        }, 1000);
    }));
});
