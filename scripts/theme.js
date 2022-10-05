/* Desenvolva sua lógica aqui ... */

function darkMode() {
    const btnDm = document.getElementById('darkMode')

    const html = document.querySelector('html')

    btnDm.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        btnDm.classList.toggle('text-white')

        const dmPref = localStorage.getItem('darkmode')

        if (!dmPref) {
            localStorage.setItem('darkmode', true)
        }

        if (dmPref) {
            localStorage.removeItem('darkmode')
        }

        if (btnDm.classList.contains('text-white')) {
            btnDm.innerText = 'brightness_7'

        } else {
            btnDm.innerText = "clear_night"
        }
    })
}

const dmPref = localStorage.getItem('darkmode')

  if(dmPref) {
    document.querySelector('html').classList.add('dark-mode')
  }


darkMode()

