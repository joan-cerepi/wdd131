// DOM
const currentYearElement = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

// Assign Variables
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

currentYearElement.textContent = currentYear;
lastModifiedElement.textContent = document.lastModified;
