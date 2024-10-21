function initReadMoreBtn() {
  const btn = document.querySelector('.about__link-more')
  const hiddenText1 = document.querySelector('.about__hidden')
  const hiddenText2 = document.querySelector('.about__hide-text')

  if (!btn || !hiddenText1 || !hiddenText2) return

  btn.addEventListener('click', function () {
    hiddenText1.classList.toggle('is-visible')
    hiddenText2.classList.toggle('is-visible')

    if (
      hiddenText1.classList.contains('is-visible') ||
      hiddenText2.classList.contains('is-visible')
    ) {
      btn.textContent = 'Скрыть'
      btn.classList.add('is-hidden')
    } else {
      btn.textContent = 'Читать далее'
      btn.classList.remove('is-hidden')
    }
  })
}

export default initReadMoreBtn
