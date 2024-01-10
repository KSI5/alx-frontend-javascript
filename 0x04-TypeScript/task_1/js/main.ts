interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Example usage
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// Task 2: Extending the Teacher Class
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};

console.log(director1);

// Task 3: Printing Teachers
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;

// Example usage
console.log(printTeacher("John", "Doe"));  // Output: J. Doe

// Task 4: Writing a Class (StudentClass)
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClassImpl implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
};

// Example usage
const student = new StudentClass("Paul", "Jerry");
console.log(student.displayName());  // Output: Paul
console.log(student.workOnHomework());  // Output: Currently working
