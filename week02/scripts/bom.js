const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

document.querySelector("button").addEventListener("click", function() {
    // Code to execute cick event
    if (input.value.trim() === "") {
        alert("Please enter a chapter!")
        input.focus();
        return;
    }

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    input.value = "";
    input.focus();
});