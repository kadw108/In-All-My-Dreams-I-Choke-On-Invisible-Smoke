story.transitionMessage = null;
story.myInventory = new mainScript.Inventory();

/* To preload images */
/* From https://twinery.org/forum/discussion/8195/preloading-background-images-sugarcube-2-0-twine-2 */
(function () {
    const preload = [
        /* "assets/loading.gif", */
    ];

    window._ImageCache = preload.map(function (url) {
        const image = document.createElement("img");
        image.src = url;
        return image;
    });
})();
