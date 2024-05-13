import { h } from "dom-chef";

/*
Returns the close button so functions that call this
can add more event listeners to it
*/
function addCloseButton(element: Element): Element {
    const closeButton = (
        <button type="button" className="closeButton">
            X
        </button>
    );
    closeButton.addEventListener("click", () => {
        element.remove();
    });
    element.prepend(closeButton);
    return closeButton;
}

export function clearAndAddCloseButton(element: Element): Element {
    element.innerHTML = "";
    return addCloseButton(element);
}

export function addArrow(direction: string, destination: string, top: number | undefined = undefined, left: number | undefined = undefined): void {
    const container = document.getElementById("iff-snippet");
    const arrow = <img className="arrow" src="assets/arrow.gif" alt="arrow"></img>;

    switch (direction) {
        case "up":
            arrow.style.transform = "rotate(270deg)";
            arrow.style.top = "2%";
            arrow.style.left = "47%";
            arrow.classList.add("up");
            break;
        case "down":
            arrow.style.transform = "rotate(90deg)";
            arrow.style.top = "92%";
            arrow.style.left = "47%";
            arrow.classList.add("down");
            break;
        case "left":
            arrow.style.transform = "rotate(180deg)";
            arrow.style.top = "45%";
            arrow.style.left = "1%";
            arrow.classList.add("left");
            break;
        case "right":
            arrow.style.top = "45%";
            arrow.style.left = "95%";
            arrow.classList.add("right");
            break;
        default:
            console.error("Trying to create arrow with invalid direction: " + direction);
            return;
    }

    if (top !== undefined) {
        arrow.style.top = top + "%";
    }
    if (left !== undefined) {
        arrow.style.left = left + "%";
    }

    arrow.addEventListener("click", () => {
        // @ts-expect-error (for story)
        story.showSnippet(destination);
    });

    container.append(arrow);
}

export function playCutscene(gifSrc: string, gifMilliseconds: number, big = false) {
    const cutsceneDiv = (
        <div className="absoluteAlign blackBg cutscenePanel">
            <img src={gifSrc} />
        </div>
    );
    if (big) {
        cutsceneDiv.classList.add("bigCutscenePanel");
    }

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

export function playCutsceneComplex(imgSrcList: Array<string>, millisecondList: Array<number>, big = false, callbackAfterDone = null) {
    if (imgSrcList.length !== millisecondList.length) {
        console.error("playCutsceneComplex: arrays not same length");
        console.error(imgSrcList);
        console.error(millisecondList);
        return;
    }

    const cutsceneDiv = <div className="absoluteAlign blackBg cutscenePanel"></div>;
    if (big) {
        cutsceneDiv.classList.add("bigCutscenePanel");
    }

    const screenCover = document.getElementById("screenCover");
    screenCover.style.display = "block";

    const container = document.getElementById("iff-snippet");
    container.append(cutsceneDiv);

    const timeoutFunctionList: Array<Function> = [];

    function generateShowCutsceneFunction(i: number) {
        return () => {
            cutsceneDiv.innerHTML = "";
            const image1 = <img src={imgSrcList[i]} />;
            cutsceneDiv.append(image1);

            setTimeout(() => {
                if (i < imgSrcList.length - 1) {
                    const next = (
                        <button type="button" className="nextButton">
                            ⮕
                        </button>
                    );
                    next.addEventListener("click", () => {
                        timeoutFunctionList[i + 1]();
                    });
                    cutsceneDiv.append(next);
                } else {
                    const closeButton = addCloseButton(cutsceneDiv);
                    closeButton.addEventListener("click", () => {
                        screenCover.style.display = "none";

                        if (callbackAfterDone !== null) {
                            callbackAfterDone();
                        }
                    });
                }
            }, millisecondList[i]);
        };
    }

    for (let i = 0; i < imgSrcList.length; i++) {
        timeoutFunctionList.push(generateShowCutsceneFunction(i));
    }

    timeoutFunctionList[0]();
}

/* To preload images
From https://twinery.org/forum/discussion/8195/preloading-background-images-sugarcube-2-0-twine-2
*/
export function preload(imageList: Array<string>) {
    // not using Object.hasOwn since that requires es2022
    if (!window.hasOwnProperty("_ImageCache")) {
        // @ts-expect-error probably fine
        window._ImageCache = [];
        // @ts-expect-error probably fine
        window.preloadedImages = [];
    }

    imageList.map(function (url) {
        // @ts-expect-error probably fine
        if (!window.preloadedImages.includes(url)) {
            const image = document.createElement("img");
            image.src = url;
            // @ts-expect-error probably fine
            window._ImageCache.push(image);
            // @ts-expect-error probably fine
            window.preloadedImages.push(url);
        }
    });
}

export function replaceName(tags: Array<string>) {
    document.querySelectorAll("span.myName").forEach((myName) => {
        // @ts-expect-error (for story)
        if (story.name === null) {
            myName.innerHTML = '<img class="corruptDataPlaceholder" src="assets/white3.gif" alt="[DATA LOST]"/>';
        } else {
            // @ts-expect-error (for story)
            myName.innerHTML = story.name;
        }
    });

    const you = document.querySelector("img.you");
    if (you !== null) {
        // @ts-expect-error (for story)
        if (story.gender_you === "m") {
            (document.querySelector("img.you") as HTMLImageElement).src = "assets/9portrait2b.png.gif";
        } else {
            (document.querySelector("img.you") as HTMLImageElement).src = "assets/9portrait2a.png.gif";
        }
    }

    if (tags.includes("meImage")) {
        const meImage = <img src="assets/9portrait1b.png.gif" className="absoluteAlign bwImage"></img>;
        document.getElementById("iff-snippet").append(meImage);
    } else if (tags.includes("meImage2")) {
        const meImage = <img src="assets/9portrait1b.png_glitch.gif" className="absoluteAlign bwImage"></img>;

        const styleObj = { width: "12%", backgroundColor: "white", border: "4px double black", bottom: "38%", right: "0%" };
        let youImage;
        // @ts-expect-error (for story)
        if (story.gender_you === "m") {
            youImage = <img className="bwImage" src="assets/9portrait2b.png_glitch.gif" style={styleObj} alt="drawing" />;
        } else {
            youImage = <img className="bwImage" src="assets/9portrait2a.png_glitch.gif" style={styleObj} alt="drawing" />;
        }

        document.getElementById("iff-snippet").append(meImage, youImage);
    } else if (tags.includes("meImage3")) {
        const meImage = <img src="assets/9portrait1b.png_glitch.gif" className="absoluteAlign bwImage"></img>;
        document.getElementById("iff-snippet").append(meImage);
    }
}
