$(function () {
    mainScript.addWrapperHtml();
    mainScript.addReplaceLink();
    mainScript.addMenuPanels();

    if (snippet.tags.includes("dream")) {
        story.myInventory.addInventory();
    }

    const bottomHalf = document.querySelector("div.absoluteAlign.bottomHalf");
    if (story.transitionMessage !== null) {
        const message = document.createElement("p");
        message.classList.add("transitionMessage");
        message.innerText = story.transitionMessage;
        bottomHalf.prepend(message);
        story.transitionMessage = null;
    }
});