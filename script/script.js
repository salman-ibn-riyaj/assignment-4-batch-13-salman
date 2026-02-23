// empty array is here
let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");

let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCards = document.getElementById("allCards");
let mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");
let bortomanStatus = "all-filter-btn";

function calculateCount() {
  total.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-primary");
  interviewFilterBtn.classList.remove("btn-primary");
  rejectedFilterBtn.classList.remove("btn-primary");

  const selected = document.getElementById(id);
  bortomanStatus = id;
  selected.classList.add("btn-primary");

  if (id == "interview-filter-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    senderInterview();
  } else if (id == "all-filter-btn") {
    allCards.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    senderRejected();
  }
}
