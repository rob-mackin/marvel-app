// Function to generate a character card element, accepts character data (object)
export default function renderCharacterCard(data) {
  const template = document.createElement('div')
  template.classList.add('c-character-card')
  template.innerHTML = `
    <h3 class="c-character-card__heading">${data.name}</h3>

    <div class="c-character-card__image">
      <img src="${data.thumbnail.path}.${data.thumbnail.extension}" alt="${data.name}">
    </div>

    <div class="c-character-card__details">
      <ul class="c-character-card__links">
        ${data.urls.map(url => `
          <li class="c-character-card__link">
            <a href="${url.url}" target="_blank">${url.type}</a>
          </li>

          <span class="c-character-card__divider">|</span>
        `).join('')}
      </ul>
    </div>
  `

  return template
}
