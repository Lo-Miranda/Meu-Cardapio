//navegação por tabs:
function initTabNav () {
const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
const tabContent = document.querySelectorAll('[data-tab="content"] section')
tabContent[0].classList.add('ativo')//mantem o primeiro item sempre ativo quando o site carrega

//verifica se os itens existem na página para evitar erros:
if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
}

//ativar a tab quando for clicada (e desativar quando clicar em outra):
function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo')
    })
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao )
}


// evento de clique:
tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener('click',function() {
        activeTab(index)
    })
})
}
initTabNav()

//accordion list - FAQ:
function initAccordion () {
const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
if (accordionList.length) {
accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')

function activeAccordion() {
    this.classList.toggle('ativo')
   this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
})
}
}
initAccordion()

//Scroll Suave
function initScrollSuave () {
const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#')

function scrollToSection (event) {
    event.preventDefault ()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior:'smooth',
        block: 'start',
    })


   /*scroll normal:
    const topo = section.offsetTop     
    window.scrollToSection ({
        top: topo,
        behavior: smooth,

    } )*/
    
} 

linksInternos.forEach ((link) => {
    link.addEventListener('click', scrollToSection)
}) 
}

initScrollSuave()



//Animação ao Scroll
function initAnimacaoScroll() {
const sections = document.querySelectorAll('[data-anime="scroll"]')

if(sections.length) {
const fracaoWindow = window.innerHeight * 0.6

function animaScroll () {
 sections.forEach ((section) => {
     const sectionTop = section.getBoundingClientRect().top
     const isSectionVisible = (sectionTop -fracaoWindow) < 0
     if(isSectionVisible) {
         section.classList.add('ativo')
     }     
     else {
        section.classList.remove('ativo')
     }

 })
}
animaScroll()

window.addEventListener('scroll', animaScroll)
    }   
}
initAnimacaoScroll()