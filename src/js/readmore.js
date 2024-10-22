function initReadMoreBtn() {
  const btn = document.querySelector('.about__link-more')
  const hiddenTextOne = document.querySelector('.about__hidden')
  const hiddenTextTwo = document.querySelector('.about__hide-text')

  if (!btn || !hiddenTextOne || !hiddenTextTwo) return

  btn.addEventListener('click', function () {
    hiddenTextOne.classList.toggle('is-visible')
    hiddenTextTwo.classList.toggle('is-visible')

    if (
      hiddenTextOne.classList.contains('is-visible') ||
      hiddenTextTwo.classList.contains('is-visible')
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
