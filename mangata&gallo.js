const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href");
    const targetSection = document.querySelector(sectionId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

const menuIcon = document.querySelector(".menu-icon i");
const xMark = document.querySelector(".menu-xmark i");
const navbar = document.querySelector(".navbar ul");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});


const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all fields');
    return;
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address');
    return;
  }


  let formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(formData)

nameInput.value = ""
emailInput.value = ""
messageInput.value=""


  // fetch('/submit-form', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) => {
  //   if (response.ok) {
  //     alert('Form submitted successfully!');
  //     form.reset();
  //   } else {
  //     alert('Error submitting form');
  //   }
  // })
  // .catch((error) => {
  //   alert('Error submitting form');
  //   console.error(error);
  // });
});
