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

export function playCutscene(gifSrc: string, gifMilliseconds: number) {
    const cutsceneDiv = (
        <div className="absoluteAlign blackBg cutscenePanel">
            <img src={gifSrc} />
        </div>
    );

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
