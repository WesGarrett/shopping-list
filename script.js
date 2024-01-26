// 1) declare const for itemForm, itemInput, and itemList and add event listsener to the itemForm for submit. It will run the addItem function.
// 2) Create a funtion called addItem with a event object. call prevent default. Add validation for the itemInput using and if statment and an alert.
// 3) Create the list item 'listItem' by declaring a const li and using createElement and then creating a textnode
// 4) Create a new funtion called createButton that takes in classes. Inside the function create the button element, set the class of the button to "classes", then return the button.
// 5) Create a new funtion called createIcon that takes in classes. Inside the function create the icon element using an 'i' tag, set the classname to "classes", the return the icon. Then create a const of the icon funtion in the button function. Then append the icon to the button.
// 6) Back in the addItem function, append the button to the li then append the li to the DOM (itemList). Then clear the item input

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
	e.preventDefault();

	const newItem = itemInput.value;

	if (newItem === '') {
		alert('Please enter an item.');
		return;
	}

	// Capitalize the first letter of the item
	const capitalizedItem = newItem.charAt(0).toUpperCase() + newItem.slice(1);

	const li = document.createElement('li');
	li.appendChild(document.createTextNode(capitalizedItem));

	const button = createButton('remove-item btn-link text-red');
	li.appendChild(button);
	itemList.appendChild(li);

	itemInput.value = '';
}

function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;
	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);
	return button;
}

function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

itemForm.addEventListener('submit', addItem);
