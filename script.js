// Function to add a new subject to the table
function addSubject() {
  const subjectInput = document.getElementById("subjectInput");
  const subjectName = subjectInput.value.trim();

  if (subjectName !== "") {
    const subjectBody = document.getElementById("subjectBody");

    // Create a new row for the subject
    const newRow = document.createElement("tr");

    // Subject Name
    const subjectCell = document.createElement("td");
    subjectCell.textContent = subjectName;

    // Action (plus and minus buttons)
    const actionCell = document.createElement("td");
    actionCell.classList.add("action-cell");
    const plusButton = createActionButton("+", () => {
      incrementCorrect(correctCell);
      playPlusSound();
    });
    const minusButton = createActionButton("-", () => {
      incrementIncorrect(incorrectCell);
      playMinusSound();
    });
    actionCell.appendChild(plusButton);
    actionCell.appendChild(minusButton);

    // Correct Count
    const correctCell = document.createElement("td");
    correctCell.textContent = "0";

    // Incorrect Count
    const incorrectCell = document.createElement("td");
    incorrectCell.textContent = "0";

    // Append cells to the new row
    newRow.appendChild(subjectCell);
    newRow.appendChild(actionCell);
    newRow.appendChild(correctCell);
    newRow.appendChild(incorrectCell);

    // Append new row to the table body
    subjectBody.appendChild(newRow);

    // Clear input field
    subjectInput.value = "";
  }
  playSubjectAddedSound();
}

// Function to create an action button with specified text and click handler
function createActionButton(text, clickHandler) {
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = clickHandler;
  return button;
}

// Function to increment correct count for a subject
function incrementCorrect(correctCell) {
  let count = parseInt(correctCell.textContent, 10);
  count++;
  correctCell.textContent = count.toString();
}

// Function to increment incorrect count for a subject
function incrementIncorrect(incorrectCell) {
  let count = parseInt(incorrectCell.textContent, 10);
  count++;
  incorrectCell.textContent = count.toString();
}

function createReport() {
  var reportContainer = document.getElementById("reportContainer");

  //slecting report body and clearing its existing report
  const reportBody = document.getElementById("reportBody");
  reportBody.innerHTML = "";

  const subjectBody = document.getElementById("subjectBody");
  const rows = subjectBody.getElementsByTagName("tr");

  //total correct,incorrect count variables
  var totalCorrect = 0;
  var totalIncorrect = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    // Extract subject name from the first cell (subjectCell)
    const subjectCell = row.getElementsByTagName("td")[0];
    const subjectName = subjectCell.textContent;

    // Extract correct count from the third cell (correctCell)
    const correctCell = row.getElementsByTagName("td")[2];
    const correctCount = correctCell.textContent;

    // Extract incorrect count from the fourth cell (incorrectCell)
    const incorrectCell = row.getElementsByTagName("td")[3];
    const incorrectCount = incorrectCell.textContent;

    totalCorrect += correctCount * 1;
    totalIncorrect += incorrectCount * 1;

    subjectWiseReport(subjectName, correctCount, incorrectCount);
  }
  subjectWiseReport("Total", totalCorrect, totalIncorrect);
  reportContainer.style.display = "block";
}

function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
}

function generateReport() {
  var reportContainer = document.getElementById("reportContainer");
  reportContainer.style.display = "none";
  playReportGeneratingSound();
  showLoader();
  setTimeout(() => {
    hideLoader();
    createReport();
    playReportGeneratedSound();
  }, 2000);
}

function closeReport() {
  var reportContainer = document.getElementById("reportContainer");
  reportContainer.style.display = "none";
  playReportClosedSound();
}

function subjectWiseReport(subjectName, correctCount, incorrectCount) {
  const reportBody = document.getElementById("reportBody");

  // Create a new row for the subject
  const newRow = document.createElement("tr");

  // Subject Name
  const subjectCell = document.createElement("td");
  subjectCell.textContent = subjectName;

  // Correct Count
  const correctCell = document.createElement("td");
  correctCell.textContent = correctCount;

  // Incorrect Count
  const incorrectCell = document.createElement("td");
  incorrectCell.textContent = incorrectCount;

  // total markd
  const marks = document.createElement("td");
  marks.textContent = correctCount * 4 - incorrectCount;

  // Append cells to the new row
  newRow.appendChild(subjectCell);
  newRow.appendChild(correctCell);
  newRow.appendChild(incorrectCell);
  newRow.appendChild(marks);

  // Append new row to the table body
  reportBody.appendChild(newRow);
}

//play sound funtions
function playPlusSound() {
  var plusSound = document.getElementById("plusSound");
  plusSound.play();
}

function playMinusSound() {
  var minusSound = document.getElementById("minusSound");
  minusSound.play();
}

function playSubjectAddedSound() {
  var subjectAddedSound = document.getElementById("subjectAddedSound");
  subjectAddedSound.play();
}

function playReportGeneratingSound() {
  var reportGeneratingSound = document.getElementById("reportGeneratingSound");
  reportGeneratingSound.play();
}

function playReportGeneratedSound() {
  var reportGeneratingSound = document.getElementById("reportGeneratedSound");
  reportGeneratingSound.play();
}

function playReportClosedSound() {
  var reportClosedSound = document.getElementById("reportClosedSound");
  reportClosedSound.play();
}
