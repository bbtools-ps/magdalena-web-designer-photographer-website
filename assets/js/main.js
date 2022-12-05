(function () {
  // Add copyright to the footer
  const addCopyrightYearFooter = () => {
    document.getElementById(
      "copyright"
    ).innerHTML = `&copy; ${new Date().getFullYear()} Magdalena Barna`;
  };
  addCopyrightYearFooter();
})();
