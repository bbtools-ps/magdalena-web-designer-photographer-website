function addCopyrightYear() {
  // Get current year
  const currentYear = new Date().getFullYear();
  // Add copyright to the footer
  document.getElementById("copyright").innerHTML =
    "&copy; " + currentYear + " Magdalena Barna";
}

addCopyrightYear();
