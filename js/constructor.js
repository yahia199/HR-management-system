"use strict";

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
      document.write('<h1>'+this.Fullname+"  "+ this.Salary+'</h1>');
  }

let lanaAli = new Employees("1000","Lana ali","Finance", "Senior","image")


 
let tamaraAyoub = new Employees("1002","Tamara Ayoub", "Marketing","Senior","image")



let ghaziSamer = new Employees("1000","Ghazi Samer", "Administration" ,"Senior","image")



let safiWalid = new Employees("1003", "Safi Walid", "Administration", "Mid-Senior", "image")



let omarZaid = new Employees("1004", "Omar Zaid", "Development", "Senior", "image")



let ranaSaleh = new Employees("1005", "Rana Saleh", "Development", "Junior", "image")


let hadiAhmad = new Employees("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "image")

for( var i = 0 ; i < employess.length ; i++){
    employess[i].getSalary();
    employess[i].render();
}


