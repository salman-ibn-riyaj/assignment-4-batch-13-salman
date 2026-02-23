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

function forSelectedSection(informationCollection) {
  return `
    <div class="card-left space-y-4">
      <div>
        <h3 class="corpName text-[rgba(0,44,92,1)] font-bold">${informationCollection.corpName}</h3>
        <p class="corpType text-[rgba(100,116,139,1)]">${informationCollection.corpType}</p>
      </div>
      <small class="jobType text-[rgba(100,116,139,1)]">${informationCollection.jobType}</small><br><br>
      <button class="text-[rgba(0,44,92,1)] bg-[rgba(238,244,255,1)] p-2 rounded-md isApply">${informationCollection.isApply}</button>
      <p class="text-[rgba(50,59,73,1)] notes">${informationCollection.notes}</p>
      <div class="flex gap-4">
        <button class="text-[rgba(16,185,129,1)] btn outline outline-2 outline-[rgba(16,185,129,1)] interview-btn">Interview</button>
        <button class="btn text-[rgba(239,68,68,1)] outline outline-2 outline-[rgba(239,68,68,1)] rejected-btn">Rejected</button>
      </div>
    </div>
    <div class="card-right">
      <span class="p-3 border border-gray-300 rounded-full bg-gray-200 cursor-pointer delete-btn"><i class="fa-solid fa-trash-can"></i></span>
    </div>`;
}


mainContainer.addEventListener("click", function (event) {
 


  if (event.target.classList.contains("interview-btn")) {
    const parentCard = event.target.parentNode.parentNode;
    const corpName = parentCard.querySelector(".corpName").innerText;
    const corpType = parentCard.querySelector(".corpType").innerText;
    const jobType = parentCard.querySelector(".jobType").innerText;
    const notes = parentCard.querySelector(".notes").innerText;


    parentCard.querySelector(".isApply").innerText = "Interview";

    const cardInfo = {
      corpName,
      corpType,
      jobType,
      isApply: "Interview",
      notes,
    };

 


    rejectedList = rejectedList.filter((item) => item.corpName !== corpName);

   
    if (!interviewList.find((item) => item.corpName === corpName)) {
      interviewList.push(cardInfo);
    }

    calculateCount();

    
    if (bortomanStatus === "interview-filter-btn") senderInterview();
    if (bortomanStatus === "rejected-filter-btn") senderRejected();
  }


  else if (event.target.classList.contains("rejected-btn")) {
    const parentCard = event.target.parentNode.parentNode;
    const corpName = parentCard.querySelector(".corpName").innerText;
    const corpType = parentCard.querySelector(".corpType").innerText;
    const jobType = parentCard.querySelector(".jobType").innerText;
    const notes = parentCard.querySelector(".notes").innerText;