"use strict";
const continueBtn = document.querySelector(".continue-btn");

let categoryData;
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const categoryName = data[i].category.toLowerCase();
      const html = `<div class="category category-${categoryName}">
                      <div class="category-info">
                        <img src= ${data[i].icon}>
                        <span class="category-name category-name_${categoryName}">${data[i].category}</span>
                      </div> 

                      <div class="category-data">
                        <p class="category-score">${data[i].score} / <span>100</span>
                        </p>
                      </div>
                   </div>`;
      continueBtn.insertAdjacentHTML("beforebegin", html);
    }
  });

/*
1] refactor.
*/
