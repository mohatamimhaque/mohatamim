const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click",() => {
    container.classList.toggle("active");
})



//sticky navigation 
window.addEventListener("scroll",function(){
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("stiky" ,window.scrollY > 20);
})












mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
function myFunction(x) {
  x.classList.toggle("change");
}




function sendEmail(){
    Email.send({
    SecureToken :"6504da89-2940-4009-9b1d-1c912b9a3c98" ,
    To : 'mohatamimhaque10@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact form Enquiry",
    Body :  "Name: " + document.getElementById("first-name").value + document.getElementById("last-name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Phone No: " + document.getElementById("phone").value
          + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Succesfully")
);
}
