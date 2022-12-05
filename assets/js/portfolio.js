// ---------- VARIABLES ----------
const PROJECTS = [
  {
    name: "Mickey Mouse",
    imageSrc: "./assets/images/portfolio_thumbs/mickey_mouse.jpg",
    imageAlt: "Drawing of a Mickey Mouse",
    page: "portfolio/mickey_mouse.html",
    category: "drawing",
  },
  {
    name: "Photo retouch",
    imageSrc: "./assets/images/portfolio_thumbs/photo_retouch.jpg",
    imageAlt: "Photo retouch",
    page: "portfolio/photo_retouch.html",
    category: "design",
  },
  {
    name: "Magazine cover",
    imageSrc: "./assets/images/portfolio_thumbs/magazine_cover.jpg",
    imageAlt: "Magazine cover",
    page: "portfolio/magazine_cover.html",
    category: "design",
  },
  {
    name: "Book cover",
    imageSrc: "./assets/images/portfolio_thumbs/book_cover.jpg",
    imageAlt: "Book cover",
    page: "portfolio/book_cover.html",
    category: "design",
  },
  {
    name: "Poster design",
    imageSrc: "./assets/images/portfolio_thumbs/poster_design.jpg",
    imageAlt: "Poster design",
    page: "portfolio/poster_design.html",
    category: "design",
  },
  {
    name: "Baby giraffe",
    imageSrc: "./assets/images/portfolio_thumbs/baby_giraffe.jpg",
    imageAlt: "Baby giraffe",
    page: "portfolio/baby_giraffe.html",
    category: "drawing",
  },
  {
    name: "Complete website: Personal",
    imageSrc: "./assets/images/portfolio_thumbs/website_1.jpg",
    imageAlt: "Complete website: Personal",
    page: "portfolio/website_1.html",
    category: "code",
  },
  {
    name: "Complete website: Krakow",
    imageSrc: "./assets/images/portfolio_thumbs/website_2.jpg",
    imageAlt: "Complete website: Krakow",
    page: "portfolio/website_2.html",
    category: "code",
  },
];

const projectsContainer = document.querySelector(".projects-container");
const portfolioFilters = document.querySelectorAll(".portfolio-filters li a");

// ---------- FUNCTIONS ----------

// Add project to the list
const addProject = (project) => {
  return `<div class="project-item card"><a href="${project.page}"><img src="${project.imageSrc}" imageAlt="${project.imageAlt}"></a>
    <h2><a href="${project.page}">${project.name}</a></h2>
    <p>${project.category}</p>
  </div>`;
};

// ---------- EVENT LISTENERS ----------

projectsContainer.innerHTML = PROJECTS.map((project) => {
  return addProject(project);
}).join("");

portfolioFilters.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // remove active class from all items
    portfolioFilters.forEach((item) => {
      item.classList.remove("active");
    });
    // add active class to current item
    item.classList.add("active");
    // filter projects
    const filterName = item.getAttribute("data-id");
    if (filterName === "all") {
      projectsContainer.innerHTML = PROJECTS.map((project) => {
        return addProject(project);
      }).join("");
    } else {
      projectsContainer.innerHTML = PROJECTS.filter((project) => {
        if (project.category === filterName) {
          return project;
        }
      })
        .map((project) => {
          return addProject(project);
        })
        .join("");
    }
  });
});
