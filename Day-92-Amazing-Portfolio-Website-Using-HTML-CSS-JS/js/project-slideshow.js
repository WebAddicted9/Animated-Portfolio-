showProject(slideIndex);

function showProject(num) {
  // Adjust the slideIndex to loop within bounds
  if (num > project.length) {
    slideIndex = 1;
  } else if (num < 1) {
    slideIndex = project.length;
  }

  // Hide all projects
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }

  // Show the current project
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  showProject(slideIndex += num);
}
