// Handle form submission and table updating
document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get input values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Get gender from dropdown
    const gender = document.getElementById("gender").value;

    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    // Create a new row for the table
    const table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells with the data
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = age;
    newRow.insertCell(2).textContent = gender;
    newRow.insertCell(3).textContent = course;
    newRow.insertCell(4).textContent = email;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1); // Remove the row from the table
    };

    // Append the delete button to the last cell
    newRow.insertCell(5).appendChild(deleteBtn);

    // Reset the form (including the dropdown selections)
    document.getElementById("studentForm").reset();
});
