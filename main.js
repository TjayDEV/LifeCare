
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackOnScroll()

   active(home)
   active(services)
   active(about)
   active(contact)
}

function active(section) 
{
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop

    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    const sectionBoundaries = 
    sectionTopReachOrPassedTargetline && 
    !sectionEndPassedTargetline


    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }

}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigate.classList.add('scroll');
    }
    else {
        navigate.classList.remove('scroll');
    }
}

function showBackOnScroll() {
    if (scrollY > 550) {
        back.classList.add('show');
    }
    else {
        back.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: '800',
}).reveal(` 
#home, 
#home img, 
#home .stats,
#services,
#services header,
.card,
#about,
#about header,
#about .content,
#about img,
#contact,
#contact header,
#contact ul,
#contact a,
#contact img,
footer
`);

