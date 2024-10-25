const menuIcon = document.querySelector(".menu-icon i.ri-menu-line");
const closeIcon = document.querySelector(".menu-icon i.ri-close-line");
const navs = document.querySelector(".navs ul");

menuIcon.addEventListener("click", () => {
  // Toggle menu open
  navs.classList.remove("menu-close");
  navs.classList.add("menu-open");
  menuIcon.style.display = "none"; // Hide menu icon
  closeIcon.style.display = "block"; // Show close icon
});

closeIcon.addEventListener("click", () => {
  // Toggle menu close
  navs.classList.remove("menu-open");
  navs.classList.add("menu-close");
  menuIcon.style.display = "block"; // Show menu icon
  closeIcon.style.display = "none"; // Hide close icon
});

document.addEventListener("DOMContentLoaded", () => {
  // Array of speaker data
  const speakers = [
    {
      name: "Yochai Benkler",
      photo: "F1.jpg",
      title: "Berkman Professor of Entrepreneurial Legal",
      description:
        "Benkler studies commons-based peer production and published in 2006.",
    },
    {
      name: "SohYeong Noh",
      photo: "F2.jpg",
      title: "Director of Art Centre Nabi and board",
      description:
        "As the main venue for new media art production in Korea, Nabi promotes..",
    },
  ];

  // Target container for dynamically generated speakers
  const speakersContainer = document.querySelector(".featured-speakers");

  // Create HTML elements for each speaker and append to the section
  speakers.forEach((speaker) => {
    const speakerDiv = document.createElement("div");
    speakerDiv.classList.add("speaker");
    speakerDiv.innerHTML = `
            <img src="${speaker.photo}" alt="${speaker.name}" class="speaker-img">
            <div class="speaker-info">
                <h4>${speaker.name}</h4>
                <p class="speaker-title">${speaker.title}</p>
                <p>${speaker.description}</p>
            </div>
        `;
    speakersContainer.appendChild(speakerDiv);
  });
});