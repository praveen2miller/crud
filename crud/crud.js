var selectedRow = null;

function onFormSubmit(e){
    var event.preventDefault();
    var formData = readFormData();
    if(validate(formData))
    {
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    }
    resetForm();
    }
function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["age"] = document.getElementById("age").value;
    formData["hobbies"] = document.getElementById("hobbies").value;
    formData["gender"] = document.querySelector('[name="gender"]:checked').value;
        return formData;
}
function validate(data){
if (data.Name==null || data.Name==""){
alert("Name can't be blank");
return false;
}
var letters = /^[A-Za-z]+$/;
      if(!data.Name.match(letters))
      {
      alert("Name invalid");
            return false;
      }
      if((data.age<1) || (data.age>100))
      {
      alert("age invalid");
      return false;
      }
      else
      {
      return true;
      }
}
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.age;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.hobbies;
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.gender;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}
function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('hobbies').value = '';
    document.getElementById("male").checked=false;
    document.getElementById("female").checked=false;
    selectedRow = null;
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('age').value = selectedRow.cells[1].innerHTML;
    document.getElementById('hobbies').value = selectedRow.cells[2].innerHTML;
    var gender=selectedRow.cells[3].innerHTML;
    if(gender=='male')
    {
    document.getElementById('male').checked =true;
    }
    else
    {
    document.getElementById('female').checked =true;
    }
    }
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.hobbies;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow = null;
    }
function onDelete(td){
    if(confirm('it will delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}
