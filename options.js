// Select DOM element
const limitInput = document.getElementById("limit");
const saveBtn = document.getElementById("save-limit");

// Event listener for the save button
if (isNaN(localStorage.getItem("limit"))){
    localStorage.setItem("limit", "200");
}

saveBtn.onclick = () => {
    let limit = parseFloat(limitInput.value);
    if (isNaN(limit)){
        alert("Please Enter a valid number");
    }
    else{
        localStorage.setItem("limit", limit);
    }
    closeWindow();
}
updateLimitInput(parseFloat(localStorage.getItem("limit")));
// helper functions
function updateLimitInput(value){
    limitInput.textContent = value.toFixed(2);
}
function closeWindow(){
    if (confirm("Close window?")){
        window.close();
    }
}