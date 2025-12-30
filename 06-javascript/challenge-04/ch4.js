// Tabs Data
const tabsData = [
    { title: "Overview", content: "Overview content here..." },
    { title: "Features", content: "Features content here..." },
    { title: "Pricing", content: "Pricing content here..." }
];

const tabButtons = document.getElementById("tabButtons");
const tabContent = document.getElementById("tabContent");

let activeIndex = 0;



//   Create Tabs Dynamically

function createTabs() {
    tabButtons.innerHTML = "";

    tabsData.forEach((tab, index) => {
        const btn = document.createElement("button");
        btn.textContent = tab.title;
        btn.setAttribute("role", "tab");
        btn.setAttribute("tabindex", index === 0 ? "0" : "-1");

        if (index === 0) btn.classList.add("active");

        btn.addEventListener("click", () => setActiveTab(index));

        btn.addEventListener("keydown", (e) => handleKeyNavigation(e, index));

        tabButtons.appendChild(btn);
    });

    showContent(0);
}


//    Set Active Tab

function setActiveTab(index) {
    const buttons = tabButtons.querySelectorAll("button");

    buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
        btn.setAttribute("tabindex", i === index ? "0" : "-1");
    });

    activeIndex = index;
    showContent(index);
    buttons[index].focus();
}


//    Show Tab Content


function showContent(index) {
    tabContent.textContent = tabsData[index].content;
}


//    Keyboard Navigation

function handleKeyNavigation(event, index) {
    if (event.key === "ArrowRight") {
        const next = (index + 1) % tabsData.length;
        setActiveTab(next);
    }

    if (event.key === "ArrowLeft") {
        const prev = (index - 1 + tabsData.length) % tabsData.length;
        setActiveTab(prev);
    }
}


//    Initial Load

createTabs();
