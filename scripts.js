import loadCharacters from './assets/js/loadCharacters.js'

document.addEventListener('DOMContentLoaded', () => {
  const mainEl = document.querySelector('.js-main')
  let offset = 0

  loadCharacters(offset);

  let scrollTimer = null
  mainEl.addEventListener('scroll', () => {
    // Clear any previous pending timer
    if (scrollTimer) clearTimeout(scrollTimer)

    // Set new timer
    scrollTimer = setTimeout(handleScroll, 500)
  })

  // Function to handle scroll events, debounced with scrollTimer timeout
  function handleScroll() {
    scrollTimer = null
    // If the main app container is scrolled to the bottom, add 16 to the offset and load more characters
    if (mainEl.offsetHeight + mainEl.scrollTop >= (mainEl.scrollHeight - 200)) {
      offset = offset + 16

      // ToDo: Add some form of loading spinner
      loadCharacters(offset);
    }
  }
})
