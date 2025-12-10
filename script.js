let check = 0;
const addUnAddBtnEl = document.querySelector("#add-unAdd-Btn");
const userNameEl = document.querySelector("#relation");

addUnAddBtnEl.addEventListener("click", function () {
  if (check === 0) {
    check = 1;
    userNameEl.innerHTML = "Following";
    userNameEl.classList.toggle("rel-follower");
    addUnAddBtnEl.classList.toggle("unfollow");
    addUnAddBtnEl.innerHTML = `Unfollow <i class="ri-user-unfollow-fill"></i>`;
  } else {
    check = 0;
    userNameEl.innerHTML = "Stranger";
    userNameEl.classList.toggle("rel-follower");
    addUnAddBtnEl.classList.toggle("unfollow");
    addUnAddBtnEl.innerHTML = `Follow <i class="ri-user-follow-fill"></i>`;
  }
});
