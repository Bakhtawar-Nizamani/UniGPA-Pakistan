// Mode 

const body = document.querySelector("body")
const lightBtn = document.querySelector(".light-btn");
const darkBtn = document.querySelector(".dark-btn");

// Light Mode
lightBtn.addEventListener("click", () => {
  body.style.backgroundColor = "white"
  body.style.color = "black"
})

// Dark Mode
darkBtn.addEventListener("click", () => {
  body.style.backgroundColor = "black"
  body.style.color = "white";
})


/* UniGPA Calculator */

const gradingPolicies = {
  NUST: {
    university: "National University of Sciences and Technology",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "B+", gradePoint: 3.5 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "C+", gradePoint: 2.5 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "D+", gradePoint: 1.5 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  FAST: {
    university: "FAST-NUCES",
    maxGPA: 4.0,
    grades: [
      { letter: "A+", gradePoint: 4.0 },
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.67 },
      { letter: "B+", gradePoint: 3.33 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.67 },
      { letter: "C+", gradePoint: 2.33 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.67 },
      { letter: "D+", gradePoint: 1.33 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  COMSATS: {
    university: "COMSATS University Islamabad",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.67 },
      { letter: "B+", gradePoint: 3.33 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.67 },
      { letter: "C+", gradePoint: 2.33 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.67 },
      { letter: "D+", gradePoint: 1.33 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  MUET: {
    university: "Mehran University of Engineering & Technology",
    maxGPA: 4.0,
    grades: [
      { letter: "A+", gradePoint: 4.0 },
      { letter: "A", gradePoint: 3.5 },
      { letter: "B+", gradePoint: 3.0 },
      { letter: "B", gradePoint: 2.5 },
      { letter: "C+", gradePoint: 2.0 },
      { letter: "C", gradePoint: 1.5 },
      { letter: "C-", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  NED: {
    university: "NED University of Engineering & Technology",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.7 },
      { letter: "B+", gradePoint: 3.4 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.7 },
      { letter: "C+", gradePoint: 2.4 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.7 },
      { letter: "D+", gradePoint: 1.4 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  KU: {
    university: "University of Karachi",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.7 },
      { letter: "B+", gradePoint: 3.4 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.8 },
      { letter: "C+", gradePoint: 2.4 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.8 },
      { letter: "D+", gradePoint: 1.4 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  PU: {
    university: "University of the Punjab",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.7 },
      { letter: "B+", gradePoint: 3.3 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.7 },
      { letter: "C+", gradePoint: 2.3 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.7 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  BahriaUni: {
    university: "Bahria University",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.67 },
      { letter: "B+", gradePoint: 3.33 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.67 },
      { letter: "C+", gradePoint: 2.33 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.67 },
      { letter: "D+", gradePoint: 1.33 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  SZABIST: {
    university: "SZABIST",
    maxGPA: 4.0,
    grades: [
      { letter: "A+", gradePoint: 4.0 },
      { letter: "A", gradePoint: 3.75 },
      { letter: "A-", gradePoint: 3.5 },
      { letter: "B+", gradePoint: 3.25 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.75 },
      { letter: "C+", gradePoint: 2.5 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.5 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  "IBA-Karachi": {
    university: "IBA Karachi",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.67 },
      { letter: "B+", gradePoint: 3.33 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.67 },
      { letter: "C+", gradePoint: 2.33 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.67 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  "Air-Uni": {
    university: "Air University",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.67 },
      { letter: "B+", gradePoint: 3.33 },
      { letter: "B", gradePoint: 3.0 },
      { letter: "B-", gradePoint: 2.67 },
      { letter: "C+", gradePoint: 2.33 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "C-", gradePoint: 1.67 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  },

  SU: {
    university: "University of Sindh",
    maxGPA: 4.0,
    grades: [
      { letter: "A", gradePoint: 4.0 },
      { letter: "A-", gradePoint: 3.6 },
      { letter: "B+", gradePoint: 3.2 },
      { letter: "B", gradePoint: 2.8 },
      { letter: "C+", gradePoint: 2.4 },
      { letter: "C", gradePoint: 2.0 },
      { letter: "D+", gradePoint: 1.5 },
      { letter: "D", gradePoint: 1.0 },
      { letter: "F", gradePoint: 0.0 }
    ]
  }
};

// Screens

const startScreen = document.getElementById("startScreen");
const inputScreen = document.getElementById("inputScreen");
const resultScreen = document.getElementById("resultScreen");

// Headings

const uniNameHead = document.querySelector(".uniName");
const subjects = document.querySelector(".totalSub");
const creditHours = document.querySelector(".totalCreditHours");
const qualityPoints = document.querySelector(".totalQualityPoints");
const semGPA = document.querySelector(".semesterGPA");

// Inputs

const inputs = document.querySelector(".inputs");
const course = document.querySelector(".course")


// Buttons 

const calculateGPA = document.querySelector(".calculate-gpa");
const resetBtn = document.querySelector(".reset-btn");
const addBtn = document.querySelector(".addBtn")

// Select

const selectUni = document.getElementById("ChooseUni");
const selectGrade = document.getElementById("selectGrade");



// Select University 

selectUni.addEventListener("change", () => {
  startScreen.classList.add("hidden");
  inputScreen.classList.remove("hidden")
  uniNameHead.textContent = selectUni.value

  // Select Grade
  const selectedUni = selectUni.value;

  const grades = gradingPolicies[selectedUni].grades;

  selectGrade.innerHTML = '';

  grades.forEach((grade) => {
    const option = document.createElement("option");
    option.textContent = grade.letter;
    option.value = grade.letter;

    selectGrade.appendChild(option);
  });
})


// Add Course Button

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("addBtn")) {
    const clone = course.cloneNode(true);
    inputScreen.insertBefore(clone, calculateGPA);
  }
});




// Calculate GPA button
calculateGPA.addEventListener("click", () => {
  inputScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  const courses = document.querySelectorAll(".course")
  let totalSubjects = 0;
  let totalCreditHours = 0;
  let totalQualityPoints = 0.00;
  let semesterGPA = 0.00

  courses.forEach((course) => {

    const courseName = course.querySelector(".courseName").value;

    const creditHour = Number(course.querySelector(".creditHours").value);

    const grade = course.querySelector(".gradeSelect").value;

    const gradePoint = gradingPolicies[selectUni.value].grades.find(g => g.letter === grade).gradePoint;

    const qualityPoint = gradePoint * creditHour;
    totalSubjects++;
    totalCreditHours += creditHour;
    parseFloat(totalQualityPoints += qualityPoint)
  });

  parseFloat(semesterGPA = totalQualityPoints / totalCreditHours)
  subjects.textContent = `Total Subjects: ${totalSubjects}`;
  creditHours.textContent = `Total Credit Hours: ${totalCreditHours}`;
  qualityPoints.textContent = `Total Quality Points: ${totalQualityPoints.toFixed(2)}`;
  semGPA.textContent = `Semester GPA: ${semesterGPA.toFixed(2)}`;

})


// Reset button
resetBtn.addEventListener("click", () => {
  startScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");

})