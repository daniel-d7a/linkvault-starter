const card = document.querySelector(".card");
const newData = INITIAL_DB.bookmarks;
const sortForm = document.querySelector(".filter-form__input");
function sortByData() {
  const entries = [];
  newData.forEach((element, index) => {
    entries.push([Date.parse(element.createdAt), index]);
  });
  entries.sort((a, b) => a[0] - b[0]);
  const data = entries.map((element) => newData[element[1]]);
  return data;
}

function sortAlphabetically() {
  const sorted = [...newData];
  sorted.sort((a, b) => a.title.localeCompare(b.title));
  return sorted;
}

function sortAlphabeticallyReversed() {
  const sortedReverse = [...newData];
  sortedReverse.sort((a, b) => b.title.localeCompare(a.title));
  return sortedReverse;
}

sortForm.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  let sortedData = [];

  if (selectedValue === "date") {
    sortedData = sortByData();
  } else if (selectedValue === "alphabetical") {
    sortedData = sortAlphabetically();
  } else if (selectedValue === "alphabetical-reversed") {
    sortedData = sortAlphabeticallyReversed();
  }
  const finishedData = sortedData.map((el) => {
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
                onclick="my_modal_edit.showModal()"
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
  });
  card.innerHTML = finishedData.join("");
});
