const heading = document.querySelector(".container h1")
const result = document.querySelector("#result")
const showTitleBtn = document.querySelector("#btn")

function showTitle(title) {
  console.log(tabs)
  heading.textContent = "Tab Title"
  result.textContent = title
  showTitleBtn.style.display = 'none'
}


chrome.tabs.query(
  { active: true, currentWindow: true },
  function (tabs) {
    const activeTabTitle = tabs[0].title;
    showTitleBtn.addEventListener('click', () => showTitle(activeTabTitle))
  }
)
