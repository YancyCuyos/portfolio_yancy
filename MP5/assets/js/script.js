console.log('Before binding event');

let txtInput = document.querySelector('#txtInput');
let btnCheck = document.querySelector('#btnCheck');
let txtOutput = document.querySelector('#txtOutput');

btnCheck.addEventListener('click', function() {
    let email = txtInput.value;

    if(email.includes("@")) {
        let result = email.replace("@", ""); // remove @ for display
        txtOutput.innerText = `Valid ✅\nEmail without @: ${result}`;
        console.log(`Valid: ${result}`);
    } else {
        txtOutput.innerText = "Invalid ❌ (must contain @)";
        console.log("Invalid email");
    }
});
