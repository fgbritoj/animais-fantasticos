function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tab-menu li')
    const tabContent = document.querySelectorAll('.js-tab-content section')

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach(content => {
                content.classList.remove('ativo')
            })

            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((menu, index) => {
            menu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

function initAccordion() {
    
    const faqLista = document.querySelectorAll('.faq-lista dt')
    
    faqLista[0].classList.add('ativo')
    faqLista[0].nextElementSibling.classList.add('ativo')
    
    faqLista.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.classList.toggle('ativo')
            dt.nextElementSibling.classList.toggle('ativo')
        })
    })
}

function initScrollSmooth() {
    const links = document.querySelectorAll('.menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    links.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.5

        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0

                if(isSectionVisible) {
                    section.classList.add('ativo')
                } 
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}

initTabNav()
initAccordion()
initScrollSmooth()
initAnimacaoScroll()