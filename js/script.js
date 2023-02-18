/*eslint-env browser*/
var $ = function (id){
    "use strict";
    return window.document.getElementById(id);
};
// Variables
var employeeId, employeeName, ext, email, dept, addBtn;
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var employeeForm = $("addForm");
var employeTable = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var employeeCount = 0;

// ADD EMPLOYEE
employeeForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    employeeId = $("id").value;
    employeeName = $("name").value;
    ext = $("extension").value;
    email = $("email").value;
    dept = $("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    var row = employeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var cellId = row.insertCell();
    var cellName = row.insertCell();
    var cellExt = row.insertCell();
    var cellEmail = row.insertCell();
    var cellDept = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    var textId = window.document.createTextNode(employeeId);
    cellId.appendChild(textId);
    var textName = window.document.createTextNode(employeeName);
    cellName.appendChild(textName);
    var textExt = window.document.createTextNode(ext)
    cellExt.appendChild(textExt);
    var textEmail = window.document.createTextNode(email);
    cellEmail.appendChild(textEmail);
    var textDept = window.document.createTextNode(dept);
    cellDept.appendChild(textDept);

    // CREATE THE DELETE BUTTON
    var cellDelete = row.insertCell();
    var deleteBtn = window.document.createElement("button");
    //var textDelete = window.document.createTextNode("Delete");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn","btn-dark");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("onClick", "deleteEmployee(this)");
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    employeeForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount += 1;
    $("empCount").value = employeeCount;

});

// DELETE EMPLOYEE
function deleteEmployee (btn){
    var row = btn.parentElement.parentElement;
    row.parentElement.removeChild(row);
    employeeCount -= 1;
    $("empCount").value = employeeCount;
};
