"use strict";

function Employees(EmployeeID, Fullname, Department, Level, Image, ){

    this.EmployeeID = EmployeeID;
    this.Fullname = Fullname;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    
}

Employees.prototype.random = function getRandomArsalary(min, max) {
     this.Salary= (Math.random() * (max - min) + min)*0.75;
     return this.Salary;

  }
  Employees.prototype.render = function(){
      document.write('<h1>'+this.Fullname+'</h1>');
  }

let lanaAli = new Employees("1000","Lana ali","Finance", "Senior","image")

lanaAli.render();
document.write('<h1>'+lanaAli.random(1500,2000)+'</h1>');

 
let tamaraAyoub = new Employees("1002","Tamara Ayoub", "Marketing","Senior","image")

tamaraAyoub.render();
document.write('<h1>'+tamaraAyoub.random(1500,2000)+'</h1>');

let ghaziSamer = new Employees("1000","Ghazi Samer", "Administration" ,"Senior","image")

ghaziSamer.render();
document.write('<h1>'+ghaziSamer.random(1500,2000)+'</h1>');

let safiWalid = new Employees("1003", "Safi Walid", "Administration", "Mid-Senior", "image")

safiWalid.render();
document.write('<h1>'+safiWalid.random(1000,1500)+'</h1>');

let omarZaid = new Employees("1004", "Omar Zaid", "Development", "Senior", "image")

omarZaid.render();
document.write('<h1>'+safiWalid.random(1500,2000)+'</h1>');

let ranaSaleh = new Employees("1005", "Rana Saleh", "Development", "Junior", "image")

ranaSaleh.render();
document.write('<h1>'+ranaSaleh.random(500,1000)+'</h1>');

let hadiAhmad = new Employees("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "image")

hadiAhmad.render();
document.write('<h1>'+hadiAhmad.random(1000,1500)+'</h1>');



