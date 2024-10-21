import '../scss/style.scss'
import initSwiperSections from './swiper'
import initReadMoreBtn from './readmore'
import initNavigation from './modal'

window.addEventListener('DOMContentLoaded', function () {
  initReadMoreBtn()
  initNavigation()
  initSwiperSections()
})

console.log('Works!')
