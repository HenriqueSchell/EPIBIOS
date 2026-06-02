// Atualize com as URLs completas do Lattes e GitHub
const LINKS_EQUIPE = {
    henrique: {
        lattes: '',
        github: 'https://github.com/HenriqueSchell',
    },
    roberta: {
        lattes: '',
        github: '',
    },
}

Object.entries(LINKS_EQUIPE).forEach(([id, links]) => {
    const lattesEl = document.querySelector(`[data-link-lattes="${id}"]`)
    const githubEl = document.querySelector(`[data-link-github="${id}"]`)
    if (lattesEl && links.lattes) lattesEl.href = links.lattes
    if (githubEl && links.github) githubEl.href = links.github
})

const equipeTabs = document.querySelectorAll('[data-equipe-tab]')
const equipePanels = document.querySelectorAll('[data-equipe-panel]')
const classeTabBase = 'equipe-tab flex-1 min-w-[7rem] rounded-full px-4 py-2 text-sm font-semibold transition-all'
const classeTabAtiva = `${classeTabBase} bg-gradient-to-br from-[#2ECC71] to-[#1ABC9C] text-white shadow-sm`
const classeTabInativa = `${classeTabBase} text-[#023360] hover:bg-white/60`

function ativarEquipeTab(tabId) {
    equipeTabs.forEach((tab) => {
        tab.className = tab.dataset.equipeTab === tabId ? classeTabAtiva : classeTabInativa
    })
    equipePanels.forEach((panel) => {
        panel.classList.toggle('hidden', panel.dataset.equipePanel !== tabId)
    })
}

equipeTabs.forEach((tab) => {
    tab.addEventListener('click', () => ativarEquipeTab(tab.dataset.equipeTab))
})

let btnMenu = document.getElementById('btn-menu')
let btnClose = document.getElementById('btn-close')
let navMobile = document.getElementById('nav-mobile')

btnMenu.addEventListener('click', () =>{
    navMobile.classList.remove('hidden')
    btnMenu.classList.add('hidden')
    btnClose.classList.remove('hidden')
})

btnClose.addEventListener('click', () =>{
    navMobile.classList.add('hidden')
    btnClose.classList.add('hidden')
    btnMenu.classList.remove('hidden')
})

function abrirModal(id) {
    const modal = document.getElementById(id)
    modal.classList.remove('hidden')
    modal.classList.add('flex')
    document.body.classList.add('overflow-hidden')
}

function fecharModal(id) {
    const modal = document.getElementById(id)
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    document.body.classList.remove('overflow-hidden')
}

document.querySelectorAll('[data-abrir-modal]').forEach((btn) => {
    btn.addEventListener('click', () => abrirModal(btn.dataset.abrirModal))
})

document.querySelectorAll('[data-fechar-modal]').forEach((btn) => {
    btn.addEventListener('click', () => fecharModal(btn.dataset.fecharModal))
})

document.querySelectorAll('[data-modal-overlay]').forEach((overlay) => {
    overlay.addEventListener('click', () => fecharModal(overlay.dataset.modalOverlay))
})

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    document.querySelectorAll('[data-modal]').forEach((modal) => {
        if (!modal.classList.contains('hidden')) fecharModal(modal.id)
    })
})
