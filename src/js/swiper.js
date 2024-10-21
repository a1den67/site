import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

function initSwiperSections() {
  // бренды
  const brandCards = document.querySelectorAll('.brands__card')
  const brandToggleButton = document.querySelector('.brands__button')
  let brandCardsToShow = brandCards.length
  let brandSwiper

  //  ремонт
  const repairCards = document.querySelectorAll('.repair__card')
  const repairToggleButton = document.querySelector('.repair__button')
  let repairCardsToShow = repairCards.length
  let repairSwiper

  //  цены
  const priceCards = document.querySelectorAll('.prices__card')
  let priceSwiper

  //  видимость карточек брендов
  function updateBrandCardVisible() {
    if (window.matchMedia('(min-width: 1002px)').matches) {
      brandCardsToShow = 8
    } else if (window.matchMedia('(min-width: 767px)').matches) {
      brandCardsToShow = 6
    } else {
      brandCardsToShow = brandCards.length
    }

    brandCards.forEach((card, index) => {
      card.classList.toggle('hidden', index >= brandCardsToShow)
    })
  }

  //  переключения видимости карточек брендов
  function toggleBrandCardVisible() {
    if (brandToggleButton.classList.contains('show-button')) {
      brandCards.forEach((card) => card.classList.remove('hidden'))
      brandToggleButton.classList.replace('show-button', 'hide-button')
      brandToggleButton.textContent = 'скрыть'
    } else {
      updateBrandCardVisible()
      brandToggleButton.classList.replace('hide-button', 'show-button')
      brandToggleButton.textContent = 'показать все'
    }
  }

  //  Swiper для брендов
  function initializeBrandSwiper() {
    const paginationElement = document.querySelector('.swiper-pagination')

    if (window.innerWidth < 767 && !brandSwiper) {
      const swiperContainer = document.querySelector('.brands__slider')

      if (swiperContainer) {
        brandSwiper = new Swiper(swiperContainer, {
          modules: [Navigation, Pagination],
          direction: 'horizontal',
          effect: 'slide',
          slidesPerView: 'auto',
          spaceBetween: 1,
          pagination: {
            el: paginationElement,
            clickable: true
          },
          freeMode: true,
          loop: true
        })

        brandCards.forEach((card, index) => {
          card.addEventListener('click', () => {
            if (brandSwiper) {
              brandSwiper.slideTo(index, 500)
            }
          })
        })
      } else {
        console.error('Swiper container not found')
      }
    } else if (window.innerWidth >= 767 && brandSwiper) {
      brandSwiper.destroy()
      brandSwiper = null
      paginationElement.innerHTML = ''
      updateBrandCardVisible()
    }
  }

  // видимость карточек ремонта
  function updateRepairCardVisible() {
    if (window.matchMedia('(min-width: 1002px)').matches) {
      repairCardsToShow = 4
    } else if (window.matchMedia('(min-width: 767px)').matches) {
      repairCardsToShow = 3
    } else {
      repairCardsToShow = repairCards.length
    }

    repairCards.forEach((card, index) => {
      card.classList.toggle('hidden', index >= repairCardsToShow)
    })
  }

  //видимость карточек ремонта
  function toggleRepairCardVisible() {
    if (repairToggleButton.classList.contains('show-button')) {
      repairCards.forEach((card) => card.classList.remove('hidden'))
      repairToggleButton.classList.replace('show-button', 'hide-button')
      repairToggleButton.textContent = 'скрыть'
    } else {
      updateRepairCardVisible()
      repairToggleButton.classList.replace('hide-button', 'show-button')
      repairToggleButton.textContent = 'показать все'
    }
  }

  //Swiper для ремонта
  function initializeRepairSwiper() {
    const paginationElement = document.querySelector(
      '.repair .swiper-pagination'
    )

    if (window.innerWidth < 767 && !repairSwiper) {
      repairSwiper = new Swiper('.repair__slider', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: 'auto',
        spaceBetween: 1,
        pagination: {
          el: paginationElement,
          clickable: true
        },
        freeMode: true,
        loop: true
      })

      repairCards.forEach((card, index) => {
        card.addEventListener('click', () => {
          if (repairSwiper) {
            repairSwiper.slideTo(index, 500)
          }
        })
      })
    } else if (window.innerWidth >= 767 && repairSwiper) {
      repairSwiper.destroy()
      repairSwiper = null
      paginationElement.innerHTML = ''
      updateRepairCardVisible()
    }
  }

  //  Swiper для цен
  function initializePriceSwiper() {
    const paginationElement = document.querySelector(
      '.prices .swiper-pagination'
    )

    if (window.innerWidth < 767 && !priceSwiper) {
      const swiperContainer = document.querySelector('.prices__slider')

      if (swiperContainer) {
        priceSwiper = new Swiper(swiperContainer, {
          modules: [Navigation, Pagination],
          direction: 'horizontal',
          effect: 'slide',
          slidesPerView: 'auto',
          spaceBetween: 1,
          pagination: {
            el: paginationElement,
            clickable: true
          },
          freeMode: true,
          loop: true
        })

        priceCards.forEach((card, index) => {
          card.addEventListener('click', () => {
            if (priceSwiper) {
              priceSwiper.slideTo(index, 500)
            }
          })
        })
      } else {
        console.error('Swiper container not found')
      }
    } else if (window.innerWidth >= 767 && priceSwiper) {
      priceSwiper.destroy()
      priceSwiper = null
      paginationElement.innerHTML = ''
    }
  }

  window.addEventListener('resize', () => {
    updateBrandCardVisible()
    initializeBrandSwiper()
    updateRepairCardVisible()
    initializeRepairSwiper()
    initializePriceSwiper()
  })

  if (brandToggleButton) {
    brandToggleButton.addEventListener('click', toggleBrandCardVisible)
  }

  if (repairToggleButton) {
    repairToggleButton.addEventListener('click', toggleRepairCardVisible)
  }

  updateBrandCardVisible()
  initializeBrandSwiper()
  updateRepairCardVisible()
  initializeRepairSwiper()
  initializePriceSwiper()
}

export default initSwiperSections
