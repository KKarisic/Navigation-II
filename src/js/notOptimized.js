// //main.js file

// const mediaQuery = window.matchMedia('(max-width: 768px)')

// const handleMediaChange = (mediaQuery) => {
//   if (mediaQuery.matches) {
//     const respMenuBtn = document.querySelector('.resp-menu')
//     const logo = document.querySelector('.logo-img')
//     const magnifier = document.querySelector('.magnifier')
//     const dropMenuMobile = document.querySelector('.drop-menu-mobile')
//     const searchFormMobile = document.querySelector('.search-form-mobile')
//     const arrowUp = document.querySelector('.arrow-up')

//     // const menuHeight = dropMenuMobile.offsetHeight;
//     // dropMenuMobile.style.height = menuHeight === 76 ? '100vh' : '0px';

//     // const handleRespMenuBtnClick = () => {
//     //   respMenuBtn.classList.toggle('active')
//     //   logo.classList.toggle('active')
//     //   magnifier.classList.toggle('active')
//     //   if (dropMenuMobile.offsetHeight === 76) {
//     //     dropMenuMobile.style.height = '100vh'
//     //   } else {
//     //     dropMenuMobile.style.height = '0px'
//     //     searchFormMobile.style.height = '0px'
//     //     dropMenuMobile.classList.remove('active')
//     //     arrowUp.classList.remove('active')
//     //     magnifier.classList.remove('active')
//     //   }
//     // }
//     //functions
//     const handleRespMenuBtnClick = (target) => {
//       if (dropMenuMobile.offsetHeight === 76) {
//         target.style.height = '100vh'
//       } else {
//         target.style.height = '0px'
//         searchFormMobile.style.height = '0px'
//         dropMenuMobile.classList.remove('active')
//         arrowUp.classList.remove('active')
//         magnifier.classList.remove('active')
//       }
//     }

//     const handleMagnifierClick = (target) => {
//       magnifier.classList.toggle('active')
//       arrowUp.classList.toggle('active')
//       if (searchFormMobile.clientHeight === 0) {
//         searchFormMobile.style.height = '35px'
//         target.classList.add('active')
//       } else {
//         searchFormMobile.style.height = '0px'
//         target.classList.remove('active')
//       }
//     }

//     const updateCurrentPointer = (element, textContent) => {
//       const currentPointer = element.querySelector('.current-pointer')
//       console.log('Current pointer', currentPointer)
//       currentPointer.innerHTML = textContent
//       console.log(textContent)
//     }

//     const setupBackButtonListeners = (backButtonSelector, levelClass) => {
//       const backButtons = document.querySelectorAll(backButtonSelector)
//       console.log('THIS IS BACK BUTTONS', backButtons)
//       backButtons.forEach((backButton) => {
//         const level = backButton.parentElement
//         console.log('ovo je level', level)
//         backButton.addEventListener('click', () => {
//           level.classList.remove('translate-left')
//         })
//       })
//     }

//     // const backBtnsSecond = document.querySelectorAll('.back-to-second')
//     // backBtnsSecond.forEach((backBtnSecond) => {
//     //   const secondLevel = backBtnSecond.parentElement

//     //   backBtnSecond.addEventListener('click', () => {
//     //     console.log('second level inside button', backBtnSecond)
//     //     secondLevel.classList.remove('translate-left')
//     //   })
//     // })

//     //for inital
//     respMenuBtn.addEventListener('click', () => {
//       respMenuBtn.classList.toggle('active')
//       logo.classList.toggle('active')
//       magnifier.classList.toggle('active')
//       handleRespMenuBtnClick(dropMenuMobile)
//     })

//     magnifier.addEventListener('click', () => {
//       handleMagnifierClick(dropMenuMobile)
//     })

//     const items = document.querySelectorAll('[id^="item-mobile-"]')

//     items.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         console.log('item clicked mobile', item)

//         //selecting corected menu-item-mobile-x
//         const menuItemId = `menu-item-mobile-${index + 1}`
//         const menuItem = document.getElementById(menuItemId)
//         const secondLevel = menuItem.querySelector('[id^="second-level-mobile-"]')
//         secondLevel.classList.add('translate-left')

//         respMenuBtn.addEventListener('click', () => {
//           // if (dropMenuMobile.offsetHeight === 76) {
//           //   secondLevel.style.height = '100vh'
//           // } else {
//           //   secondLevel.classList.remove('active')
//           //   secondLevel.classList.remove('translate-left')
//           // }
//           handleRespMenuBtnClick(secondLevel)
//           secondLevel.classList.remove('translate-left')
//         })

//         //search form comes down once the second level is opened
//         magnifier.addEventListener('click', () => {
//           handleMagnifierClick(secondLevel)
//         })

//         //back pointer position
//         // const currentPointer = secondLevel.querySelector('.current-pointer')
//         // console.log('Current pointer', currentPointer)
//         // currentPointer.innerHTML = item.textContent
//         // console.log(item.textContent)
//         updateCurrentPointer(secondLevel, item.textContent)
//       })
//     })

//     //back button for second level
//     // const backBtnsSecond = document.querySelectorAll('.back-to-second')
//     // backBtnsSecond.forEach((backBtnSecond) => {
//     //   const secondLevel = backBtnSecond.parentElement

//     //   backBtnSecond.addEventListener('click', () => {
//     //     console.log('second level inside button', backBtnSecond)
//     //     secondLevel.classList.remove('translate-left')
//     //   })
//     // })

//     setupBackButtonListeners('.back-to-second', 'second')

//     const handleSecondLevelClick = (secondLevelBtn, thirdLevelId) => {
//       const thirdLevelItem = document.getElementById(thirdLevelId)
//       // console.log('this is thirllevel item', thirdLevelItem)
//       thirdLevelItem.classList.add('translate-left')

//       //x button
//       respMenuBtn.addEventListener('click', () => {
//         // if (dropMenuMobile.offsetHeight === 76) {
//         //   thirdLevelItem.style.height = '100vh'
//         // } else {
//         //   thirdLevelItem.classList.remove('active')
//         //   thirdLevelItem.classList.remove('translate-left')
//         // }
//         handleRespMenuBtnClick(thirdLevelItem)
//         thirdLevelItem.classList.remove('translate-left')
//       })

//       //search form comes down once the third level is opened
//       magnifier.addEventListener('click', () => {
//         handleMagnifierClick(thirdLevelItem)
//       })

//       //back pointer position third levels
//       // const currentPointer = thirdLevelItem.querySelector('.current-pointer')
//       // console.log('Current pointer third level', currentPointer)
//       // currentPointer.innerHTML = secondLevelBtn.textContent
//       // console.log(secondLevelBtn.textContent)

//       updateCurrentPointer(thirdLevelItem, secondLevelBtn.textContent)

//       //ovaj deo daje vracanje na products gde kod da je klikne na treci nivo
//       const backBtnThird = thirdLevelItem.querySelector('.back-to-third')
//       const backToSpecific = backBtnThird.querySelector('.back-to-second-level-button')
//       // // backToSpecific.innerHTML = `${secondLevelBtn.textContent}`
//       backToSpecific.innerHTML = `${secondLevelBtn.parentElement.parentElement.previousElementSibling.textContent}`
//       console.log('BACK TO SPECIFIC', backToSpecific)
//       console.log('ovov je putanja gde da se vrati ', backBtnThird)

//       // const backBtnsThird = document.querySelectorAll('.back-to-third')
//       // backBtnsThird.forEach((backBtnThird) => {
//       //   const thirdLevel = backBtnThird.parentElement
//       //   backBtnThird.addEventListener('click', () => {
//       //     console.log('second level inside button', backBtnThird)
//       //     thirdLevel.classList.remove('translate-left')
//       //   })
//       // })
//       setupBackButtonListeners('.back-to-third', 'third')
//     }

//     //adding prefixes in order to get a proper class for second-level-mobile1-li-
//     const addClickEventListeners = (selectorPattern, thirdLevelPrefix) => {
//       const secondLevelBtns = document.querySelectorAll(selectorPattern)
//       secondLevelBtns.forEach((secondLevelBtn, index) => {
//         const thirdLevelId = `${thirdLevelPrefix}-${index + 1}`
//         // console.log('thirdLevelId', thirdLevelId)
//         secondLevelBtn.addEventListener('click', () => {
//           handleSecondLevelClick(secondLevelBtn, thirdLevelId)
//         })
//       })
//     }

//     // Call the function for each set of second-level buttons
//     addClickEventListeners('[id^="second-level-mobile1-li-"]', 'third-level-mobile1')
//     addClickEventListeners('[id^="second-level-mobile2-li-"]', 'third-level-mobile2')
//     addClickEventListeners('[id^="second-level-mobile3-li-"]', 'third-level-mobile3')
//     addClickEventListeners('[id^="second-level-mobile4-li-"]', 'third-level-mobile4')
//     //Na primer, ako postoji HTML element sa id="second-level-mobile1-li-1", tada će generisani ID trećeg nivoa biti "third-level-mobile1-1". Ako postoji HTML element sa id="second-level-mobile1-li-2", tada će generisani ID trećeg nivoa biti "third-level-mobile1-2", i tako dalje.

//     const handleThirdLevelClick = (thirdLevelBtn, fourthLevelId) => {
//       let fourthLevelItem = document.getElementById(fourthLevelId)
//       // console.log('this is fourthlevel item', fourthLevelItem)
//       fourthLevelItem.classList.add('translate-left')

//       //x button
//       respMenuBtn.addEventListener('click', () => {
//         if (dropMenuMobile.offsetHeight === 76) {
//           fourthLevelItem.style.height = '100vh'
//         } else {
//           fourthLevelItem.classList.remove('active')
//           fourthLevelItem.classList.remove('translate-left')
//         }
//       })

//       //search form comes down once the third level is opened
//       magnifier.addEventListener('click', () => {
//         handleMagnifierClick(fourthLevelItem)
//       })
//       //back pointer position third levels
//       // const currentPointer = fourthLevelItem.querySelector('.current-pointer')
//       // console.log(currentPointer)
//       const backBtnThird = fourthLevelItem.querySelector('.back-to-fourth')
//       const backToSpecific = backBtnThird.querySelector('.back-to-third-level-button')
//       // console.log('Current pointer fourth level', currentPointer)
//       // currentPointer.innerHTML = thirdLevelBtn.textContent
//       // console.log(thirdLevelBtn.textContent)

//       updateCurrentPointer(fourthLevelItem, thirdLevelBtn.textContent)

//       // const backBtnsSecond = document.querySelectorAll('.back-to-second')
//       // backBtnsSecond.forEach((backBtnSecond) => {
//       //   const secondLevel = backBtnSecond.parentElement

//       //   backBtnSecond.addEventListener('click', () => {
//       //     console.log('second level inside button', backBtnSecond)
//       //     secondLevel.classList.remove('translate-left')
//       //   })
//       // })

//       // const backBtnsThird = document.querySelectorAll('.back-to-third')
//       // console.log(backBtnThird)
//       // backBtnsSecond.forEach((backBtnSecond) => {
//       //   const secondLevel = backBtnSecond.parentElement

//       //   backBtnSecond.addEventListener('click', () => {
//       //     console.log('second level inside button', backBtnSecond)
//       //     secondLevel.classList.remove('translate-left')
//       //   })
//       // })
//       setupBackButtonListeners('.back-to-third', 'third')

//       //ovo treba da se napravi da radi
//       // backToSpecific.innerHTML = `${thirdLevelBtn.textContent}`
//       // console.log('ovov je putanja gde da se vrati ', backBtnThird)
//       // backBtnThird.addEventListener('click', () => {
//       //   const thirdLevel = backBtnThird.parentElement
//       //   thirdLevel.classList.remove('translate-left')
//       // })
//     }

//     const thirdLevelBtns = document.querySelectorAll('[class*="third-btn-level-mobile"]')

//     thirdLevelBtns.forEach((thirdLevelBtn) => {
//       thirdLevelBtn.addEventListener('click', () => {
//         const currentClass = thirdLevelBtn.className
//         console.log('thirl level class', currentClass)
//         const fourthLevelId = currentClass.replace('third-btn', 'fourth')
//         console.log('4 prefix', fourthLevelId)
//         console.log('Ovo je ID četvrtog nivoa:', fourthLevelId)

//         handleThirdLevelClick(thirdLevelBtn, fourthLevelId)
//       })

//       // const backBtnsFourth = document.querySelectorAll('.back-to-fourth')
//       // backBtnsFourth.forEach((backBtnFourth) => {
//       //   const fourthlevelLevel = backBtnFourth.parentElement

//       //   backBtnFourth.addEventListener('click', () => {
//       //     console.log('second level inside button', backBtnFourth)
//       //     fourthlevelLevel.classList.remove('translate-left')
//       //   })
//       // })
//       setupBackButtonListeners('.back-to-fourth', 'fourth')
//     })

//     //for desktop version
//   } else {
//     const body = document.querySelector('body')
//     const logo = document.querySelector('.logo')
//     const searchForm = document.querySelector('.search-form')
//     const topbar = document.querySelector('.topbar')
//     const mainNav = document.querySelector('.main-nav')

//     body.onscroll = () => {
//       console.log('Element scrolled!')
//       const scrollY = window.scrollY

//       if (scrollY <= 5) {
//         topbar.style.height = '36px'
//         mainNav.classList.remove('main-nav-scrolled')
//         logo.classList.remove('logo-image-scrolled')
//         searchForm.classList.remove('search-form-scrolled')
//       } else if (scrollY > 5) {
//         topbar.style.height = '0'
//         mainNav.classList.add('main-nav-scrolled')
//         logo.classList.add('logo-image-scrolled')
//         searchForm.classList.add('search-form-scrolled')
//       }
//     }

//     const items = document.querySelectorAll('[id^="item-"]')
//     const dropMenu = document.querySelector('.drop-menu')

//     let activeItem

//     items.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         console.log('item first level clicked', item)
//         if (activeItem !== item) {
//           items.forEach((otherItem) => {
//             otherItem.classList.remove('get-underline')
//           })
//           item.classList.add('get-underline')
//           activeItem = item
//         } else {
//           item.classList.remove('get-underline')
//           activeItem = null
//         }
//         const thirdLevels = document.querySelectorAll('.third-level')
//         thirdLevels.forEach((thirdLevel) => {
//           thirdLevel.style.transform = 'translateX(100%)'
//         })
//         const menuItemId = `menu-item-${index + 1}`
//         const menuItem = document.getElementById(menuItemId)
//         menuItem.classList.toggle('hidden')
//         dropMenu.style.height = menuItem.scrollHeight + 'px'
//         menuItem.style.height = 'auto'

//         const menuItems = document.querySelectorAll('[id^="menu-item-"]')
//         menuItems.forEach((otherMenuItem) => {
//           if (otherMenuItem !== menuItem) {
//             otherMenuItem.classList.add('hidden')
//           }
//         })
//         const secondLevelItems = menuItem.querySelectorAll('.second-level-li')
//         // console.log('second level items', secondLevelItems)

//         const thirdLevel = menuItem.querySelector('.third-level')
//         secondLevelItems.forEach((secondLevelItem) => {
//           secondLevelItem.addEventListener('click', () => {
//             console.log('second level ', secondLevelItem)
//             thirdLevel.style.transform = 'translateX(0)'

//             const backArrow = thirdLevel.querySelector('.back-arrow')
//             console.log(backArrow)
//             backArrow.addEventListener('click', () => {
//               console.log('backButton clicked', backArrow)
//               thirdLevel.style.transform = 'translateX(100%)'
//             })
//             backArrow.classList.remove('hidden')
//             backArrow.classList.add('flex')
//             const backPointer = backArrow.querySelector('.back-pointer')
//             const currentPointer = backArrow.querySelector('.current-pointer')
//             backPointer.innerHTML = item.textContent
//             // console.log('secondLevelItem', secondLevelItem)
//             currentPointer.innerHTML = secondLevelItem.textContent
//             // console.log('secondLevelItem Content', secondLevelItem.textContent)
//           })
//         })
//       })
//     })

//     const exitButtons = document.querySelectorAll('.exit')
//     exitButtons.forEach((exitButton) => {
//       exitButton.addEventListener('click', () => {
//         const menuItems = document.querySelectorAll('[id^="menu-item-"]')

//         const thirdLevels = document.querySelectorAll('.third-level')
//         thirdLevels.forEach((thirdLevel) => {
//           thirdLevel.style.transform = 'translateX(100%)'
//         })
//         dropMenu.style.height = '0px'
//         menuItems.forEach((menuItem) => {
//           menuItem.style.height = '0px'
//           menuItem.classList.add('hidden')
//         })
//         items.forEach((item) => {
//           item.classList.remove('get-underline')
//         })
//         activeItem = null
//       })
//     })
//   }
// }

// mediaQuery.addEventListener('change', handleMediaChange)
// handleMediaChange(mediaQuery)

// const updateBackToSpecificText = (buttonSelector, targetSelector) => {
//   const buttons = document.querySelectorAll(buttonSelector)
//   const targetElements = document.querySelectorAll(targetSelector)

//   buttons.forEach((button, index) => {
//     const textContent = targetElements[index].textContent
//     button.innerHTML = textContent
//   })
// }

//primer kako da se smanji backToSpecific
// const updateBackToSpecificText = (buttonSelector, targetSelector) => {
//   const buttons = document.querySelectorAll(buttonSelector)
//   const targetElements = document.querySelectorAll(targetSelector)

//   buttons.forEach((button, index) => {
//     const textContent = targetElements[index].textContent
//     button.innerHTML = textContent
//   })
// }// Korišćenje funkcije za ažuriranje dugmadi za treći nivo
// updateButtonsText('.back-to-third-level-button', '.secondLevelBtn');

// Korišćenje funkcije za ažuriranje dugmadi za drugi nivo
// updateButtonsText('.back-to-second-level-button', '.item');
