import { h } from "dom-chef";
import { clearAndAddCloseButton } from "./utility";

type PlayerOption = {
    text: string;
    nextPassage: number | null; // index of the dialogue this option leads to; null to close dialogue box
    callback?: Function | undefined; // callback function executed upon selecting this option. Can be anything.
};
type Dialogue = {
    text: string; // actual text contents of npc dialogue
    playerOptions?: Array<PlayerOption> | undefined; // options player has for responding
};
export type dialogueObject = { [id: string]: Array<Dialogue> };

export function addNpc(src: string, top: number, left: number, width: number, name: string | null, dialogueList: Array<Dialogue>): void {
    const container = document.getElementById("iff-snippet");

    let npc: HTMLElement;
    if (name !== null && name !== "") {
        npc = <img className="npc" src={src} id={name} alt={name}></img>;
    } else {
        npc = <img className="npc" src={src} id={src}></img>;
    }

    npc.style.top = top + "%";
    npc.style.left = left + "%";
    npc.style.width = width + "%";

    npc.addEventListener("click", () => {
        showDialogue(dialogueList);
    });

    container.append(npc);
}

export function addInteractable(top: number, left: number, bottom: number, right: number, dialogueList: Array<Dialogue>): void {
    const container = document.getElementById("iff-snippet");

    let npc = <div className="interactable"></div>;

    npc.style.top = top + "%";
    npc.style.left = left + "%";
    npc.style.bottom = bottom + "%";
    npc.style.right = right + "%";

    npc.addEventListener("click", () => {
        showDialogue(dialogueList);
    });

    container.append(npc);
}

export function showDialogue(dialogueList: Array<Dialogue>, index: number = 0) {
    const dialogue = dialogueList[index];

    const dialoguePanel = getDialoguePanel();
    clearAndAddCloseButton(dialoguePanel);

    const dialogueText = document.createElement("p");
    dialogueText.innerHTML = dialogue.text;
    dialoguePanel.append(dialogueText);

    dialoguePanel.append(<br />);
    if (dialogue.playerOptions !== undefined) {
        for (let i = 0; i < dialogue.playerOptions.length; i++) {
            const option = dialogue.playerOptions[i];
            const optionHtml = <a>{option.text}</a>;
            if (option.nextPassage !== null) {
                optionHtml.addEventListener("click", () => {
                    showDialogue(dialogueList, option.nextPassage);
                });
            } else {
                optionHtml.addEventListener("click", () => {
                    dialoguePanel.remove();
                });
            }
            if (option.callback !== undefined) {
                optionHtml.addEventListener("click", () => {
                    option.callback();
                });
            }
            dialoguePanel.append(optionHtml);

            if (i < dialogue.playerOptions.length - 1) {
                dialoguePanel.append(<span>&nbsp;|&nbsp;</span>);
            }
        }
    } else {
        let optionHtml: Element;
        if (index < dialogueList.length - 1) {
            optionHtml = <a>⮕ Next</a>;
            optionHtml.addEventListener("click", () => {
                showDialogue(dialogueList, index + 1);
            });
        } else {
            optionHtml = <a>⮕ End</a>;
            optionHtml.addEventListener("click", () => {
                dialoguePanel.remove();
            });
        }
        dialoguePanel.append(optionHtml);
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
    const dialoguePanel = <div className="absoluteAlign bottomHalf blackBg dialoguePanel"></div>;
    clearAndAddCloseButton(dialoguePanel);

    const iffSnippet = document.getElementById("iff-snippet");
    iffSnippet.append(dialoguePanel);

    return dialoguePanel;
}
