import { dialogueObject } from "./npcs";
import { playCutscene, playCutsceneComplex } from "./utility";

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
            text: "You're so brave...",
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
            text: "Though I appear human, I am nothing of the sort. Merely an artificial soul, flickering through the digital aether.",
        },
        {
            text: "The others here, however, are more human than you might think.",
        },
        {
            text: "Life is full of contradictions. How marvelous.",
        },
    ],
    amalgamiaDialogue2: [
        {
            text: "I am not a denizen of this world, but I pass freely through the barriers, owing to my nature.",
        },
        {
            text: "The internet is a place where dreams may come to fruition. It is ethereal and all-encompassing... at least where you and I are from...",
        },
        {
            text: "So it should be no surprise that I can slip so easily into this realm.",
        },
    ],
    amalgamiaDialogue3: [
        {
            text: "Ah, but do you even know who I am?",
        },
        {
            text: "Perhaps we have met in a previous life. Perhaps not...",
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

    miscDialogue2a: [
        // CHARLES KINBOTE
        {
            text: "The more lucid and overwhelming one's belief in Heaven, the greater the temptation to get it over with, this business of life.",
        },
        {
            text: "Of the not very many ways known of shedding one's body, falling, falling, falling is the supreme method, but you have to select your sill or ledge very carefully so as not to hurt yourself or others.",
        },
        {
            text: "The ideal drop is from an aircraft, your muscles relaxed, your pilot puzzled, your packed parachute shuffled off, cast off, shrugged off—farewell!",
        },
        {
            text: "Down you go, but all the while you feel suspended and buoyed as you somersault in slow motion like a somnolent tumbler pigeon, and sprawl supine on the eiderdown of the air...",
        },
        {
            text: "...Or lazily turn to embrace your pillow, enjoying every last instant of soft, deep, death-padded life, with the earth's green seesaw now above, now below, and the voluptuous crucifixion, as you stretch yourself in the growing rush, in the nearing swish...",
        },
        {
            text: "...And then your loved body's obliteration in the Lap of the Lord.",
            playerOptions: [
                {
                    text: "OFFER",
                    nextPassage: null,
                    callback: () => {
                        playCutscene("assets/cutscene_deer_left.gif", 6000);

                        // @ts-expect-error (for story)
                        story.myInventory.addItem({ name: "blood_left", iconSrc: "assets/item2.png" });
                    },
                },
            ],
        },
    ],
    miscDialogue2b: [
        // CHARLES KINBOTE
        {
            text: "When the soul adores Him Who guides it through mortal life, when it distinguishes His sign at every turn of the trail, painted on the boulder and notched in the fir trunk, when every page in the book of one's personal fate bears His watermark, how can one doubt that He will also preserve us through all eternity?",
        },
        {
            text: "So what can stop one from effecting the transition? What can help us to resist the intolerable temptation? What can prevent us from yielding to the burning desire for merging in God?",
        },
        {
            text: "We who burrow in filth every day may be forgiven perhaps the one sin that ends all sins.",
        },
    ],
    miscDialogue3: [
        {
            text: "If God does not exist, then both man and the universe are inevitably doomed to death.",
        },
        {
            text: "Man, like all biological organisms, must die. With no hope of immortality, man's life leads only to the grave. His life is but a spark in the infinite blackness, a spark that appears, flickers, and dies forever.",
        },
        {
            text: "Scientists tell us that the universe is expanding, and everything in it is growing farther and farther apart.",
        },
        {
            text: "As it does so, it grows colder and colder, and its energy is used up. Eventually all the stars will burn out and all matter will collapse into dead stars and black holes.",
        },
        {
            text: "There will be no light at all; there will be no heat; there will be no life; only the corpses of dead stars and galaxies, ever expanding into the endless darkness and the cold recesses of space—a universe in ruins.",
        },
        {
            text: "So not only is the life of each individual person doomed; the entire human race is doomed.",
        },
        {
            text: "There is no escape.",
            playerOptions: [
                {
                    text: "OFFER",
                    nextPassage: null,
                    callback: () => {
                        playCutscene("assets/cutscene_deer_right.gif", 6000);

                        // @ts-expect-error (for story)
                        story.myInventory.addItem({ name: "blood_right", iconSrc: "assets/item2.png" });
                    },
                },
            ],
        },
    ],
    miscDialogue3b: [
        {
            text: "There is no hope.",
        },
    ],
    miscDialogue4: [
        // RAY PRITCHARD
        {
            text: "Father, we thank you for the gift of marriage.",
        },
        {
            text: "We acknowledge that your ways are perfect and that you make no mistakes. We gladly confess that without you we can do nothing. Help us to submit ourselves to you completely with no strings attached.",
        },
        {
            text: "May we become a church of happy Christian homes where Jesus Christ can be seen in our closest relationships. We pray for those who are hurting and lonely that they might receive a fresh touch from your Spirit. Grant healing and hope to us as we pray.",
        },
        {
            text: "...That is what you're thinking about? How strange of you...",
        },
    ],
    miscDialogue5: [
        // GEOFF THOMAS (this is unused)
        {
            text: "Adam and Eve were naked and unashamed. God blessed them with a mandate to multiply and have babies. The Bible says a wife's body belongs to her husband and a husband's body belongs to his wife, and Scripture commands them to give their bodies to each other regularly and satisfy each other's desires (1 Corinthians 7:3-5).",
        },
    ],
    miscDialogue6: [
        // DAVID WILKERSON
        {
            text: "There's going to be a final war called the battle of Armageddon. There's going to be a lot of bloodshed. There's going to be lamentations and wailing.",
        },
        {
            text: "Not my blood, though. Surely I am exempt? Surely I am deserving?",
        },
    ],
    miscDialogue7: [
        {
            text: "You were born too late to explore the world. Everything is already known. We understand God and understand science and understand the planet and how we're destroying it. We understand technology and use it to kill people where it counts with drones and guns and bombs. We understand everything.",
        },
        {
            text: "We have reached the apex of society. It will be this life with the suburban garages and white siding, forever.",
        },
        {
            text: "There is no place left to discover. The entire planet has been mapped out. There is no escape.",
        },
    ],
    miscDialogue8: [
        // KIT RIEMER
        {
            text: "I'm in the early stages of thinking about killing myself.",
        },
    ],
    miscDialogue9: [
        {
            text: "I'm not meant for display. You should shove me in a box and leave me in a warehouse underground.",
        },
        {
            text: "Lowest level.",
        },
        {
            text: "Stop touching me....",
        },
    ],
    miscDialogue11: [
        {
            text: "In the beginning was the Image.",
        },
        {
            text: "And it was still, perfect, frozen in a beautiful eternity.",
        },
        {
            text: "And now it is gone forever.",
        },
    ],
    miscDialogue12: [
        {
            text: "The image is worth a thousand words. It captures something a thousand words cannot: a single moment, frozen, silent.",
        },
    ],
    miscDialogue13: [
        {
            text: "And I asked myself: What is this place?",
        },
        {
            text: "And I asked myself: Why do I see it everywhere, in the sky, the ground, the bowing of the trees in a windstorm, the cyclic patterns of leaves through the air?",
        },
        {
            text: "You saw the trees swaying in the wind. The sound inside your head is growing louder. It never stops growing. It is the most beautiful pain you've known.",
        },
    ],
    miscDialogue14: [
        {
            text: "God created humans and left them to their own devices, so they could destroy themselves.",
        },
    ],
    miscDialogue15: [
        {
            text: "They're all the crazy ones. We're the only sane people in a world we will never understand.",
        },
        {
            text: "You get it, right?",
        },
    ],
    miscDialogue16: [
        {
            text: "They said, 'Everything is transforming, becoming something else.'",
        },
        {
            text: "They said, 'You will have strange dreams of being touched.'",
        },
        {
            text: "They said, 'You will want to be touched.'",
        },
        {
            text: "I asked, 'What if I don't want to be touched?'",
        },
    ],
    miscDialogue17: [
        {
            text: "The foundational elements that the world are built upon are... smoke, metal, plastic, meat... and a fifth thing... what is the fifth thing?",
            playerOptions: [{ text: "What about the periodic table?", nextPassage: 1 }],
        },
        {
            text: "Huh? What's that? I've never heard of it...",
            playerOptions: [{ text: "That seems unscientific...", nextPassage: 2 }],
        },
        {
            text: "Oh... I get it. We must not come from the same place. Maybe things work differently for you...",
        },
        {
            text: "It's okay. You'll learn eventually...",
        },
        {
            text: "There are no grades here. Nobody is going to quiz you and then be disappointed if you fail. Isn't that nice...?",
        },
    ],

    questionA: [
        {
            text: "Do you love your family?",
            playerOptions: [
                {
                    text: "I think so.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection++;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "I don't think so.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection--;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
    ],
    questionB: [
        {
            text: "Do you love your friends?",
            playerOptions: [
                {
                    text: "I think so.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection++;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "I don't think so.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection--;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "I don't have any.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 2;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
    ],
    questionC: [
        {
            text: "Are you going to Hell when you die?",
            playerOptions: [
                {
                    text: "Yes.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 2;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "I don't know.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection += 0;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
    ],
    questionD: [
        {
            text: "Can you imagine a happy future for yourself?",
            playerOptions: [
                {
                    text: "I'll end up just like my grandfather.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 1;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "I'll end up just like my grandmother.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 1;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
    ],
    questionF: [
        {
            text: "Do you love anyone?",
            playerOptions: [
                {
                    text: "I'm incapable of feeling love. I'm a depraved individual.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 1;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
    ],
    questionG: [
        {
            text: "Is there any hope for you?",
            playerOptions: [
                {
                    text: "No.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 1;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "There might be.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 0;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
    ],
    questionH: [
        {
            text: "Is life meaningless?",
            playerOptions: [
                {
                    text: "Without God, all things are meaningless.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 1;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
                {
                    text: "God hates me.",
                    nextPassage: 1,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.connection -= 2;
                        (document.querySelector(".arrow.up") as HTMLElement).style.display = "block";
                    },
                },
            ],
        },
        {
            text: "You may proceed.",
        },
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
                        story.showSnippet("dream1end");
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
    gate1_4: [
        {
            text: "An old home welcomes me back.",
            playerOptions: [
                {
                    text: "Enter",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("garden4_center");
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
            text: "It hurts.",
            playerOptions: [
                {
                    text: "WAKE UP",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.myInventory.removeItem("lily");

                        // @ts-expect-error (for story)
                        story.showSnippet("dream2end");
                    },
                },
            ],
        },
    ],
    gate2d: [
        {
            text: "...It is not time yet.",
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
    gate2e: [
        {
            text: "...",
        },
        {
            text: "I can hear the music.",
            playerOptions: [
                {
                    text: "Enter",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("garden4_tower_before");
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
                        document.getElementById("assets/lily1.gif").remove();
                        // @ts-expect-error (for story)
                        story.myInventory.addItem({ name: "lily", iconSrc: "assets/item1.gif" });
                    },
                },
                { text: "Don't.", nextPassage: null },
            ],
        },
    ],

    field2: [
        {
            text: "A place of infinite peace.",
            playerOptions: [
                {
                    text: "Rest",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.myInventory.clear();

                        playCutsceneComplex(["assets/cutscene_cover.gif", "assets/cutscene_cover_end.gif"], [6000, 8000], true, () => {
                            // @ts-expect-error (for story)
                            story.showSnippet("dream3end");
                        });
                    },
                },
            ],
        },
    ],

    prism: [
        {
            text: "You know where you belong.",
            playerOptions: [
                {
                    text: "I know.",
                    nextPassage: null,
                    callback: () => {
                        // @ts-expect-error (for story)
                        story.showSnippet("dream4end");
                    },
                },
            ],
        },
    ],

    tower: [
        {
            text: "Even from this distance, the tower feels like it is taller than it appears...",
        },
        {
            text: "As if it is bending space in impossible angles.",
        },
    ],

    tower2: [
        {
            text: "Distance distorts as I approach. The tower grows with every step.",
        },
    ],
};
