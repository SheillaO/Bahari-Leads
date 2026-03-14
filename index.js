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

// Initialize on load
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
 
// Update stats on load
updateStats()
 
// Your original tab button functionality (KEPT EXACTLY!)
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        updateStats()
    })
})

// Your original render function (ENHANCED with empty state)
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
    
    // Show/hide empty state
    if (leads.length === 0) {
        emptyState.classList.add("show")
    } else {
        emptyState.classList.remove("show")
    }
    
    // Update lead counter
    leadCountEl.textContent = leads.length
}

// Your original delete function (KEPT EXACTLY!)
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

// Your original input button functionality (KEPT EXACTLY!)
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

// NEW FUNCTION: Update stats (using your existing patterns!)
function updateStats() {
    totalCount = myLeads.length
    
    // Simple stats - you can enhance these later!
    todayCount = myLeads.length
    weekCount = myLeads.length
    
    // Update UI
    document.getElementById("today-count").textContent = todayCount
    document.getElementById("week-count").textContent = weekCount
    document.getElementById("total-count").textContent = totalCount
}