// script.js
// Set current date/time in the footer
document.getElementById('curr-date').textContent = new Date()
  .toLocaleString('en-IN', {
    weekday: "long", year: "numeric", month: "long",
    day: "numeric", hour: "numeric", minute: "2-digit",
    hour12: true, timeZoneName: 'short'
  });
