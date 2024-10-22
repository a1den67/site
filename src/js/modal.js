function initNavigation() {
  const burgerButton = document.querySelector('.nav__burger')
  const aside = document.querySelector('aside')
  const navBackButtons = document.querySelectorAll('.back')
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')

  const feedbackModal = document.querySelector('.feedback')
  const callbackModal = document.querySelector('.callback')

  function openAside() {
    aside.classList.add('active')
    document.body.appendChild(overlay)
    overlay.classList.add('visible')
  }

  function openModal(modal) {
    closeAll()
    modal.classList.add('active')
    document.body.appendChild(overlay)
    overlay.classList.add('visible')
  }

  function closeAll() {
    aside.classList.remove('active')
    feedbackModal.classList.remove('active')
    callbackModal.classList.remove('active')
    overlay.classList.remove('visible')
  }

  burgerButton.addEventListener('click', openAside)

  overlay.addEventListener('click', closeAll)

  navBackButtons.forEach((button) => {
    button.addEventListener('click', closeAll)
  })

  document.querySelectorAll('.button-call, .button-chat').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('button-chat')) {
        openModal(feedbackModal)
      } else if (button.classList.contains('button-call')) {
        openModal(callbackModal)
      }
    })
  })
}

export default initNavigation
