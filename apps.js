// person class 
class Person {
    name;
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
;
//student class
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(rollNumber, name, age) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerforCourses(course) {
        this.courses.push(course);
    }
}
;
// instructor class
class Instructor extends Person {
    salary;
    courses = [];
    constructor(salary, name, age) {
        super(name, age);
        this.salary = salary;
    }
    assignCourses(course) {
        this.courses.push(course);
    }
}
;
// course class
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
    }
}
;
// Department class
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
;
const std1 = new Student("PIAIC1234", "Hafiz Muhammad Adil", 27);
const std2 = new Student("PIAIC1122", "Hammad ", 34);
//console.log(std1);
const Instructor1 = new Instructor(50000, "Sir_Jahazaib", 29);
const Instructor2 = new Instructor(60000, "Sir_Zia Khan", 60);
const course1 = new Course(101, "BlockChian");
const course2 = new Course(105, "Metaverse");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course2.addStudent(std2);
course1.setInstructor(Instructor1);
course1.setInstructor(Instructor2);
const D1 = new Department("Computer_Science");
D1.addCourse(course1);
console.log(D1.courses[0]);
export {};
