"use strict";

let form = document.getElementById('dataform');
let fullname = document.getElementById("fullname");
fullname.addEventListener('mouseleave', function(){
    fullname.style.color= "black";
})
fullname.addEventListener('mouseover', function(){
    fullname.style.color= "red";
})




var employess = [];

function Employees(EmployeeID, Fullname, Department, Level, Image, ){
    
    this.EmployeeID = EmployeeID;
    this.Fullname = Fullname;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    this.Salary = 0;
    employess.push(this);
}

Employees.prototype.getSalary = function(){
    let min;
    let max;
    if(this.Level == "Senior"){
        min = 1500;
        max = 2000;
    }
    else if(this.Level == "Mid-Senior"){
        min = 1000;
        max = 1500;
    }
    else{
        min = 500;
        max = 1000;
    }
    this.Salary = getRandomArsalary(min,max);

    }
function getRandomArsalary(min,max){
    return (Math.floor(Math.random() * (max-min+1))+min)-(Math.floor(Math.random() * (max-min+1))+min) *0.075
}


  Employees.prototype.render = function(){
      document.write('<h1>'+this.Image +this.Fullname+"  "+ this.Salary+'</h1>');
  }

let lanaAli = new Employees("1000","Lana ali","Finance", "Senior","data:image/jpeg;base64,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")


 
let tamaraAyoub = new Employees("1002","Tamara Ayoub", "Marketing","Senior","image")



let ghaziSamer = new Employees("1000","Ghazi Samer", "Administration" ,"Senior","image")



let safiWalid = new Employees("1003", "Safi Walid", "Administration", "Mid-Senior", "image")



let omarZaid = new Employees("1004", "Omar Zaid", "Development", "Senior", "image")



let ranaSaleh = new Employees("1005", "Rana Saleh", "Development", "Junior", "image")


let hadiAhmad = new Employees("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "image")


form.addEventListener("submit", handlsubmit)

function handlsubmit(event){
    event.preventDefault();
    let employee = event.target.Employee.value;
    let name = event.target.Fullname.value;
    let Department = event.target.Department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    console.log(employee,name,Department,level,image);
    
}


for( var i = 0 ; i < employess.length ; i++){
    employess[i].getSalary();
    employess[i].render();
}


