function resetForm(){
    document.getElementById("myForm").reset();
}

function submitForm(){
    const form = document.getElementById("myForm");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    //Get form Values
    const values = [];
    const formData = new FormData(form);
    for (const[key,value] of formData.entries()){
        values.push(`${key}: ${value}`);
    }

    //dispay values in alert!
    alert("Entered Values:\n" + values.join("\n"));

    /*popupContent.innerHTML = values.map(value => `<li>${value}</li>`).join("");
    popup.style.display = "block";*/

    //Reset the form
    form.reset();
    // Prevent form Submission
    return false;
}
