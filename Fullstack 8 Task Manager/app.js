let iconImportant = " fas fa-star ";
let iconNonImportant = "fas fa-exclamation";
let isImportant = false; 
let isVisible = true;


function saveTask() {
    console.log( `Saving...`);
}
function toggleImportant(){
    if(isImportant){
        $("#iImportant").removeClass(iconImportant);
        $("#iImportant").addClass(iconNonImportant);
        isImportant = false;
    } else {
    $("#iImportant").removeClass(iconNonImportant);
    $("#iImportant").addClass(iconImportant);
    isImportant = true;
    
}
}
function displayForm(){
    if(isVisible){
        $(".form").hide();
        isVisible = false;
    } else { $(".form").show();
        isVisible = true;
 }
    }

function init( ){
    console.log(`Task Manager`);

    //load data

    // hook events
    $("#btnSave").click(saveTask);
    $(".icon").click(toggleImportant);
    $("#hideForm").click(displayForm);

}

window.onload = init;

