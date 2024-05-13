$(function () {
    mainScript.addWrapperHtml();
    mainScript.replaceName(snippet.tags);
    mainScript.addReplaceLink();
    mainScript.addMenuPanels();

    if (snippet.tags.includes("dream")) {
        story.myInventory.updatePanel();
    }

    mainScript.musicManager.playSoundtrack(snippet.tags);
});
