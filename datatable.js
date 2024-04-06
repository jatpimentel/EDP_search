function addRow() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = document.getElementById("age").value;
  var position = document.getElementById("position").value; // Correctly retrieve the selected position from the dropdown
  
  var table = document.getElementById("dataTable");
  var row = table.insertRow(-1);
  var fullName = row.insertCell(0);
  var cellGender = row.insertCell(1);
  var cellAge = row.insertCell(2);
  var cellPosition = row.insertCell(3);
  
  fullName.innerHTML = firstName + " " + lastName;
  cellGender.innerHTML = gender;
  cellAge.innerHTML = age;
  cellPosition.innerHTML = position;
  
  document.getElementById("inputForm").reset();
}

function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");

  var genderFilter = document.querySelector('input[name="genderFilter"]:checked') ? document.querySelector('input[name="genderFilter"]:checked').value : '';
  var ageMin = document.getElementById("ageMin").value ? parseInt(document.getElementById("ageMin").value) : Number.MIN_SAFE_INTEGER;
  var ageMax = document.getElementById("ageMax").value ? parseInt(document.getElementById("ageMax").value) : Number.MAX_SAFE_INTEGER;
  var positionFilter = document.querySelector('input[name="positionFilter"]:checked') ? document.querySelector('input[name="positionFilter"]:checked').value : '';
  
  for (i = 1; i < tr.length; i++) {
      var tdName = tr[i].getElementsByTagName("td")[0];
      var tdGender = tr[i].getElementsByTagName("td")[1];
      var tdAge = tr[i].getElementsByTagName("td")[2];
      var tdPosition = tr[i].getElementsByTagName("td")[3];
    
      if (tdName && tdGender && tdAge && tdPosition) {
          var txtNameValue = tdName.textContent || tdName.innerText;
          var txtGenderValue = tdGender.textContent || tdGender.innerText;
          var txtAgeValue = parseInt(tdAge.textContent || tdAge.innerText);
          var txtPositionValue = tdPosition.textContent || tdPosition.innerText;
      
          if (txtNameValue.toUpperCase().indexOf(filter) > -1 &&
              (genderFilter === '' || txtGenderValue.toUpperCase() === genderFilter) &&
              txtAgeValue >= ageMin && txtAgeValue <= ageMax &&
              (positionFilter === '' || txtPositionValue.toLowerCase() === positionFilter)) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }       
  }
}

document.getElementById("addRowButton").addEventListener("click", addRow);
document.getElementById("searchInput").addEventListener("keyup", filterTable);
document.getElementById("genderFilter").addEventListener("change", filterTable);
document.getElementById("ageMin").addEventListener("keyup", filterTable);
document.getElementById("ageMax").addEventListener("keyup", filterTable);
document.getElementById("positionFilter").addEventListener("change", filterTable);