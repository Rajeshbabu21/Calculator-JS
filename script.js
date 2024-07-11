
let cal = "";
let a;
let ram = ""








// Retrieve stored values on page load
window.onload = function() {
  if (localStorage.getItem("mainvalue") !== null) {
    a = JSON.parse(localStorage.getItem("mainvalue"));
  }
  if (localStorage.getItem("calculation") !== null) {
    cal = JSON.parse(localStorage.getItem("calculation"));
  }
  valuedisplay();
};

// it is for numbers to add
function calculate(param)
{
  cal += param;
  valuedisplay();
  // console.log(cal)
}


// function to calculate the result

function res()
{
  a = eval(cal);
  valuedisplay();
  updateLocalStorage();
  
}


// this function is to clear the value
function clearval()
{
  cal = "";
  // console.log(cal)
  a = undefined;
  ram = ""
  // console.log("it is cleared");
  document.querySelector(".display-content").innerHTML = "";
  updateLocalStorage();
}



function valuedisplay() {
  let html = `<p>${cal}`;
  if (a !== undefined) {
    html += ` = ${a}`;
  }
  html += `</p>`;
  ram = html;

  document.querySelector(".display-content").innerHTML = ram;
}



function updateLocalStorage() {
  localStorage.setItem("mainvalue", JSON.stringify(a));
  localStorage.setItem("calculation", JSON.stringify(cal));
}
