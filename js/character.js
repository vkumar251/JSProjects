export class Character 
{
    // constructor method for creating new character objects
    constructor(name, hairColor, eyeColor, clothesColor, health, goldCoins, position, inventory)
    {
        this.name = name;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.clothesColor = clothesColor;
        this.health = health;
        this.goldCoins = goldCoins;
        this.position = 
        {
            x: position.x,
            y: position.y,
        }
        this.inventory = inventory;
    }
    checkHealth() // method to check character health
    {
        while (this.isDead === false) // consistently monitor character health
        {
            if (this.health <= 0)
            {
                console.log("Game over! You are dead."); // display game over message
                this.isDead = true;
            }
            else 
            {
                continue;
            }
        }
    }
    checkInventory()
    {
        if (this.inventory.includes("key"))
        {
            this.hasKey = true;
        }
        else
        {
            this.hasKey = false;
        }
    }
    setHealth()
    {
        this.health = health;
        console.log("Health updated to: " + this.health);
    }
    addHealth()
    {
        this.health = (this.health + health);
        console.log("Added " + health + " health to character. New health: " + this.health);
    }
    deductHealth()
    {
        if (this.health > 0) // check character is not dead
        {
            this.health = (this.health - health);
            console.log("Deducted " + health + " health from character. New health: " + this.health);
        }
        else
        {
            console.log("Character is already dead.");
        }
    }
    addCoins()
    {
        this.goldCoins = (this.goldCoins + coins);
        console.log("Added " + coins + " coins to character. New total: " + this.goldCoins);
    }
    deductCoins()
    {
        if (this.goldCoins >= coins) // check character has enough coins
        {
            this.goldCoins = (this.goldCoins - coins);
            console.log("Deducted " + coins + " coins from character. New total: " + this.goldCoins);
        }
        else
        {
            console.log("Character does not have enough coins.");
        }
    }
    setCoins()
    {
        this.goldCoins = coins;
        console.log("Character coins updated to: " + this.goldCoins);
    }
}
export class Chest
{
    constructor(position, isOpen, isLocked, coins, inventory)
    {
        this.position =
        {
            x: position.x,
            y: position.y,
        }
        this.isOpen = isOpen;
        this.isLocked = isLocked;
        this.coins = coins;
        this.inventory = inventory;
    }
    openChest()
    {
        if (!this.isOpen) // check chest is not open
        {
            console.log("Chest opened! Collected " + this.coins + " coins.");
        }
    }
}
export class SteelChest
{
    constructor(position, isOpen, isLocked, coins, inventory)
    {
        this.position =
        {
            x: position.x,
            y: position.y,
        }
        this.isOpen = isOpen;
        this.isLocked = isLocked;
        this.coins = coins;
        this.inventory = inventory;
    }
    openChest()
    {
        if (this.isLocked) // check chest is locked
        {
            console.log("Steel chest is locked.");
        }
        else
        {
            console.log("Steel chest opened! Collected " + this.coins + " coins.");
        }
    }
    unlockChest()
    {
        if (character.hasKey)
        {
            this.isLocked = false;
            console.log("Steel chest unlocked.");
            character.inventory.remove("key");
        }
    }
}
export class Tree
{
    constructor(position, type, size, health, inventory)
    {
        // acceptable inputs
        const types = ["oak", "pine", "birch", "maple", "willow", "spruce", "beech", "alder", "cedar"];
        const sizes = ["small", "medium", "large", "x-large"];

        this.position = position;

        if (types.includes(type)) 
        {
            this.type = type;
        }
        else
        {
            console.log("Invalid tree type. Available types: " + types.join(", "));
            this.type = "unknown";
        }
        if (sizes.includes(size)) 
        {
            this.size = size;
        }
        else
        {
            console.log("Invalid tree size. Available sizes: " + sizes.join(", "));
            this.size = "unknown";
        }

        this.health = health;
        this.inventory = inventory;
    }
    playerAttack()
    {
        if (this.isDead)
        {
            console.log("Tree is already destroyed.");
        }
        else
        {
            if (character.inventory.includes("axe"))
            {
                this.health = (this.health - 50);
                console.log("Tree health decreased to " + this.health + ".");
            }
            else
            {
                this.health = (this.health - 10);
                console.log("Tree health decreased to " + this.health + ".");
            }
        }
    }
}
export class Cactus
{
    constructor(position, size, thorns, health)
    {
        const sizes = ["small", "medium", "large", "x-large"];

        this.position = position;
        
        if (sizes.includes(size))
        {
            this.size = size;
        }
        else
        {
            console.log("Invalid cactus size. Available sizes: " + sizes.join(", "));
            this.size = "unknown";
        }

        this.thorns = thorns;
        this.health = health;
    }
    playerTouch()
    {
        if (!this.isDead)
        {
            character.health = (character.health - 10);
            console.log("Cactus touched! Player health decreased to " + character.health + ".");
            return;
        }

        console.log("Cactus is already destroyed.");
    }
}
export class Key
{
    constructor(position)
    {
        this.position = position;
    }
    playerCollect()
    {
        character.inventory.push("key");
        console.log("Key picked up! You now have a key.");
        character.hasKey = true;
    }
}
// misc items
export class Copper
{
    constructor()
    {
        // default (non-changeable) properties:
        this.weight = 100;
        this.purity = 0.8;
        this.value = 5;
    }
    displayProperties()
    {
        console.log("Weight: " + this.weight);
        console.log("Purity: " + this.purity);
        console.log("Value: " + this.value);
    }
}
export class Gold
{
    constructor()
    {
        this.karat = 10;
        this.weight = 120;
        this.value = 200;
    }
    displayProperties()
    {
        console.log("Karat: " + this.karat);
        console.log("Weight: " + this.weight);
        console.log("Value: " + this.getGoldValue());
    }
    getGoldValue()
    {
        let purity = this.karat;

        // calculate gold value based on purity and weight
        if (purity >= 24)
        {
            return (
                (this.karat * this.weight * this.value) / 100
            );
        }
        else if (purity >= 18)
        {
            return (
                (this.karat * this.weight * this.value) / 200
            );
        }
        else if (purity >= 12)
        {
            return (
                (this.karat * this.weight * this.value) / 300
            );
        }
        else
        {
            return (
                (this.karat * this.weight * this.value) / 400
            );
        }
    }
    setPurity(value)
    {
        this.karat = value;
    }
    setWeight(value)
    {
        this.weight = value;
    }
}

function createObjects()
{
    // new character instances
    const player = new Character("Player", "black", "blue", "blue", 200, 0, {x: 0, y: 0}, ["sword", "hat", "map", "bow", "torch", "axe"]);
    const enemy = new Character("Goblin", "crimson", "red", "brown", 100, 20, {x: 100, y: 200}, "sword");
    // create obstacles
    const pineTree = new Tree({x: 50, y: 100}, "pine", "large", 100, ["wood", "leaves", "pine-cones"]);
    const cactus = new Cactus({x: 200, y: 300}, "large", 3, 20);
    // items
    const chest = new Chest({x: 300, y: 400}, false, false, 30, "copper");
    const steelChest = new SteelChest({x: 400, y: 600}, false, true, 60, ["diamond", "carbonado"]);
    const key = new Key({x: 600, y: 800});
    // misc
    const copper = new Copper();
    const gold = new Gold();
}

// misc
function x()
{
    console.log("Player Details:");
    console.log(player);
    console.log(player.inventory);
    console.log(player.position);
    console.log("Enemy Details:");
    console.log(enemy);
    console.log(enemy.inventory);
    console.log(enemy.position);
    console.log("Obstacle Details:");
    console.log(pineTree);
    console.log(pineTree.type);
    console.log(pineTree.size);
    console.log(cactus);
    console.log(cactus.size);
    console.log("Item Details:");
    console.log(chest);
    console.log(chest.coins);
    console.log(steelChest);
    console.log(steelChest.inventory);
    console.log(key);
    console.log(key.position);
}
function z()
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

