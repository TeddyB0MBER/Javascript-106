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

    // save the task on the server
    // create a post request to: http://fsdiapi.azurewebsites.net/api/tasks/
    // request will not wait to complete 100% and will move on to complete other functions while it is in progress.
    $.ajax({
        type:"POST",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(task), // data is what your are sending, in this case, we are sending the object to the server
        contentType:"application/json", //your conversion type object to string JSON AND XML
        success:function(response){
            console.log(response);
            displayTask(task);
          clearForm(task);

        },
        error: function (error){
            console.log(error);
        }
    })

    // task.test();
    
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
    
    <div class="task" style="border-color:${task.color}">
                <p>  Task Number: ${task.title} <p>
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

function testGet() {
    $.ajax({
        type:"GET",
        url:"http://fsdiapi.azurewebsites.net/",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function fetchTasks(){
// load the tasks from the server and display

// send a get request to the server
$.ajax({
    type:"GET",
    url: "http://fsdiapi.azurewebsites.net/api/tasks",
    success:function(response){
        let list = JSON.parse(response);
            console.log(list);
            for ( let i = 0; i < list.length; i++){
            let task = list[i];
            if (task.developer === "Tuong"){
            displayTask(task);}
    } }, 
        error: function (error){
            console.log(error);},
            
});
}


function init( ){
    console.log(`Task Manager`);
    fetchTasks();
    //load data

    // hook events
    $("#btnSave").click(saveTask);
    $(".icon").click(toggleImportant);
    $("#hideForm").click(hideForm);

}

window.onload = init;

// methods : get (retreive data), post (to create new records in server) , put ( modify existing data), patch(modify existing data), delete(remove data) Http requests