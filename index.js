let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
const emptyState = document.getElementById("empty-state");
const leadCountEl = document.getElementById("lead-count");

// New: Stats tracking
let todayCount = 0;
let weekCount = 0;
let totalCount = 0;


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
 
updateStats()
 

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        updateStats()
    })
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    
  
    if (leads.length === 0) {
        emptyState.classList.add("show")
    } else {
        emptyState.classList.remove("show")
    }
    
    leadCountEl.textContent = leads.length
}


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    updateStats()
})

let categories = ["Hot Lead", "Warm Lead", "Cold Lead", "Follow-up"];
let currentCategory = 0;

function cycleCategory() {
  currentCategory = (currentCategory + 1) % categories.length;
  // Show category on lead card
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    updateStats()
})

function searchLeads(query) {
  let filtered = [];
  for (let i = 0; i < myLeads.length; i++) {
    if (myLeads[i].includes(query)) {
      filtered.push(myLeads[i]);
    }
  }
  render(filtered);
}


function updateStats() {
    totalCount = myLeads.length
    
    
    todayCount = myLeads.length
    weekCount = myLeads.length
    
  
    document.getElementById("today-count").textContent = todayCount
    document.getElementById("week-count").textContent = weekCount
    document.getElementById("total-count").textContent = totalCount
}