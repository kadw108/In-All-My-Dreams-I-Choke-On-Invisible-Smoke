var mainScript = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // index.js
  var script_files_exports = {};
  __export(script_files_exports, {
    Inventory: () => Inventory,
    addArrow: () => addArrow,
    addMenuPanels: () => addMenuPanels,
    addNpc: () => addNpc,
    addReplaceLink: () => addReplaceLink,
    addWrapperHtml: () => addWrapperHtml,
    dialogue: () => dialogue,
    showDialogue: () => showDialogue
  });

  // ../node_modules/svg-tag-names/index.js
  var svgTagNames = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "animation",
    "audio",
    "canvas",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "discard",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "handler",
    "hkern",
    "iframe",
    "image",
    "line",
    "linearGradient",
    "listener",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "prefetch",
    "radialGradient",
    "rect",
    "script",
    "set",
    "solidColor",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "tbreak",
    "text",
    "textArea",
    "textPath",
    "title",
    "tref",
    "tspan",
    "unknown",
    "use",
    "video",
    "view",
    "vkern"
  ];

  // ../node_modules/dom-chef/index.js
  var svgTags = new Set(svgTagNames);
  svgTags.delete("a");
  svgTags.delete("audio");
  svgTags.delete("canvas");
  svgTags.delete("iframe");
  svgTags.delete("script");
  svgTags.delete("video");
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var isFragment = (type) => type === DocumentFragment;
  var setCSSProps = (element, style) => {
    for (const [name, value] of Object.entries(style)) {
      if (name.startsWith("-")) {
        element.style.setProperty(name, value);
      } else if (typeof value === "number" && !IS_NON_DIMENSIONAL.test(name)) {
        element.style[name] = `${value}px`;
      } else {
        element.style[name] = value;
      }
    }
  };
  var create = (type) => {
    if (typeof type === "string") {
      if (svgTags.has(type)) {
        return document.createElementNS("http://www.w3.org/2000/svg", type);
      }
      return document.createElement(type);
    }
    if (isFragment(type)) {
      return document.createDocumentFragment();
    }
    return type(type.defaultProps);
  };
  var setAttribute = (element, name, value) => {
    if (value === void 0 || value === null) {
      return;
    }
    if (/^xlink[AHRST]/.test(name)) {
      element.setAttributeNS("http://www.w3.org/1999/xlink", name.replace("xlink", "xlink:").toLowerCase(), value);
    } else {
      element.setAttribute(name, value);
    }
  };
  var addChildren = (parent, children) => {
    for (const child of children) {
      if (child instanceof Node) {
        parent.appendChild(child);
      } else if (Array.isArray(child)) {
        addChildren(parent, child);
      } else if (typeof child !== "boolean" && typeof child !== "undefined" && child !== null) {
        parent.appendChild(document.createTextNode(child));
      }
    }
  };
  var booleanishAttributes = /* @__PURE__ */ new Set([
    // These attributes allow "false" as a valid value
    "contentEditable",
    "draggable",
    "spellCheck",
    "value",
    // SVG-specific
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ]);
  var h = (type, attributes, ...children) => {
    var _a;
    const element = create(type);
    addChildren(element, children);
    if (element instanceof DocumentFragment || !attributes) {
      return element;
    }
    for (let [name, value] of Object.entries(attributes)) {
      if (name === "htmlFor") {
        name = "for";
      }
      if (name === "class" || name === "className") {
        const existingClassname = (_a = element.getAttribute("class")) !== null && _a !== void 0 ? _a : "";
        setAttribute(element, "class", (existingClassname + " " + String(value)).trim());
      } else if (name === "style") {
        setCSSProps(element, value);
      } else if (name.startsWith("on")) {
        const eventName = name.slice(2).toLowerCase().replace(/^-/, "");
        element.addEventListener(eventName, value);
      } else if (name === "dangerouslySetInnerHTML" && "__html" in value) {
        element.innerHTML = value.__html;
      } else if (name !== "key" && (booleanishAttributes.has(name) || value !== false)) {
        setAttribute(element, name, value === true ? "" : value);
      }
    }
    return element;
  };

  // addWrapperHtml.tsx
  function addWrapperHtml() {
    if (document.getElementById("contents") === null) {
      const iffSnippet = document.getElementById("iff-snippet");
      if (iffSnippet === null) {
        console.error("iffSnippet is null");
        return;
      }
      iffSnippet.remove();
      const contents = /* @__PURE__ */ h("div", { id: "contents" }, /* @__PURE__ */ h("div", { id: "bg", className: "fullscreenBg" }), /* @__PURE__ */ h("div", { id: "screenCover", className: "fullscreenBg" }), /* @__PURE__ */ h("div", { id: "passages" }, /* @__PURE__ */ h("div", { id: "screenBg" }), /* @__PURE__ */ h("div", { id: "screenContents", className: "absoluteAlign" }, iffSnippet)));
      document.getElementById("iff-story")?.appendChild(contents);
    }
  }

  // addReplaceLink.ts
  function clickReplaceLink(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacers = document.querySelectorAll(".linkReplacer[identifier='" + identifier + "']");
    if (replacers.length === 0) {
      console.error("Replacelink without replacer! Identifier " + identifier);
      console.error(event.target);
      return;
    }
    replacers.forEach((r) => {
      if (!r.classList.contains("hidden")) {
        return;
      }
      r.classList.remove("hidden");
    });
    const removed = document.querySelectorAll(".removedOnClick[identifier='" + identifier + "']");
    removed.forEach((r) => {
      r.classList.add("hidden");
    });
  }
  function clickHideText(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacers = document.querySelectorAll(".linkReplacer[identifier='" + identifier + "']");
    if (replacers.length === 0) {
      console.error("Replacelink without replacer! Identifier " + identifier);
      console.error(event.target);
      return;
    }
    replacers.forEach((r) => {
      if (r.classList.contains("hidden")) {
        return;
      }
      r.classList.add("hidden");
    });
    const removed = document.querySelectorAll(".removedOnClick[identifier='" + identifier + "']");
    removed.forEach((r) => {
      r.classList.remove("hidden");
    });
  }
  function addReplaceLink() {
    Array.from(document.getElementsByClassName("linkReplaced")).forEach((e) => {
      e.addEventListener("click", clickReplaceLink);
    });
    Array.from(document.getElementsByClassName("linkHider")).forEach((e) => {
      e.addEventListener("click", clickHideText);
    });
  }

  // addMenuPanels.tsx
  function openMenuPanel(event) {
    if (event.target === null) {
      return;
    }
    const identifier = event.target.getAttribute("identifier");
    const replacer = document.querySelector(".panelFull[identifier='" + identifier + "']");
    if (replacer === null) {
      console.error("Replacelink without replacer!");
      console.error(event.target);
      return;
    }
    replacer.classList.remove("hidden");
  }
  function editMenuPanel(menuPanel) {
    const closeButton = /* @__PURE__ */ h("button", { type: "button", className: "closeButton" }, "X");
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

  // specific/utility.tsx
  function addCloseButton(element) {
    const closeButton = /* @__PURE__ */ h("button", { type: "button", className: "closeButton" }, "X");
    closeButton.addEventListener("click", () => {
      element.remove();
    });
    element.prepend(closeButton);
    return closeButton;
  }
  function clearAndAddCloseButton(element) {
    element.innerHTML = "";
    addCloseButton(element);
  }
  function addArrow(direction, destination, top = void 0, left = void 0) {
    const container = document.getElementById("iff-snippet");
    const arrow = /* @__PURE__ */ h("img", { className: "arrow", src: "assets/arrow.gif", alt: "arrow" });
    switch (direction) {
      case "up":
        arrow.style.transform = "rotate(270deg)";
        arrow.style.top = "2%";
        arrow.style.left = "47%";
        break;
      case "down":
        arrow.style.transform = "rotate(90deg)";
        arrow.style.top = "92%";
        arrow.style.left = "47%";
        break;
      case "left":
        arrow.style.transform = "rotate(180deg)";
        arrow.style.top = "45%";
        arrow.style.left = "1%";
        break;
      case "right":
        arrow.style.top = "45%";
        arrow.style.left = "95%";
        break;
      default:
        console.error("Trying to create arrow with invalid direction: " + direction);
        return;
    }
    if (top !== void 0) {
      arrow.style.top = top + "%";
    }
    if (left !== void 0) {
      arrow.style.left = left + "%";
    }
    arrow.addEventListener("click", () => {
      story.showSnippet(destination);
    });
    container.append(arrow);
  }
  function playCutscene(gifSrc, gifMilliseconds) {
    const cutsceneDiv = /* @__PURE__ */ h("div", { className: "absoluteAlign blackBg cutscenePanel" }, /* @__PURE__ */ h("img", { src: gifSrc }));
    const screenCover = document.getElementById("screenCover");
    screenCover.style.display = "block";
    const container = document.getElementById("iff-snippet");
    container.append(cutsceneDiv);
    setTimeout(() => {
      const closeButton = addCloseButton(cutsceneDiv);
      closeButton.addEventListener("click", () => {
        screenCover.style.display = "none";
      });
    }, gifMilliseconds);
  }

  // specific/npcs.tsx
  function addNpc(src, top, left, width, name, dialogueList) {
    const container = document.getElementById("iff-snippet");
    const npc = /* @__PURE__ */ h("img", { className: "npc", src, id: name, alt: name });
    npc.style.top = top + "%";
    npc.style.left = left + "%";
    npc.style.width = width + "%";
    npc.addEventListener("click", () => {
      showDialogue(dialogueList);
    });
    container.append(npc);
  }
  function showDialogue(dialogueList, index = 0) {
    const dialogue2 = dialogueList[index];
    const dialoguePanel = getDialoguePanel();
    clearAndAddCloseButton(dialoguePanel);
    const dialogueText = /* @__PURE__ */ h("p", null, dialogue2.text);
    dialoguePanel.append(dialogueText);
    dialoguePanel.append(/* @__PURE__ */ h("br", null));
    if (dialogue2.playerOptions !== void 0) {
      for (let i = 0; i < dialogue2.playerOptions.length; i++) {
        const option = dialogue2.playerOptions[i];
        const optionHtml = /* @__PURE__ */ h("a", null, option.text);
        if (option.nextPassage !== null) {
          optionHtml.addEventListener("click", () => {
            showDialogue(dialogueList, option.nextPassage);
          });
        } else {
          optionHtml.addEventListener("click", () => {
            dialoguePanel.remove();
          });
        }
        if (option.callback !== void 0) {
          optionHtml.addEventListener("click", () => {
            option.callback();
          });
        }
        dialoguePanel.append(optionHtml);
        if (i < dialogue2.playerOptions.length - 1) {
          dialoguePanel.append(/* @__PURE__ */ h("span", null, "\xA0|\xA0"));
        }
      }
    } else {
      let optionHtml;
      if (index < dialogueList.length - 1) {
        optionHtml = /* @__PURE__ */ h("a", null, "\u2B95 Next");
        optionHtml.addEventListener("click", () => {
          showDialogue(dialogueList, index + 1);
        });
      } else {
        optionHtml = /* @__PURE__ */ h("a", null, "\u2B95 End");
        optionHtml.addEventListener("click", () => {
          dialoguePanel.remove();
        });
      }
      dialoguePanel.append(optionHtml);
    }
  }
  function getDialoguePanel() {
    let dialoguePanel = document.querySelector(".dialoguePanel");
    if (dialoguePanel === null) {
      dialoguePanel = createDialoguePanel();
    }
    return dialoguePanel;
  }
  function createDialoguePanel() {
    const dialoguePanel = /* @__PURE__ */ h("div", { className: "absoluteAlign bottomHalf blackBg dialoguePanel" });
    clearAndAddCloseButton(dialoguePanel);
    const iffSnippet = document.getElementById("iff-snippet");
    iffSnippet.append(dialoguePanel);
    return dialoguePanel;
  }

  // specific/dialogue.tsx
  var dialogue = {
    treasureDialogue: [
      {
        text: "Good news: to celebrate your arrival, they planted a treasure in the eastern glade. You should go find it!"
      }
    ],
    treasureDialogue2: [
      {
        text: "Oh! You've found the treasure... I can see it on you!"
      },
      {
        text: "You're so brave."
      }
    ],
    travelDialogue: [
      {
        text: "I was born in the suburbs of Melbourne, but my family moved to Canberra when I was young."
      },
      {
        text: "Where are you from?",
        playerOptions: [
          { text: "Georgia.", nextPassage: 2 },
          { text: "Nowhere.", nextPassage: 4 }
        ]
      },
      {
        text: "Oh, Georgia? The United States?"
      },
      {
        text: "I think I've heard of that place... Tell your friends there hello for me.",
        playerOptions: [{ text: "\u2B95 End", nextPassage: null }]
      },
      {
        text: "Wait, really? Oh! That's wonderful! We can visit there together, and..."
      },
      {
        text: "Oh, you were joking? Oh... okay..."
      }
    ],
    mournDialogue: [
      {
        text: "This garden has fallen into disrepair. What a shame. What a shame. How foolish you and I were, to give up the best of all things."
      },
      {
        text: "In return for what? A world full of smoke..."
      }
    ],
    smokeDialogue1: [
      {
        text: "That feeling you get all the time, like you wanna choke and vomit? That's the invisible smoke."
      },
      {
        text: "That's what kills people. Not old age, not heart disease. Invisible smoke. Everywhere."
      },
      {
        text: "But you and I, we're the only ones who can feel it. Everyone's out there dying of invisible smoke but we're the only ones having a proper allergic reaction to it. Crazy, right?",
        playerOptions: [{ text: "How do I get away from the invisible smoke?", nextPassage: 3 }]
      },
      {
        text: "Uh, what? You can't. That's the whole point. Haha."
      }
    ],
    smokeDialogue2: [
      {
        text: "Hey. What's up?",
        playerOptions: [{ text: "Can you tell me more about the invisible smoke?", nextPassage: 1 }]
      },
      {
        text: "Whatddya mean?",
        playerOptions: [{ text: "It has to have a name. Or a proper chemical composition. I think that's how science works.", nextPassage: 2 }]
      },
      {
        text: "Whoa oh, caught me there, kid. It's called radon-108. It's a special isotope of radon that can't be detected by your human technology. You wanna go around your suburbs and take a look? It's everywhere. I promise."
      },
      {
        text: "Take care! Don't die of the invisible smoke!"
      }
    ],
    flowerDialogue: [
      {
        text: "You need to grow beyond the confines of the physical world. A flowering is needed for this."
      },
      {
        text: "You'll need a flower, maybe two... No, one will do."
      }
    ],
    flowerDialogue2: [
      {
        text: "A fine start... Still, more is needed."
      },
      {
        text: "Heed my words."
      }
    ],
    gateDialogue: [
      {
        text: "You again..."
      },
      {
        text: "You do know you are intruding...?"
      },
      {
        text: "I seldom see your kind. To cross the rubicon is no light task."
      },
      {
        text: "Only the worthy are allowed beyond here."
      }
    ],
    gateDialogue2: [
      {
        text: "You're still here..."
      },
      {
        text: "At least you have marked yourself this time."
      },
      {
        text: "It ought to be worth testing whether the gate opens for you, now."
      }
    ],
    miscDialogue1: [
      {
        text: "A new world will be born after you die."
      },
      {
        text: "And it will be more beautiful than anything you can conceive."
      }
    ],
    gate1: [
      {
        text: "The trees are losing their definition. There is something beyond them, shimmering..."
      },
      {
        text: "It is beautiful in a way I cannot describe."
      },
      {
        text: "..."
      },
      {
        text: "Touch it?",
        playerOptions: [
          { text: "Yes", nextPassage: 4 },
          { text: "No", nextPassage: null }
        ]
      },
      {
        text: "..."
      },
      {
        text: "It burns...",
        playerOptions: [
          {
            text: "WAKE UP",
            nextPassage: null,
            callback: () => {
              story.showSnippet("youA_transition");
            }
          }
        ]
      }
    ],
    gate1_2: [
      {
        text: "The trees part for me easily.",
        playerOptions: [
          {
            text: "Enter",
            nextPassage: null,
            callback: () => {
              story.showSnippet("garden2_center");
            }
          }
        ]
      }
    ],
    gate2: [
      {
        text: "It hurts to look at..."
      }
    ],
    gate2b: [
      {
        text: "...I can hear music."
      },
      {
        text: "Pass through?",
        playerOptions: [
          { text: "Yes", nextPassage: 2 },
          { text: "No", nextPassage: null }
        ]
      },
      {
        text: "..."
      },
      {
        text: "It is beautiful..."
      },
      {
        text: "And it hurts.",
        playerOptions: [
          {
            text: "WAKE UP",
            nextPassage: null,
            callback: () => {
              story.myInventory.removeItem("lily");
              story.showSnippet("homeB_transition");
            }
          }
        ]
      }
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
              story.myInventory.addItem({ name: "lily", iconSrc: "assets/item1.gif" });
              story.myInventory.addInventoryPanel();
              story.lilyPicked = true;
            }
          },
          { text: "Don't.", nextPassage: null }
        ]
      }
    ]
  };

  // specific/inventory.tsx
  var Inventory = class {
    items;
    constructor() {
      this.items = [];
    }
    addItem(item) {
      this.items.push(item);
    }
    removeItem(name) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === name) {
          this.items.splice(i, 1);
        }
      }
    }
    checkHasItem(name) {
      for (const item of this.items) {
        if (item.name === name) {
          return true;
        }
      }
      return false;
    }
    addInventoryPanel() {
      const inventoryDiv = /* @__PURE__ */ h("div", { id: "inventory" });
      for (const item of this.items) {
        inventoryDiv.append(/* @__PURE__ */ h("img", { src: item.iconSrc }));
      }
      const iffSnippet = document.getElementById("iff-snippet");
      iffSnippet.append(inventoryDiv);
    }
  };
  return __toCommonJS(script_files_exports);
})();
window.mainScript = mainScript;
