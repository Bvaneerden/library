const state = {
  somethings: []
}

fetch('/api/somethings')
  .then(res => res.json())
  .then(somethings => {
    state.somethings = somethings
    renderSomethingList()
  })

