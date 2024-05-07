import { h } from "dom-chef";

type PlayerOption = {
    text: string,
    nextPassage: number | null, // index of the dialogue this option leads to; null to close dialogue box
    callback?: Function | undefined, // callback function executed upon selecting this option. Can be anything.
}
type Dialogue = {
    text: string, // actual text contents of npc dialogue
    playerOptions?: Array<PlayerOption> | undefined, // options player has for responding
}

export function addNpc(src: string, top: number, left: number, width: number, name: string, dialogueList: Array<Dialogue>): void {
    const container = document.getElementById("iff-snippet");
    const npc = <img className="npc" src={src} alt={name}></img>;

    npc.style.top = top + "%";
    npc.style.left = left + "%";
    npc.style.width = width + "%";

    npc.addEventListener("click", () => {
        showDialogue(dialogueList);
    })

    container.append(npc);
}

export function showDialogue(dialogueList: Array<Dialogue>, index: number = 0) {
    const dialogue = dialogueList[index];

    const dialoguePanel = getDialoguePanel();
    clearAndAddCloseButton(dialoguePanel);

    const dialogueText = <p>{dialogue.text}</p>;
    dialoguePanel.append(dialogueText);

    dialoguePanel.append(<br/>);
    if (dialogue.playerOptions !== undefined) {
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
            if (option.callback !== undefined) {
                optionHtml.addEventListener("click", () => {
                    option.callback();
                })
            }
            dialoguePanel.append(optionHtml);

            if (i < dialogue.playerOptions.length - 1) {
                dialoguePanel.append(<span>&nbsp;|&nbsp;</span>);
            }
        }
    }
    else {
        const optionHtml = <a>⮕ Next</a>;
        optionHtml.addEventListener("click", () => {
            showDialogue(dialogueList, index + 1);
        });
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

type dialogueObject = { [id: string]: Array<Dialogue>; };
export const dialogue: dialogueObject = {
    "treasureDialogue": [
        {
            text: "Good news: to celebrate your arrival, they planted a treasure in the eastern corner. You should go find and mark it!",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        }
    ],

    "travelDialogue": [
        {
            text: "Good day! Where are you from?"
        },
        {
            text: "Oh, Georgia? The US?"
        },
        {
            text: "Oh, what a fun place! I was born in the suburbs of Melbourne, you know, but my family moved to Canberra when I was young.",
        },
        {
            text: "How's Georgia? Tell your friends there hello for me.",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        },
    ],

    "mournDialogue": [
        {
            text: "This garden has fallen into disrepair. What a shame. What a shame. How foolish you and I were, to give up the best of all things.",
        },
        {
            text: "In return for what? A world full of smoke...",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        },
    ],

    "smokeDialogue1": [
        {
            text: "That feeling you get all the time, like you wanna choke and vomit? That's the invisible smoke. That's what kills people. Not old age, not heart disease. Invisible smoke. Everywhere. But you and I, we're the only ones who can feel it. Everyone's out there dying of invisible smoke but we're the only ones having a proper allergic reaction to it. Crazy, right?",
            playerOptions: [{text: "How do I get away from the invisible smoke?", nextPassage: 1}]
        },
        {
            text: "Uh, what? You can't. That's the whole point. Haha.",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        }
    ],

    "smokeDialogue2": [
        {
            text: "Hey. What's up?",
            playerOptions: [{text: "Can you tell me more about the invisible smoke?", nextPassage: 1}]
        },
        {
            text: "Whatddya mean?",
            playerOptions: [{text: "It has to have a name. Or a proper chemical composition. I think that's how science works.", nextPassage: 2}]
        },
        {
            text: "Whoa oh, caught me there, kid. It's called radon-108. It's a special isotope of radon that can't be detected by your human technology. You wanna go around your suburbs and take a look? It's everywhere. I promise."
        },
        {
            text: "Take care! Don't die of the invisible smoke!",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        }
    ],

    "flowerDialogue": [
        {
            text: "You need to grow beyond the confines of the physical world. A flowering is needed for this."
        },
        {
            text: "You'll need a flower, maybe two."
        },
        {
            text: "No, one will do.",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        }
    ],

    "misc1": [
        {
            text: "A new world will be born after you die."
        },
        {
            text: "And it will be more beautiful than anything you can conceive.",
            playerOptions: [{text: "⮕ End", nextPassage: null}]
        }
    ],

    "gate1": [
        {
            text: "The trees are losing their definition. There is something beyond them, shimmering..."
        },
        {
            text: "It is beautiful in a way I cannot describe.",
        },
        {
            text: "...",
        },
        {
            text: "Touch it?",
            playerOptions: [{text: "Yes", nextPassage: 4}, {text: "No", nextPassage: null}]
        },
        {
            text: "...",
        },
        {
            text: "It burns...",
            playerOptions: [{text: "WAKE UP", nextPassage: null, callback: 
                () => {
                    // @ts-expect-error (for story)
                    story.showSnippet("youA_transition");
                }
            }]
        }
    ],
    
    "gate1_2": [
        {
            text: "The trees part for me easily.",
            playerOptions: [{text: "Enter", nextPassage: null, callback: 
                () => {
                    // @ts-expect-error (for story)
                    story.showSnippet("garden2_center");
                }
            }]
        },
    ]
} 