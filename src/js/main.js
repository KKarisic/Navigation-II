//main.js file

const mediaQuery = window.matchMedia('(max-width: 768px)')

const handleMediaChange = (mediaQuery) => {
  if (mediaQuery.matches) {
    const respMenuBtn = document.querySelector('.resp-menu')
    const logo = document.querySelector('.logo-img')
    const magnifier = document.querySelector('.magnifier')
    const dropMenuMobile = document.querySelector('.drop-menu-mobile')
    const searchFormMobile = document.querySelector('.search-form-mobile')
    const arrowUp = document.querySelector('.arrow-up')

    //functions
    const handleRespMenuBtnClick = (target) => {
      if (dropMenuMobile.offsetHeight === 76) {
        target.style.height = '100vh'
      } else {
        target.style.height = '0px'
        searchFormMobile.style.height = '0px'
        dropMenuMobile.classList.remove('active')
        arrowUp.classList.remove('active')
        magnifier.classList.remove('active')
      }
    }

    const handleMagnifierClick = (target) => {
      magnifier.classList.toggle('active')
      arrowUp.classList.toggle('active')
      if (searchFormMobile.clientHeight === 0) {
        searchFormMobile.style.height = '35px'
        target.classList.add('active')
      } else {
        searchFormMobile.style.height = '0px'
        target.classList.remove('active')
      }
    }

    const updateCurrentPointer = (element, textContent) => {
      newFunction(element, textContent)
    }

    const setupBackButtonListeners = (backButtonSelector) => {
      const backButtons = document.querySelectorAll(backButtonSelector)
      backButtons.forEach((backButton) => {
        const level = backButton.parentElement
        backButton.addEventListener('click', () => {
          level.classList.remove('translate-left')
        })
      })
    }

    //for inital
    respMenuBtn.addEventListener('click', () => {
      respMenuBtn.classList.toggle('active')
      logo.classList.toggle('active')
      magnifier.classList.toggle('active')
      handleRespMenuBtnClick(dropMenuMobile)
    })

    magnifier.addEventListener('click', () => {
      handleMagnifierClick(dropMenuMobile)
    })

    const items = document.querySelectorAll('[id^="item-mobile-"]')

    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        console.log('item clicked mobile', item)

        //selecting corected menu-item-mobile-x
        const menuItemId = `menu-item-mobile-${index + 1}`
        const menuItem = document.getElementById(menuItemId)
        const secondLevel = menuItem.querySelector('[id^="second-level-mobile-"]')
        secondLevel.classList.add('translate-left')

        const backToSpecificSeconds = document.querySelectorAll('.back-to-second-level-button')
        backToSpecificSeconds.forEach((backToSpecificSecond) => {
          const textContent = item.textContent
          backToSpecificSecond.innerHTML = textContent
        })

        respMenuBtn.addEventListener('click', () => {
          handleRespMenuBtnClick(secondLevel)
          secondLevel.classList.remove('translate-left')
        })

        //search form comes down once the second level is opened
        magnifier.addEventListener('click', () => {
          handleMagnifierClick(secondLevel)
        })

        updateCurrentPointer(secondLevel, item.textContent)
        console.log(item.textContent)
      })
    })
    setupBackButtonListeners('.back-to-second', 'second')

    const handleSecondLevelClick = (secondLevelBtn, thirdLevelId) => {
      const thirdLevelItem = document.getElementById(thirdLevelId)
      thirdLevelItem.classList.add('translate-left')

      respMenuBtn.addEventListener('click', () => {
        handleRespMenuBtnClick(thirdLevelItem)
        thirdLevelItem.classList.remove('translate-left')
      })

      //search form comes down once the third level is opened
      magnifier.addEventListener('click', () => {
        handleMagnifierClick(thirdLevelItem)
      })

      const backToSpecificThirds = document.querySelectorAll('.back-to-third-level-button')
      backToSpecificThirds.forEach((backToSpecificThird) => {
        const textContent = secondLevelBtn.textContent
        backToSpecificThird.innerHTML = textContent
      })

      updateCurrentPointer(thirdLevelItem, secondLevelBtn.textContent)
      setupBackButtonListeners('.back-to-third', 'third')
    }
    //adding prefixes in order to get a proper class for second-level-mobile1-li-
    const addClickEventListeners = (selectorPattern, thirdLevelPrefix) => {
      const secondLevelBtns = document.querySelectorAll(selectorPattern)
      secondLevelBtns.forEach((secondLevelBtn, index) => {
        const thirdLevelId = `${thirdLevelPrefix}-${index + 1}`
        secondLevelBtn.addEventListener('click', () => {
          handleSecondLevelClick(secondLevelBtn, thirdLevelId)
        })
      })
    }
    // Call the function for each set of second-level buttons
    addClickEventListeners('[id^="second-level-mobile1-li-"]', 'third-level-mobile1')
    addClickEventListeners('[id^="second-level-mobile2-li-"]', 'third-level-mobile2')
    addClickEventListeners('[id^="second-level-mobile3-li-"]', 'third-level-mobile3')
    addClickEventListeners('[id^="second-level-mobile4-li-"]', 'third-level-mobile4')
    //Na primer, ako postoji HTML element sa id="second-level-mobile1-li-1", tada će generisani ID trećeg nivoa biti "third-level-mobile1-1". Ako postoji HTML element sa id="second-level-mobile1-li-2", tada će generisani ID trećeg nivoa biti "third-level-mobile1-2", i tako dalje.

    const handleThirdLevelClick = (thirdLevelBtn, fourthLevelId) => {
      let fourthLevelItem = document.getElementById(fourthLevelId)
      fourthLevelItem.classList.add('translate-left')

      respMenuBtn.addEventListener('click', () => {
        if (dropMenuMobile.offsetHeight === 76) {
          fourthLevelItem.style.height = '100vh'
        } else {
          fourthLevelItem.classList.remove('active')
          fourthLevelItem.classList.remove('translate-left')
        }
      })

      //search form comes down once the third level is opened
      magnifier.addEventListener('click', () => {
        handleMagnifierClick(fourthLevelItem)
      })
      updateCurrentPointer(fourthLevelItem, thirdLevelBtn.textContent)
      setupBackButtonListeners('.back-to-third', 'third')
    }

    const thirdLevelBtns = document.querySelectorAll('[class*="third-btn-level-mobile"]')

    thirdLevelBtns.forEach((thirdLevelBtn) => {
      thirdLevelBtn.addEventListener('click', () => {
        const currentClass = thirdLevelBtn.className
        console.log('thirl level class', currentClass)
        const fourthLevelId = currentClass.replace('third-btn', 'fourth')
        console.log('4 prefix', fourthLevelId)
        console.log('Ovo je ID četvrtog nivoa:', fourthLevelId)

        handleThirdLevelClick(thirdLevelBtn, fourthLevelId)
      })

      setupBackButtonListeners('.back-to-fourth', 'fourth')
    })

    //for desktop version
  } else {
    const body = document.querySelector('body')
    const logo = document.querySelector('.logo')
    const searchForm = document.querySelector('.search-form')
    const topbar = document.querySelector('.topbar')
    const mainNav = document.querySelector('.main-nav')

    //functions
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY <= 5) {
        topbar.style.height = '36px'
        mainNav.classList.remove('main-nav-scrolled')
        logo.classList.remove('logo-image-scrolled')
        searchForm.classList.remove('search-form-scrolled')
      } else if (scrollY > 5) {
        topbar.style.height = '0'
        mainNav.classList.add('main-nav-scrolled')
        logo.classList.add('logo-image-scrolled')
        searchForm.classList.add('search-form-scrolled')
      }
    }

    const handleExitButtons = () => {
      const menuItems = document.querySelectorAll('[id^="menu-item-"]')

      const thirdLevels = document.querySelectorAll('.third-level')
      thirdLevels.forEach((thirdLevel) => {
        thirdLevel.style.transform = 'translateX(100%)'
      })
      dropMenu.style.height = '0px'
      menuItems.forEach((menuItem) => {
        menuItem.style.height = '0px'
        menuItem.classList.add('hidden')
      })
      items.forEach((item) => {
        item.classList.remove('get-underline')
      })
      activeItem = null
    }

    //initial
    body.onscroll = () => {
      // console.log('Element scrolled!')
      handleScroll()
    }

    const items = document.querySelectorAll('[id^="item-"]')
    const dropMenu = document.querySelector('.drop-menu')
    let activeItem

    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        console.log('item first level clicked', item)
        if (activeItem !== item) {
          items.forEach((otherItem) => {
            otherItem.classList.remove('get-underline')
          })
          item.classList.add('get-underline')
          activeItem = item
        } else {
          item.classList.remove('get-underline')
          activeItem = null
        }

        const thirdLevels = document.querySelectorAll('.third-level')
        thirdLevels.forEach((thirdLevel) => {
          thirdLevel.style.transform = 'translateX(100%)'
        })

        const menuItemId = `menu-item-${index + 1}`
        const menuItem = document.getElementById(menuItemId)
        menuItem.classList.toggle('hidden')
        dropMenu.style.height = menuItem.scrollHeight + 'px'
        menuItem.style.height = 'auto'

        const menuItems = document.querySelectorAll('[id^="menu-item-"]')
        menuItems.forEach((otherMenuItem) => {
          if (otherMenuItem !== menuItem) {
            otherMenuItem.classList.add('hidden')
          }
        })
        const secondLevelItems = menuItem.querySelectorAll('.second-level-li')
        // console.log('second level items', secondLevelItems)

        const handleBackArrow = () => {
          secondLevelItems.forEach((secondLevelItem) => {
            secondLevelItem.addEventListener('click', () => {
              console.log('second level ', secondLevelItem)
              thirdLevel.style.transform = 'translateX(0)'

              backArrow.classList.remove('hidden')
              backArrow.classList.add('flex')
              const backPointer = backArrow.querySelector('.back-pointer')
              const currentPointer = backArrow.querySelector('.current-pointer')
              backPointer.innerHTML = item.textContent
              currentPointer.innerHTML = secondLevelItem.textContent
            })
          })
        }

        const thirdLevel = menuItem.querySelector('.third-level')
        const backArrow = thirdLevel.querySelector('.back-arrow')

        backArrow.addEventListener('click', () => {
          thirdLevel.style.transform = 'translateX(100%)'
        })
        handleBackArrow()
      })
    })

    const exitButtons = document.querySelectorAll('.exit')

    exitButtons.forEach((exitButton) => {
      exitButton.addEventListener('click', () => {
        handleExitButtons()
      })
    })
  }
}

mediaQuery.addEventListener('change', handleMediaChange)
handleMediaChange(mediaQuery)
function newFunction(element, textContent) {
  const currentPointer = element.querySelector('.current-pointer')
  console.log('Current pointer', currentPointer)
  currentPointer.innerHTML = textContent
  console.log(textContent)
}
