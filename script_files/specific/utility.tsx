import { h } from "dom-chef";

export function addArrow(direction: string, top: number, left: number, destination: string): void {
    const gameBg = document.querySelector(".gameBg");
    const arrow = <img className="arrow" src="assets/arrow.gif" alt="arrow"></img>;
    switch (direction) {
        case "up":
            arrow.style.transform = "rotate(270deg)";
            break;
        case "down":
            arrow.style.transform = "rotate(90deg)";
            break;
        case "left":
            arrow.style.transform = "rotate(180deg)";
            break;
        case "right":
            break;
        default:
            console.error("Trying to create arrow with invalid direction: " + direction);
            return;
    }

    arrow.style.top = top + "%";
    arrow.style.left = left + "%";

    arrow.addEventListener("click" , () => {
        // @ts-expect-error (for story)
        story.showSnippet(destination);
    })

    gameBg.append(arrow);
}

type PlayerOption = {
    text: string,
    nextPassage: number | null, // index of the dialogue this option leads to; null to close dialogue box
}
type Dialogue = {
    text: string, // actual text contents of npc dialogue
    playerOptions: Array<PlayerOption>, // options player has for responding
}

export function addNpc(src: string, top: number, left: number, width: number, name: string, dialogueList: Array<Dialogue>): void {
    const gameBg = document.querySelector(".gameBg");
    const npc = <img className="npc" src={src} alt={name}></img>;

    npc.style.top = top + "%";
    npc.style.left = left + "%";
    npc.style.width = width + "%";

    npc.addEventListener("click", () => {
        showDialogue(dialogueList, 0);
    })

    gameBg.append(npc);
}

function showDialogue(dialogueList: Array<Dialogue>, index: number) {
    const dialogue = dialogueList[index];

    const dialoguePanel = getDialoguePanel();
    clearAndAddCloseButton(dialoguePanel);

    const dialogueText = <p>{dialogue.text}</p>;
    dialoguePanel.append(dialogueText);
    if (dialogue.playerOptions !== null) {
        dialoguePanel.append(<br/>);
        for (let i = 0; i < dialogue.playerOptions.length; i++) {
            const option = dialogue.playerOptions[i];
            const optionHtml = <a>{option.text}</a>;
            if (option.nextPassage !== null) {
                optionHtml.addEventListener("click", () => {
                    showDialogue(dialogueList, option.nextPassage);
                });
            }
            else {
                optionHtml.addEventListener("click", () => {
                    dialoguePanel.remove();
                });
            }
            dialoguePanel.append(optionHtml);

            if (i < dialogue.playerOptions.length - 1) {
                dialoguePanel.append(<span>&nbsp;|&nbsp;</span>);
            }
        }
    }
}

// Returns dialogue panel; creates one if it doesn't exist
function getDialoguePanel(): Element {
    let dialoguePanel = document.querySelector(".dialoguePanel");
    if (dialoguePanel === null) {
        dialoguePanel = createDialoguePanel();
    }
    return dialoguePanel;
}

function createDialoguePanel(): HTMLElement {
    const dialoguePanel = (
        <div className="absoluteAlign bottomHalf blackBg dialoguePanel">
        </div>
    );
    clearAndAddCloseButton(dialoguePanel);

    const iffSnippet = document.getElementById("iff-snippet");
    iffSnippet.append(dialoguePanel);

    return dialoguePanel;
}

function clearAndAddCloseButton(element: Element) {
    const closeButton = (
        <button type="button" className="closeButton">
            X
        </button>
    );
    closeButton.addEventListener("click", () => {
        element.remove();
    });
    element.innerHTML = "";
    element.prepend(closeButton);
}