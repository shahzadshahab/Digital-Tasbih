let count = 0
let clickButton = document.getElementById("counter")
let saveButton = document.getElementById("previous-entry")


function increment() {
    count += 1
    counter.textContent = count
}

function save() {
    let previousEntry = count + " - "
    saveButton.textContent += previousEntry
    count = 0
    counter.textContent = count
}