/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="panelFull absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

import { h } from "dom-chef";

function openMenuPanel(event: Event) {
    if (event.target === null) {
        return;
    }

    const identifier = (event.target as HTMLElement).getAttribute("identifier");
    const replacer = document.querySelector(".panelFull[identifier='" + identifier + "']");

    if (replacer === null) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    replacer.classList.remove("hidden");
}

function editMenuPanel(menuPanel: Element) {
    const closeButton = (
        <button type="button" className="closeButton">
            X
        </button>
    );
    closeButton.addEventListener("click", () => {
        menuPanel.classList.add("hidden");
    });

    menuPanel.prepend(closeButton);
}

function addMenuPanels() {
    Array.from(document.getElementsByClassName("panelOpener")).forEach((e) => {
        e.addEventListener("click", openMenuPanel);
    });

    Array.from(document.getElementsByClassName("panelFull")).forEach((e) => {
        editMenuPanel(e);
    });
}

export { addMenuPanels };
