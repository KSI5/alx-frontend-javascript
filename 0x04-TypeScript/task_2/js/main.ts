interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();  // Return an instance of Teacher
    }
    return new Director();  // Return an instance of Director
}

// Example usage
const employee1 = createEmployee(200);
console.log(employee1.workFromHome());  // Output: Cannot work from home

const employee2 = createEmployee(1000);
console.log(employee2.workDirectorTasks());  // Output: Getting to director tasks
