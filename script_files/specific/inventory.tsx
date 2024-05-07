import { h } from "dom-chef";

type Item = {
    name: string,
    iconSrc: string
};

export class Inventory {
    items: Array<Item>;
    
    constructor() {
        this.items = [];
    } 
    
    addItem(item: Item) {
        this.items.push(item);
    }

    checkHasItem(name: string) {
        for (const item of this.items) {
            if (item.name === name) {
                return true;
            }
        }
        return false;
    }

    addInventory() {
        const inventoryDiv = <div id="inventory"></div>;
        for (const item of this.items) {
            inventoryDiv.append(<img src={item.iconSrc}/>);
        }

        const iffSnippet = document.getElementById("iff-snippet");
        iffSnippet.append(inventoryDiv);
    }
}