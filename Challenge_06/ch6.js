
const accordionData = [
    { title: "What is JavaScript?", content: "JavaScript is used to build dynamic web pages." },
    { title: "What is the DOM?", content: "DOM represents the structure of a webpage." },
    { title: "What are events?", content: "Events are user actions like click or key press." }
];


const singleOpen = true;

const accordion = document.getElementById("accordion");



accordionData.forEach(item => {
    const section = document.createElement("div");

    const header = document.createElement("div");
    header.style.cursor = "pointer";

    const arrow = document.createElement("span");
    arrow.textContent = "▶ ";

    const title = document.createElement("span");
    title.textContent = item.title;

    header.appendChild(arrow);
    header.appendChild(title);

    const content = document.createElement("div");
    content.textContent = item.content;
    content.style.display = "none";

    header.addEventListener("click", () => {

        if (singleOpen) {
            document.querySelectorAll("#accordion div[data-open='true']").forEach(openItem => {
                openItem.dataset.open = "false";
                openItem.querySelector("div").style.display = "none";
                openItem.querySelector("span").textContent = "▶ ";
            });
        }

        const isOpen = section.dataset.open === "true";

        section.dataset.open = isOpen ? "false" : "true";
        content.style.display = isOpen ? "none" : "block";
        arrow.textContent = isOpen ? "▶ " : "▼ ";
    });

    section.appendChild(header);
    section.appendChild(content);
    accordion.appendChild(section);
});
