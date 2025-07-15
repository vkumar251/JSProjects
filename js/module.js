// import classes
import {Character} from "./character.js";
import {Chest} from "./character.js";
import {SteelChest} from "./character.js";
import {Tree} from "./character.js";
import {Cactus} from "./character.js";
import {Key} from "./character.js";
import {Copper} from "./character.js";
import {Gold} from "./character.js";

// create new objects
const player = new Character("Player", "black", "blue", "blue", 200, 0, {x: 0, y: 0}, ["sword", "hat", "map", "bow", "torch", "axe"]);
const enemy = new Character("Goblin", "crimson", "red", "brown", 100, 20, {x: 100, y: 200}, "sword");
const pineTree = new Tree({x: 50, y: 100}, "pine", "large", 100, ["wood", "leaves", "pine-cones"]);
const cactus = new Cactus({x: 200, y: 300}, "large", 3, 20);
const chest = new Chest({x: 300, y: 400}, false, false, 30, "copper");
const steelChest = new SteelChest({x: 400, y: 600}, false, true, 60, ["diamond", "carbonado"]);
const key = new Key({x: 600, y: 800});
const copper = new Copper();
const gold = new Gold();

function run()
{
    console.log(chest);
    console.log(chest.isOpen);
    chest.openChest();
    console.log(chest.isOpen);

    console.log("Miscs:");
    copper.displayProperties();

    console.log(gold.displayProperties());
    gold.getGoldValue();
    gold.setPurity(24);
    console.log(gold.displayProperties());
}