# Marks Calculator

Marks Calculator is a web application that allows users to manage a list of subjects along with their correct and incorrect counts. It also provides the functionality to generate a report summarizing the performance across all subjects.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

To run the Marks Calculator locally, follow these steps:

1. Clone the Repository:
    ```bash
    git clone https://github.com/qasimk02/markscalculator.git
    ```

2. Navigate to the Project Directory:
    ```bash
    cd markscalculator
    ```

3. Open index.html in a Web Browser:
    - Double-click on `index.html` to open it in your default web browser.
    - Alternatively, start a local server to serve the project (e.g., using Python's SimpleHTTPServer).
        ```bash
        python -m http.server
        ```
    - Open http://localhost:8000 in your browser.

## Usage

### Add Subjects:
- Enter a subject name in the input field and click "Add Subject" to add it to the list.

### Increment Correct/Incorrect Counts:
- Use the "+" button to increment the correct count for a subject.
- Use the "-" button to increment the incorrect count for a subject.

### Generate Report:
- Click "Generate Report" to generate a summary report of all subjects' performance.
- The report will display the total correct, incorrect, and calculated marks for each subject.

### Close Report:
- Click "Close Report" to hide the generated report.

## Project Structure

The project repository contains the following files and directories:

- `index.html`: Main HTML file for the application.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file containing application logic.
- `audio/`: Directory containing sound files used in the application.
- `README.md`: This file, providing project information and usage instructions.

---

<p align="center">Made with ❤️ by <a href="https://github.com/qasimk02">Mohammad Qasim</a></p>
