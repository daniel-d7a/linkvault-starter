let searchInput = document.querySelector(".search-input");
let card = document.querySelector(".card");

let newData = INITIAL_DB;

function renderData(datatoRender) {
  const data = datatoRender
    .map((el) => {
      return `
        <div class="border overflow-hidden rounded-[12px]">

          ${el.image ? `<img class="object-cover w-full h-[230px]" src="${el.image}" alt="react" />` : `<div class="h-[230px] w-full border border-2 border-red-500"></div>`}

          <div class="p-4">
            <div class="flex justify-between mb-[10px] mt-[18px] items-center">
              <a href="" class="text-[12px] line-height:[16px] text-[#62748E]"
                ><i class="fa-solid fa-globe"></i> ${el.domain}
              </a>
              <span
                class="text-[11px] line-height:[16.5px] text-[#45556C] font-[500] py-[2px] px-[8px] rounded-[25276400px] bg-[#F1F5F9]"
                >Frontend & React</span
              >
            </div>
            <div class="flex flex-col gap-[6px]">
              <p
                class="text-[14px] line-height-[19.25px] font-[600] text-[#0F172B]"
              >
                ${el.title}
              </p>
              <p
                class="text-[12px] line-height-[19.25px] font-[400] text-[#62748E] border-b pb-[12px]"
              >
                ${el.description}
              </p>
            </div>
            <div class="flex items-center justify-end pt-[10.75px] gap-[4px]">
              <span
                class="text-[#FFB900] cursor-pointer hover:bg-[#FFFBEB] w-[28px] text-center rounded-[6px]"
              >
                <i class="fa-solid fa-star"></i
              ></span>
              <!-- Logic favourite icon -->
              <span
                class="bg-[#FFFBEB] cursor-pointer hidden text-[#FFB900] w-[28px] text-center rounded-[6px]"
              >
                <i class="fa-regular fa-star"></i>
              </span>
              <!-- end of Logic favourite icon -->
              <span
                class="text-[#90A1B9] cursor-pointer w-[28px] text-center rounded-[6px]"
                ><i class="fa-solid fa-pen"></i
              ></span>
              <span
                class="text-[#90A1B9] cursor-pointer w-[28px] text-center rounded-[6px]"
                ><i class="fa-solid fa-trash-can"></i
              ></span>
            </div>
          </div>
        </div>
    
    
    `;
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
