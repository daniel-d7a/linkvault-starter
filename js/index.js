let searchInput = document.querySelector(".search-input");
let card = document.querySelector(".card");

let newData = INITIAL_DB;

function renderData(datatoRender) {
  const data = datatoRender
    .map((el) => {
      return `
    <div>
    <p>${el.title}</p>
    
    </div>`;
    })
    .join("");

  card.innerHTML = data;
}

renderData(newData.bookmarks);

searchInput.addEventListener("input", (e) => {
  let searchValue = searchInput.value.toLowerCase();
  const filteredData = INITIAL_DB.bookmarks.filter((el) => {
    return el.title.toLowerCase().includes(searchValue);
  });
  renderData(filteredData);
});
