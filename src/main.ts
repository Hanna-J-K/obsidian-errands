import { Notice, Plugin } from "obsidian";

export default class ErrandsAndQuestsPlugin extends Plugin {
    onload(): void {
        new Notice("Errands and Quests plugin loaded.")
    }

    onunload(): void {}
}
