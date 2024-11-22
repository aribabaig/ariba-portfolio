const header = document.getElementById('header');

// Listen to the scroll event
window.addEventListener('scroll', () => {
    // Check if the scroll position is beyond a certain threshold (e.g., 100px)
    if (window.scrollY > 200) {
        header.classList.add('active'); // Add 'active' class to navbar
    } else {
        header.classList.remove('active'); // Remove 'active' class if scrolled back up
    }
});
// scroll animation
ScrollReveal({
  reset : true,
  distance : '10px',
  duration : 1500,
  delay : 300,
});
ScrollReveal().reveal('.animate-right', {delay : 200, origin: 'right'});
ScrollReveal().reveal('.animate-left', { delay: 200 , origin: 'left'});
ScrollReveal().reveal('.animate-bottom',{ delay: 200 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top',{ delay: 200 , origin: 'top'});
ScrollReveal().reveal('.animate-top-1',{ delay: 200 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top-2',{ delay: 300 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top-3',{ delay: 400 , origin: 'bottom'});
ScrollReveal().reveal('.animate-top-4',{ delay: 500 , origin: 'bottom'});
// ScrollReveal().reveal('.', { delay: 700 , origin: 'right'});
// ScrollReveal().reveal('', { delay: 700 , origin: 'left'});
// ScrollReveal().reveal('', { delay: 500 , origin: 'bottom' });


// contact section animation using gsap 

// var tl = gsap.timeline({scrollTrigger:{
//   trigger:"#main",
// //  markers:true,
//   start:"50% 50%",
//   end:"150% 50%",
//   scrub:2,
//   pin:true
// }});
// tl
// .to("#center",{
//  height: "100vh",
// },'a')
// .to("#top",{
//   top: "-50%",
// },'a')
// .to("#bottom",{
//   bottom: "-50%",
// },'a')
// .to("#top-h1",{
//   top: "60%"
// },'a')
// .to("#bottom-h1",{
//   bottom: "-30%"
// },'a')
// .to("#center-h1",{
//  top: "-30%"
// },'a')
// .to(".content",{
//  delay: -0.2,
//  marginTop: "0%"
// })
 
// Navbar active function 

 document.addEventListener('DOMContentLoaded', function () {
  // Get the checkbox and navigation links
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelectorAll('.pt-5 li a');

  // Add click event listener to each navigation link
  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          // Uncheck the checkbox to close the menu
          menuIcon.checked = false;
      });
  });
});
//contact
// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   e.preventDefault(); // Prevent the default form submission behavior

//   const form = e.target;
//   const formData = new FormData(form);
//   const submitButton = form.querySelector('.btn');
//   const btnText = submitButton.querySelector('.btn-text');
//   const btnLoader = submitButton.querySelector('.btn-loader');
//   const messageDiv = document.querySelector('.form-message');

//   // Show loader and disable button
//   btnText.style.display = 'none';
//   btnLoader.style.display = 'inline-block';
//   submitButton.disabled = true;

//   // Send form data to the Web3Forms endpoint
//   fetch(form.action, {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Reset the form
//         form.reset();

//         // Display success message
//         messageDiv.textContent = 'Form submitted successfully!';
//         messageDiv.style.display = 'block';

//         // Hide the success message after 5 seconds
//         setTimeout(() => {
//           messageDiv.style.display = 'none';
//         }, 5000);
//       } else {
//         throw new Error('Failed to submit the form');
//       }
//     })
//     .catch((error) => {
//       // Handle errors
//       alert('There was an error submitting the form: ' + error.message);
//     })
//     .finally(() => {
//       // Hide loader and enable button
//       btnText.style.display = 'inline-block';
//       btnLoader.style.display = 'none';
//       submitButton.disabled = false;
//     });
// });

// //another example
// document.getElementById('contactFor').addEventListener('submit', function (e) {
//   e.preventDefault(); // Prevent the default form submission behavior

//   const form = e.target;
//   const formData = new FormData(form);

//   // Send form data to the Web3Forms endpoint
//   fetch(form.action, {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Clear form fields
//         form.reset();

//         // Show success message
//         const messageDiv = document.querySelector('.form-message');
//         messageDiv.textContent = 'Form submitted successfully!';
//         messageDiv.style.display = 'block';

//         // Optionally hide the message after a few seconds
//         setTimeout(() => {
//           messageDiv.style.display = 'none';
//         }, 5000);
//       } else {
//         throw new Error('Failed to submit the form');
//       }
//     })
//     .catch((error) => {
//       // Handle submission errors
//       alert('There was an error submitting the form: ' + error.message);
//     });
// });


// document.querySelector('#contactorm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.number.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(form);
    const submitButton = form.querySelector('.btn');
    const btnText = submitButton.querySelector('.btn-text');
    const btnLoader = submitButton.querySelector('.btn-loader');
    const messageDiv = form.querySelector('.form-message');

    // Show loader and disable button
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitButton.disabled = true;

    // Send form data to the Web3Forms endpoint
    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Reset the form
          form.reset();

          // Display success message
          messageDiv.textContent = 'Form submitted successfully!';
          messageDiv.style.display = 'block';

          // Hide the success message after 5 seconds
          setTimeout(() => {
            messageDiv.style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Failed to submit the form');
        }
      })
      .catch((error) => {
        // Handle errors
        alert('There was an error submitting the form: ' + error.message);
      })
      .finally(() => {
        // Hide loader and enable button
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitButton.disabled = false;
      });
  });
});
// end 