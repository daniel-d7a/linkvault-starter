let card = document.querySelector(".card");
let newData = INITIAL_DB.bookmarks;

const entries = [];
newData.forEach((element, index) => {
  entries.push([element.createdAt, index]);
});

function renderData() {
  const data = newData.map((element) => {
    return `
        <p>${element.createdAt}</p>`;
  });
  card.innerHTML = Date.parse(data);
}

renderData();
