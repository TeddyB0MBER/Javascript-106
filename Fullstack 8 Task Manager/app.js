let iconImportant = " fas fa-star ";
let iconNonImportant = "fas fa-exclamation";
let isImportant = false; 
let isVisible = true;


function saveTask() {
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let priority = $("#selPriority").val();
    let date = $("#selDate").val();
    let color = $("#selColor").val();
    let contact = $("#txtContact").val();
    let participant = $("#txtParticipant").val();

    let task = new Task( isImportant, title, description, priority, date, color,contact, participant);
    // task.test();
    displayTask(task);
    clearForm(task);
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
function hideForm(){
    if(isVisible){
        $(".form").hide();
        isVisible = false;
    } else { $(".form").show();
        isVisible = true;
 }
    }
// ctrl + d will select the next similiar text so you can make mulitple changes at the same time
function displayTask(task){
    console.log(task);
    let syntax = `
    <div class="task">
                <h5>  Task Number: ${task.title} <h5>
            <p> Task Description: ${task.description} <p>
            <p> Priority Level: ${task.priority} <p>
            <p>  Date: ${task.date} <p>
            <p> Contact: ${task.contact} <p>
            <p> Number of Participants: ${task.participant} <p>
    <div>
    `;
    $("#task-list").append(syntax);
}

 function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selPriority").val("") 
    $("#selDate").val(""); 
    $("#selColor").val("#000000");
     $("#txtContact").val("");
     $("#txtParticipant").val("");
}
function init( ){
    console.log(`Task Manager`);

    //load data

    // hook events
    $("#btnSave").click(saveTask);
    $(".icon").click(toggleImportant);
    $("#hideForm").click(hideForm);

}

window.onload = init;

