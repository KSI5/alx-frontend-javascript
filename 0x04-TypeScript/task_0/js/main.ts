interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

// Function to create a student object
function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

// Create two students using the createStudent function
const student1 = createStudent({ firstname: 'john', lastname: "charles", age: 12, location: "Nairobi"})
const student2 = createStudent({ firstname: 'Donald', lastname: "charles", age: 32, location: "USA"})

// Create an array named studentsList containing the two variables
const studentsList = [ student1, student2 ];

// Create a table element
const table = document.createElement("table");

// Create the first row of the table
const trow = document.createElement("tr");
const tdata = document.createElement("td");
const tdata1 = document.createElement("td");

// Set innerHTML for the first row cells based on student1 properties
tdata.innerHTML = student1.firstname;
tdata1.innerHTML = student1.location;

// Append cells to the first row and the row to the table
trow.appendChild(tdata);
trow.appendChild(tdata1);
table.appendChild(trow);

// Create the second row of the table
const trow1 = document.createElement("tr");
const tdata2 = document.createElement("td");
const tdata3 = document.createElement("td");

// Set innerHTML for the second row cells based on student2 properties
tdata2.innerHTML = student2.firstname;
tdata3.innerHTML = student2.location;

// Append cells to the second row and the row to the table
trow1.appendChild(tdata2);
trow1.appendChild(tdata3);
table.appendChild(trow1);

