function renderSomethingList() {
  document.querySelector('#page').innerHTML = `
  <section class="something-list">
    ${renderSomethings()}

  </section>
  `
}

function renderSomethings() {
  return state.somethings.map(something => `
  <section class="something" data-id="${something.id}">
    <header>
      <h2>${something.name}</h2>
      <span onClick="deleteSomething(event)" >Delete</span>
    </header>
    <p>${something.clue}</p>
    <p>${something.address}</p>
  </section>
  `).join('')
}

function deleteSomethings(event) {
  const deleteBtn = event.target
  const somethingDOM = deleteBtn.closest('.something')
  const somethingId = somethingDOM.dataset.id
  fetch(`/api/somethings/${somethingId}`, {
    method: 'DELETE',
  })
  .then(() => {
    state.somethings = state.somethings.filter(t => t.id != somethingId)
    renderSomethingList()
  })
}