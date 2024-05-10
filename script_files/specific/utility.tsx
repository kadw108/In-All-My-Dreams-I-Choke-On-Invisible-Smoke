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

export function clearAndAddCloseButton(element: Element) {
    element.innerHTML = "";
    addCloseButton(element);
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
