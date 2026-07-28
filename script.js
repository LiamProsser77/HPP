function runLanScript() {

    let code = document.getElementById("code").value;

    let output = document.getElementById("output");


    // Find yes.put. text

    let putMatch = code.match(/yes\.put\.\s*"([^"]*)"/);


    if (putMatch) {

        output.innerHTML = putMatch[1];

    } 
    
    else {

        output.innerHTML =
        "No output found. Try using yes.put.";

    }

}
