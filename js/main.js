function showToast(message, bgcolor = "linear-gradient(to right, #00b09b, #96c93d)") {
  Toastify({
    text: message,
    duration: 2000,              // Toast disappears in 3 seconds
    close: true,                 // Show close icon
    gravity: "top",              // top or bottom
    position: "right",           // left, center or right
    backgroundColor: bgcolor,
    stopOnFocus: true,            // Prevents dismiss on hover
    className: "custom-toast"
  }).showToast();
}


const form = document.getElementById('myForm');

form.addEventListener('submit', e => {
  e.preventDefault();          
  showToast('Registered successfully');
  setTimeout(() => form.submit(), 2000);
});
