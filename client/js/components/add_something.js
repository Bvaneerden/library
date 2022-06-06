function renderAddSomething() {
  document.querySelector('#page').innerHTML =  
  `
    <section class="create-something">
      <form onSubmit="createSomething(event)">
        <h2>Add Something</h2>
        <fieldset>
          <label for="">Name:</label>
          <input type="text" name="name" placeholder="name">
        </fieldset>

        <fieldset>
          <label for="">Item:</label>
          <input type="text" name="item" placeholder="Item">
        </fieldset>

        <fieldset>
          <label for="">Item2:</label>
          <input type="text" name="item2" placeholder="Item2">
        </fieldset>
        <button>Add Something</button>
      </form>
    </section>
  `
}

function createSomething(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))
  fetch('/api/somethings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(something => {
    state.somethings.push(something)
    renderSomethingList()
  })
}