function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" value="!" onclick="important(this.parentNode)" />' +  newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 

        /* Step 4 below here */ 
        input.value="";
        input.placeholder="enter next task";

    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
  
  
if (item.className == 'finished') {
    // remove item completely from document
   item.remove() = item.className;
  
}
}

/* Step 11 below here */
function doAbout() {
  var v = document.getElementById("divabout");
  v.innerHTML= "Autour is MO EL";
  v.className = "aboutcolor"

}

/* Step 14 below here */
function clearAbout() {
    var v = document.getElementById("divabout");

  v.innerHTML = '';
  
}
function important(item){
  item.className = "important"
}