"use strict";

let form = document.getElementById("dataform");
let fullname = document.getElementById("Fullname");
fullname.addEventListener("mouseleave", function () {
  fullname.style.color = "black";
});
fullname.addEventListener("mouseover", function () {
  fullname.style.color = "red";
});

let employeeDiv = document.getElementById("employeeDiv");
let employeeIdStart = 1000;

var employess = [];

function Employees(Fullname, Department, Level, imageURL) {
  this.EmployeeID = this.getId();
  this.Fullname = Fullname;
  this.Department = Department;
  this.Level = Level;
  this.imageURL = imageURL;
  this.Salary = this.getSalary();
  employess.push(this);
}

function generateID() {
  return employeeIdStart++;
}

Employees.prototype.getId = function () {
  return generateID();
};

Employees.prototype.getSalary = function () {
  let min;
  let max;
  if (this.Level == "Senior") {
    min = 1500;
    max = 2000;
  } else if (this.Level == "Mid-Senior") {
    min = 1000;
    max = 1500;
  } else {
    min = 500;
    max = 1000;
  }
  this.Salary = getRandomArsalary(min, max);
};
function getRandomArsalary(min, max) {
  return (
    Math.floor(Math.random() * (max - min + 1)) +
    min -
    (Math.floor(Math.random() * (max - min + 1)) + min) * 0.075
  );
}

Employees.prototype.render = function () {
  let imageEmp = document.createElement("img");
  imageEmp.setAttribute("src", this.imageURL);
  employeeDiv.appendChild(imageEmp);

  let title = document.createElement("h1");
  title.textContent = this.EmployeeID + this.Fullname + this.Salary;
  employeeDiv.appendChild(title);
};

let lanaAli = new Employees(
  "Lana ali",
  "Finance",
  "Senior",
  "./assest/Lana.jpg"
);

let tamaraAyoub = new Employees(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assest/Tamara.jpg"
);

let ghaziSamer = new Employees(
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assest/Ghazi.jpg"
);

let safiWalid = new Employees(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assest/Safi.jpg"
);

let omarZaid = new Employees(
  "Omar Zaid",
  "Development",
  "Senior",
  "./assest/Omar.jpg"
);

let ranaSaleh = new Employees(
  "Rana Saleh",
  "Development",
  "Junior",
  "./assest/Rana.jpg"
);

let hadiAhmad = new Employees(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assest/Hadi.JPG"
);

function saveEmployees() {
  let formatedData = JSON.stringify(employess);
  localStorage.setItem("employees", formatedData);
  console.log(employess);
}

function gitData() {
  let employess = localStorage.getItem("employees");
  let parseEmployess = JSON.parse(employess);

  employess = [];

  if (parseEmployess != null) {
    for (let i = 0; i < parseEmployess.length; i++) {
      new Employees(
        parseEmployess[i].Fullname,
        parseEmployess[i].Department,
        parseEmployess[i].Level,
        parseEmployess[i].imageURL
      );
    }
  }
  renderAll();
}

form.addEventListener("submit", handlsubmit);

function handlsubmit(event) {
  event.preventDefault();
  //let employee = event.target.Employee.value;
  let Fullname = event.target.Fullname.value;
  let Department = event.target.Department.value;
  let level = event.target.level.value;
  let image = event.target.image.value;
  let newEmployee = new Employees(Fullname, Department, level, image);
  newEmployee.render();
  renderAll();
  saveEmployees();
}

function renderAll() {
  employeeDiv.innerHTML = "";
  for (var i = 0; i < employess.length; i++) {
    employess[i].getId();
    employess[i].getSalary();
    employess[i].render();
  }
}
gitData();

//renderAll();
console.log(employess);
