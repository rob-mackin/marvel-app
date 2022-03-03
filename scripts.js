import loadCharacters from './assets/js/loadCharacters.js'

document.addEventListener('DOMContentLoaded', () => {
  const mainEl = document.querySelector('.js-main')
  let offset = 0

  loadCharacters(offset);

  // ToDo: debounce scroll event
  mainEl.addEventListener('scroll', () => {
    // If the main app container is scrolled to the bottom, add 16 to the offset and load more characters
    if (mainEl.offsetHeight + mainEl.scrollTop === mainEl.scrollHeight) {
      offset = offset + 16

      // ToDo: Add some form of loading spinner
      loadCharacters(offset);
    }
  })
})
