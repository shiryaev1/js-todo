const taskInput = document.getElementById("new-task"); //new-task
const addButton = document.getElementsByTagName("button")[0]; //first button
const incompleteTasksHolder = document.getElementById("incomplete-tasks"); //ul #incomplete-tasks
const completedTasksHolder = document.getElementById("completed-tasks"); //ul #completed-tasks


let createNewTaskElement = (taskString) => {
	let listItem = document.createElement("li");

	let checkBox = document.createElement("input"); //checkbox
	let label = document.createElement("label");

	let deleteButton = document.createElement("button");

	checkBox.type = "checkbox";


	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);

	return listItem;
};

let addTask = function() {
    if (taskInput.value) {
      let listItem = createNewTaskElement(taskInput.value);
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, tasksCompleted);
    }

	taskInput.value = "";
};

let deleteTask = function() {

	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);
};



let tasksCompleted = function() {
	let listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, tasksIncomplete);
};

let tasksIncomplete = function() {
	let listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, tasksCompleted);
};

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let deleteButton = taskListItem.querySelector("button.delete");

	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
};


addButton.onclick = addTask;


for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], tasksCompleted);
}

for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], tasksIncomplete);
}
