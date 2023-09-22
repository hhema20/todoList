let inputBox = document.getElementById("input-box");
let text = document.querySelector(" .text");

function addTask() {
	if (inputBox.value === "") {
		alert("please add task");
	} else {
		let newEle = document.createElement("ul");
		newEle.innerHTML = `${inputBox.value}<i class="fa fa-trash"></i>`;
		text.appendChild(newEle);

		inputBox.value = "";

		newEle.querySelector("i").addEventListener("click", remove);
		function remove() {
			newEle.remove();
		}
	}
}
