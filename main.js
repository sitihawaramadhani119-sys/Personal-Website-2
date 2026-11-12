/* =====================================================
   IMD318 Personal Website - Siti Hawa Ramadani
   main.js  (simple JavaScript)
   1. Greeting   2. Live clock   3. Age   4. Notification
   5. Search     6. Text-only    7. Contact form check
   ===================================================== */

// 1. Greeting that changes with the time of day
function showGreeting() {
  var box = document.getElementById("greeting");
  if (!box) return;
  var hour = new Date().getHours();
  var text = "Good evening";
  if (hour < 12) { text = "Good morning"; }
  else if (hour < 18) { text = "Good afternoon"; }
  box.textContent = text + "! Welcome to my website";
}

// 2. Clock that updates every second
function showClock() {
  var timeBox = document.getElementById("time");
  var dateBox = document.getElementById("date");
  if (!timeBox) return;
  var now = new Date();
  timeBox.textContent = now.toLocaleTimeString("en-GB");
  dateBox.textContent = now.toDateString();
}

// 3. Age worked out from my birthday (18 October 2006)
function showAge() {
  var box = document.getElementById("age");
  if (!box) return;
  var today = new Date();
  var age = today.getFullYear() - 2006;
  var birthdayPassed = today.getMonth() > 9 || (today.getMonth() == 9 && today.getDate() >= 18);
  if (!birthdayPassed) { age = age - 1; }
  box.textContent = age;
}

// 4. Notification that pops up for a few seconds
function showToast(message) {
  var toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.style.display = "block";
  setTimeout(function () { toast.style.display = "none"; }, 4000);
}

// 5. Simple search: type a word and see matching pages
var pages = [
  ["Home", "index.html", "home welcome hawa clock"],
  ["Biodata", "biodata.html", "biodata about hobbies skills singing movies cooking"],
  ["Education", "education.html", "education school uitm smk kindergarten cgpa"],
  ["Experience", "experience.html", "experience internship hospital pantai"],
  ["Family", "family.html", "family abah ibu parents"],
  ["Gallery", "gallery.html", "gallery photos pictures friends"],
  ["Media", "media.html", "media video song music animation"],
  ["Contact", "contact.html", "contact email instagram links pinterest spotify"],
  ["Reflection", "reflection.html", "reflection design challenges lessons"],
  ["Site Map", "sitemap.html", "sitemap pages"]
];

function search() {
  var word = document.getElementById("search").value.toLowerCase();
  var list = document.getElementById("results");
  list.innerHTML = "";
  if (word.length < 2) { list.style.display = "none"; return; }
  for (var i = 0; i < pages.length; i++) {
    if ((pages[i][0] + " " + pages[i][2]).toLowerCase().indexOf(word) != -1) {
      list.innerHTML += '<li><a href="' + pages[i][1] + '">' + pages[i][0] + "</a></li>";
    }
  }
  if (list.innerHTML == "") { list.innerHTML = "<li>No result found</li>"; }
  list.style.display = "block";
}

// 6. Text-only button (for readers who prefer no pictures)
function toggleText() {
  document.body.classList.toggle("text-only");
}

// 7. Contact form: check that the fields are filled in
function checkForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  document.getElementById("nameError").textContent = name ? "" : "Please enter your name.";
  document.getElementById("emailError").textContent = email.indexOf("@") > 0 ? "" : "Please enter a valid email.";
  document.getElementById("messageError").textContent = message ? "" : "Please write a message.";
  if (name && email.indexOf("@") > 0 && message) {
    showToast("Thank you, " + name + "! (This is a demo form.)");
    event.target.reset();
  }
}

// Run when the page loads
showGreeting();
showClock();
setInterval(showClock, 1000);
showAge();
if (document.body.id == "home") {
  setTimeout(function () { showToast("<strong>Hi! 💖</strong><br>Thanks for visiting my website."); }, 1000);
}
