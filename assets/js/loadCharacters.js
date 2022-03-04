import getData from './getData.js'
import renderCharacterCard from './renderCharacterCard.js'

// Function to load character cards into the characters window
export default async function loadCharacters(offset) {
  const charactersEl = document.querySelector('.js-characters')

  // Get the character data
  const characterData = await getData('/v1/public/characters', 16, offset)

  // Loop through returned characters and render them
  characterData.forEach(character => {
    charactersEl.appendChild(renderCharacterCard(character))
  })
}
