
let cal = "";
let a;
let ram = ""








// Retrieve stored values on page load
window.onload = function() {
  if (localStorage.getItem("mainvalue") !== null)  // to check if the value is not null 
   {
    a = JSON.parse(localStorage.getItem("mainvalue"));  // a is the whole value
  }
  if (localStorage.getItem("calculation") !== null)   // to check if the value is not null 
     {
    cal = JSON.parse(localStorage.getItem("calculation"));  // cal is the single value that comes from  the buttons 
  }
  valuedisplay();
};

// it is for numbers to add
function calculate(param)
{
  cal += param;
  valuedisplay();  // to display in the calculator
  // console.log(cal)
}


// function to calculate the result

function res()
{
  a = eval(cal);
  valuedisplay();
  updateLocalStorage();  // to store
  
}


// this function is to clear the value
function clearval()
{

  // after clearing the function
  cal = "";
  a = undefined; 
  ram = ""
  document.querySelector(".display-content").innerHTML = "";
  updateLocalStorage();
}



function valuedisplay() {
  let html = `<p>${cal}`;
  if (a !== undefined)  // if not null add to the html else not
    {
    html += ` = ${a}`;
  }
  html += `</p>`;
  ram = html;

  document.querySelector(".display-content").innerHTML = ram;  // content to dispaly
}



function updateLocalStorage() {
  localStorage.setItem("mainvalue", JSON.stringify(a));  // whole value
  localStorage.setItem("calculation", JSON.stringify(cal));  // single value
}
