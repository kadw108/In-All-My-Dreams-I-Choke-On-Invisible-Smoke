import { dialogueObject } from "./npcs";
import { playCutscene } from "./utility";

export const dialogue: dialogueObject = {
    treasureDialogue: [
        {
            text: "Good news: to celebrate your arrival, they planted a treasure in the eastern glade. You should go find it!",
        },
    ],
    treasureDialogue2: [
        {
            text: "Oh! You've found the treasure... I can see it on you!",
        },
        {
            text: "You're so brave.",
        },
    ],

    travelDialogue: [
        {
            text: "I was born in the suburbs of Melbourne, but my family moved to Canberra when I was young.",
        },
        {
            text: "Where are you from?",
            playerOptions: [
                { text: "Georgia.", nextPassage: 2 },
                { text: "Here.", nextPassage: 4 },
            ],
        },
        {
            text: "Oh, Georgia? The United States?",
        },
        {
            text: "I think I've heard of that place... Tell your friends there hello for me.",
            playerOptions: [{ text: "⮕ End", nextPassage: null }],
        },
        {
            text: "Wait, really? Oh! That's wonderful! We can live together, and...",
        },
        {
            text: "Oh, you were joking? Oh... okay...",
        },
    ],

    mournDialogue: [
        {
            text: "This garden has fallen into disrepair. What a shame. What a shame. How foolish you and I were, to give up the best of all things.",
        },
        {
            text: "In return for what? A world full of smoke...",
        },
    ],

    smokeDialogue1: [
        {
            text: "That feeling you get all the time, like you wanna choke and vomit? That's the invisible smoke.",
        },
        {
            text: "That's what kills people. Not old age, not heart disease. Invisible smoke. Everywhere.",
        },
        {
            text: "But you and I, we're the only ones who can feel it. Everyone's out there dying of invisible smoke but we're the only ones having a proper allergic reaction to it. Crazy, right?",
            playerOptions: [{ text: "How do I get away from the invisible smoke?", nextPassage: 3 }],
        },
        {
            text: "Uh, what? You can't. That's the whole point. Haha.",
        },
    ],

    smokeDialogue2: [
        {
            text: "Hey. What's up?",
            playerOptions: [{ text: "Can you tell me more about the invisible smoke?", nextPassage: 1 }],
        },
        {
            text: "Whatddya mean?",
            playerOptions: [{ text: "It has to have a name. Or a proper chemical composition. I think that's how science works.", nextPassage: 2 }],
        },
        {
            text: "Whoa oh, caught me there, kid. It's called radon-108. It's a special isotope of radon that can't be detected by your human technology. You wanna go around your suburbs and take a look? It's everywhere. I promise.",
        },
        {
            text: "Take care! Don't die of the invisible smoke!",
        },
    ],

    flowerDialogue: [
        {
            text: "You need to grow beyond the confines of the physical world. A flowering is needed for this.",
        },
        {
            text: "You'll need a flower, maybe two... No, one will do.",
        },
    ],
    flowerDialogue2: [
        {
            text: "A fine start... Still, more is needed.",
        },
        {
            text: "Heed my words.",
        },
    ],

    amalgamiaDialogue: [
        {
            text: "Though I appear human, I am nothing of the sort. Merely an artificial soul, flickering through the digital aether."
        },
        {
            text: "Though the others appear inhuman, they are more human than you might think.",
        },
        {
            text: "Life is full of contradictions, is it not?"
        },
        {
            text: "How marvelous."
        }
    ],
    amalgamiaDialogueb: [
        {
            text: "I am no denizen. Simply a visitor, like you."
        }
    ],
    amalgamiaDialogue2: [
        {
            text: "I am not a denizen of this world, but I pass freely through the barriers, owing to my nature."
        },
        {
            text: "The internet is a place where dreams may come to fruition. It is ethereal and all-encompassing... at least where you and I are from..."
        },
        {
            text: "So it should be no surprise that I can slip so easily into this realm."
        }
    ],
    amalgamiaDialogue3: [
        {
            text: "Ah, but do you even know who I am?"
        },
        {
            text: "Perhaps we have met in a previous life. Perhaps not..."
        },
    ],

    gateDialogue: [
        {
            text: "You again...",
        },
        {
            text: "You do know you are intruding...?",
        },
        {
            text: "To cross the rubicon is no light task. I seldom see your kind.",
        },
        {
            text: "Only the worthy are allowed beyond here.",
        },
    ],
    gateDialogue2: [
        {
            text: "You're still here...",
        },
        {
            text: "At least you have marked yourself this time.",
        },
        {
            text: "It ought to be worth testing whether the gate opens for you, now.",
        },
    ],

    miscDialogue1: [
        {
            text: "A new world will be born after you die.",
        },
        {
            text: "And it will be more beautiful than anything you can conceive.",
        },
    ],
    miscDialogue2: [
        {
            text: "<em>When the soul adores Him Who guides it through mortal life, when it distinguishes His sign at every turn of the trail, painted on the boulder and notched in the fir trunk, when every page in the book of one's personal fate bears His watermark, how can one doubt that He will also preserve us through all eternity?</em>"
        },
        {
            text: "<em>So what can stop one from effecting the transition? What can help us to resist the intolerable temptation? What can prevent us from yielding to the burning desire for merging in God?</em>"
        },
        {
            text: "<em>We who burrow in filth every day may be forgiven perhaps the one sin that ends all sins.</em>"
        }
    ],
    miscDialogue3: [
        {
            text: "<em>If God does not exist, then both man and the universe are inevitably doomed to death.</em>",
        },
        {
            text: "<em>Man, like all biological organisms, must die. With no hope of immortality, man's life leads only to the grave. His life is but a spark in the infinite blackness, a spark that appears, flickers, and dies forever.</em>"
        },
        {
            text: "<em>Scientists tell us that the universe is expanding, and everything in it is growing farther and farther apart.</em>"
        },
        {
            text: "<em>As it does so, it grows colder and colder, and its energy is used up. Eventually all the stars will burn out and all matter will collapse into dead stars and black holes.</em>",
        },
        {
            text: "<em>There will be no light at all; there will be no heat; there will be no life; only the corpses of dead stars and galaxies, ever expanding into the endless darkness and the cold recesses of space—a universe in ruins.</em>"
        },
        {
            text: "<em>So not only is the life of each individual person doomed; the entire human race is doomed.</em>",
        },
        {
            text: "<em>There is no escape.</em>"
        }
    ],

    gate1: [
        {
            text: "The trees are losing their definition. There is something beyond them, shimmering...",
        },
        {
            text: "It is beautiful in a way I cannot describe.",
        },
        {
            text: "...",
        },
        {
            text: "Touch it?",
            playerOptions: [
                { text: "Yes", nextPassage: 4 },
                { text: "No", nextPassage: null },
            ],
        },
        {
            text: "...",
        },
        {
            text: "It burns...",
            playerOptions: [
                {
                    text: "WAKE UP",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("youA_transition");
                    },
                },
            ],
        },
    ],

    gate1_2: [
        {
            text: "The trees part for me easily.",
            playerOptions: [
                {
                    text: "Enter",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("garden2_center");
                    },
                },
            ],
        },
    ],
    gate1_3: [
        {
            text: "I've been here more times than I can remember...",
            playerOptions: [
                {
                    text: "Enter",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("garden3_center");
                    },
                },
            ],
        },
    ],

    gate2: [
        {
            text: "It hurts to look at...",
        },
    ],
    gate2b: [
        {
            text: "...I can hear music.",
        },
        {
            text: "Pass through?",
            playerOptions: [
                { text: "Yes", nextPassage: 2 },
                { text: "No", nextPassage: null },
            ],
        },
        {
            text: "...",
        },
        {
            text: "It is beautiful...",
        },
        {
            text: "And it hurts.",
            playerOptions: [
                {
                    text: "WAKE UP",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.myInventory.removeItem("lily");

                        // @ts-expect-error (for story)
                        story.showSnippet("homeB_transition");
                    },
                },
            ],
        },
    ],
    gate2c: [
        {
            text: "...",
        },
        {
            text: "The music is growing louder.",
            playerOptions: [
                {
                    text: "Enter",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("garden3_field");
                    },
                },
            ],
        },
    ],

    lily1: [
        {
            text: "Something growing here.",
            playerOptions: [
                {
                    text: "Pick it.",
                    nextPassage: null,
                    callback: () => {
                        playCutscene("assets/cutscene1_2.gif", 6500);
                        document.getElementById("lily1").remove();
                        // @ts-expect-error (for story)
                        story.myInventory.addItem({ name: "lily", iconSrc: "assets/item1.gif" });

                        // @ts-expect-error (for story)
                        story.myInventory.addInventoryPanel();

                        // @ts-expect-error (for story)
                        story.lilyPicked = true;
                    },
                },
                { text: "Don't.", nextPassage: null },
            ],
        },
    ],
};
