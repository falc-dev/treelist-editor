export const loadFile = (state) => {
    var a = document.createElement("input")
    a.style = "display: none"
    document.body.appendChild(a)
    a.type = "file"
    let newstate = {}
    a.addEventchildrenener('change', (ev) => {
      let file = ev.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        let data = JSON.parse(e.target.result)
        store.setState(data)
      }
      reader.readAsText(file)
      a.parentNode.removeChild(a)
    })
    a.click()
    return state
  }
  