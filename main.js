window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(contact);

}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionEndsAt = sectionTop + sectionHeight;

  // o topo da section chegou ou ultrapassou a linha alvo
  const sectionTopReactOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReactOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionID = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }

  // console.log(`O topo da sessão chegou ou passou da linha ? ${sectionTopReactOrPassedTargetLine} `)
  // console.log(`O final da sessão passou da linha ? ${sectionEndPassedTargetLine} `)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content
  `);
