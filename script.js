const studentForm = document.forms["student-form"]

const studentData = document
    .getElementById('student-data')
    .getElementsByTagName('tbody')[0]

const students = []

function submitData() {
    const student = {
        name: studentForm['first_name'].value,
        gender: studentForm['gender'].value,
        course: studentForm['program'].value
    }

    students.push(student)

    addTableStudentData(student)

    studentForm.reset()
}

function addTableStudentData(student) {
    const newRow = studentData.insertRow(0)

    for(let field in student) {
        const newCell = newRow.insertCell()

        newCell.setAttribute('class', 'px-6 py-4')

        newCell.innerHTML = student[field]
    }
    // <td></td>
    const newCell = newRow.insertCell()
    // 1st Way
    // newCell.innerHTML = "<button class='bg-blue-500 py-2 px-4 text-white rounded-md'>View</button>"
    // 2nd Way the JS Way
    const actionButton = document.createElement("button")
    actionButton.setAttribute('class', 'bg-blue-500 py-2 px-4 text-white rounded-md')
    actionButton.textContent = 'View'

    actionButton.onclick = function() {
        const dataSelected = document.getElementById('data-selected')
        dataSelected.innerText = `${student['name']} (${student['gender']}) course of ${student['course']}`
    }

    newCell.appendChild(actionButton)
}

function filterStudents() {
    const txtElement = document.getElementById('student-search')
    const valueSearched = txtElement.value

    studentData.innerHTML = ''
    for(let student of students) {
        if(student.name.includes(valueSearched)) {
            addTableStudentData(student)
        }
    }
}

/* function filterStudents() {
    const filteredStudents = students.filter(student => student.name.includes(document.getElementById('student-search').value))
    studentData.innerHTML = ''

    for(let student of filteredStudents) {
        addTableStudentData(student)
    }
} */
