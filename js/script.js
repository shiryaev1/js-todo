const TASK_INPUT = document.getElementById("new-task");
const ADD_BUTTON = document.querySelector("button");
const INCOMPLETE_TASKS_HOLDER = document.getElementById("incomplete-tasks");
const COMPLETED_TASKS_HOLDER = document.getElementById("completed-tasks");

let createNewTaskElement = (taskString) => {
	let listItem = document.createElement("li");

	let checkBox = document.createElement("input");
	let label = document.createElement("label");

	let deleteButton = document.createElement("button");
	let icon = document.createElement('i');

	checkBox.type = "checkbox";

	deleteButton.className = "btn";
	icon.className = 'fa fa-trash';
	deleteButton.append(icon);

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);

	return listItem;
};

let addTask = () => {
    if (TASK_INPUT.value) {
      let listItem = createNewTaskElement(TASK_INPUT.value);
      INCOMPLETE_TASKS_HOLDER.appendChild(listItem);
      bindTaskEvents(listItem, tasksCompleted);
    }

	TASK_INPUT.value = "";
};

let deleteTask = function() {
	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);
};

let tasksCompleted = function() {
	let listItem = this.parentNode;
	COMPLETED_TASKS_HOLDER.appendChild(listItem);
	bindTaskEvents(listItem, tasksIncomplete);
};

let tasksIncomplete = function() {
	let listItem = this.parentNode;
	INCOMPLETE_TASKS_HOLDER.appendChild(listItem);
	bindTaskEvents(listItem, tasksCompleted);
};

let bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let deleteButton = taskListItem.querySelector("button.btn");

	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
};

ADD_BUTTON.onclick = addTask;

TASK_INPUT.addEventListener("keydown", event =>{
	if (event.key === 'Enter' || event.keyCode === 13){
		addTask();
	}
});

for (let index = 0; index < INCOMPLETE_TASKS_HOLDER.children.length; index++) {
	bindTaskEvents(INCOMPLETE_TASKS_HOLDER.children[index], tasksCompleted);
}

for (let index = 0; index < INCOMPLETE_TASKS_HOLDER.children.length; index++) {
	bindTaskEvents(COMPLETED_TASKS_HOLDER.children[index], tasksIncomplete);
}
