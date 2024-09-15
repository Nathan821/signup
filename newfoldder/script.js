let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let uname = document.getElementById("uname");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let title = document.getElementById("title");

btn.onclick = function(){
  if(fname.value == "" || lname.value == "" || uname.value == "" || pass.value == ""){
    alert("Please fill all the fields");
  }
  else{
    alert("Form Submitted Successfully");
    fname.value = "";
    lname.value = "";
    uname.value = "";
    pass.value = "";
  }
}

