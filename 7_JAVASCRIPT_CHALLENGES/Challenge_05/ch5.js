
//    Modal Factory Function


function createModal(config) {
    const overlay = document.createElement("div");
    const modal = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = config.title;

    const content = document.createElement("p");
    content.textContent = config.content;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";

    const footer = document.createElement("div");

    overlay.appendChild(modal);
    modal.appendChild(title);
    modal.appendChild(closeBtn);
    modal.appendChild(content);
    modal.appendChild(footer);
    document.body.appendChild(overlay);

    /* Prevent body scroll */
    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    function enableScroll() {
        document.body.style.overflow = "";
    }

    /* Close modal */
    function closeModal() {
        enableScroll();
        overlay.remove();
        document.removeEventListener("keydown", escHandler);
    }

    /* Escape key close */
    function escHandler(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    /* Overlay click close */
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    /* X button close */
    closeBtn.addEventListener("click", closeModal);

    /* Buttons from config */
    config.buttons.forEach(btn => {
        const button = document.createElement("button");
        button.textContent = btn.text;
        button.addEventListener("click", () => {
            btn.onClick();
            closeModal();
        });
        footer.appendChild(button);
    });

    return {
        open() {
            disableScroll();
            document.addEventListener("keydown", escHandler);
        },
        close: closeModal
    };
}


//   Example Usage

document.getElementById("openModal").addEventListener("click", () => {
    const modal = createModal({
        title: "Confirm Delete",
        content: "Are you sure you want to delete this item?",
        buttons: [
            {
                text: "Cancel",
                onClick: () => {}
            },
            {
                text: "Delete",
                onClick: () => {
                    console.log("Item deleted");
                }
            }
        ]
    });

    modal.open();
});
