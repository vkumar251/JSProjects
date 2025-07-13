// class is an instance (clone) of an object
// use sprite images to add animations to game
// objects should be created using constant (const) to avoid clashing with other variables and prevent name from changing
// methods are functions stored inside an object that perform actions

// character object
const character = 
{
    hairColor: "black",
    eyeColor: "green",
    clothesColor: "blue",
    health: 200,
    goldCoins: 0,
    isDead: false,
    hasKey: false,
    position: // sub-object
    {
        x: 0, 
        y: 0,
    }, 
    inventory: ["sword", "hat", "map", "bow", "torch", "axe"], // array
    checkHealth: function() // anonymous method (function without name) - monitor character health
    {
        while (this.isDead === false)
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
    },
    checkInventory: function() // anonymous method - check character inventory
    {
        if (this.inventory.includes("key"))
        {
            this.hasKey = true;
        }
        else
        {
            this.hasKey = false;
        }
    },
    setHealth: function(health)
    {
        this.health = health;
        console.log("Health updated to: " + this.health);
    },
    addHealth: function(health)
    {
        this.health = (this.health + health);
        console.log("Added " + health + " health to character. New health: " + this.health);
    },
    deductHealth: function(health)
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
    },
    addCoins: function(coins)
    {
        this.goldCoins = (this.goldCoins + coins);
        console.log("Added " + coins + " coins to character. New total: " + this.goldCoins);
    },
    deductCoins: function(coins)
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
    },
    setCoins: function(coins)
    {
        this.goldCoins = coins;
        console.log("Character coins updated to: " + this.goldCoins);
    },
}
// chest object
const chest = 
{
    isOpen: false,
    isLocked: false,
    coins: 10,
    inventory: ["sword", "hat", "map", "bow", "torch", "axe"],
    openChest: function() // anonymous method - when player opens chest
    {
        if (!this.isOpen) // check chest is not open
        {
            // "this" = accesses properties of this chest object
            this.isOpen = true;
            this.coins = 0;
            console.log("Chest opened! Collected " + this.coins + " coins.");
        }
    },
}
// steel chest object
const steelChest =
{
    isOpen: false,
    isLocked: true,
    coins: 20,
    inventory: ["sword", "hat", "map", "bow", "torch", "axe"], 
    openChest: function()
    {
        if (this.isLocked) // check chest is locked
        {
            console.log("Steel chest is locked.");
        }
        else
        {
            this.isOpen = true;
            this.coins = 0;
            console.log("Steel chest opened! Collected " + this.coins + " coins.");
        }
    },
    unlockChest: function()
    {
        if (character.hasKey)
        {
            this.isLocked = false;
            console.log("Steel chest unlocked.");
            character.inventory.remove("key");
        }
    },
}
// enemy object
const enemy =
{
    hairColor: "brown",
    eyeColor: "red",
    clothesColor: "crimson",
    health: 100,
    isDead: false,
    position:
    {
        x: 100,
        y: 200,
    },
    inventory: ["sword", "shield"],
    playerAttack: function() // anonymous method - player attacks enemy
    {
        if (character.isDead)
        {
            console.log("Player is already dead.");
        }
        else
        {
            if (this.isDead) // check enemy is not dead
            {
                console.log("Enemy is already dead.");
            }
            else
            {
                if (character.inventory.includes("sword"))
                {
                    this.health = (this.health - 75);
                    console.log("Enemy health decreased to " + this.health + ".");
                }
                else if (character.inventory.includes("bow"))
                {
                    this.health = (this.health - 50);
                    console.log("Enemy health decreased to " + this.health + ".");
                }
                else
                {
                    this.health = (this.health - 20);
                    console.log("Enemy health decreased to " + this.health + ".");
                }
            }
        }
    },
    enemyAttack: function() // anonymous method - enemy attacks player
    {
        if (!this.isDead) // check enemy is not dead
        {
            character.health = character.health - 20; // subtract player health by 20
            console.log("Enemy attacks! Player health decreased to " + character.health + ".");
        }
        else
        {
            console.log("Enemy is already dead.");
        }
    },
}
// tree object
const tree =
{
    type: "birch",
    size: "medium",
    health: 100,
    isDead: false,
    position:
    {
        x: 200,
        y: 100,
    },
    inventory: ["wood", "leaves", "apple"],
    playerAttack: function() // anonymous method - player attacks tree
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
    },
}
// cactus object
const cactus =
{
    size: "large",
    thorns: 3,
    health: 75,
    isDead: false,
    position:
    {
        x: 100,
        y: 400,
    },
    playerTouch: function() // anonymous method - player touches cactus
    {
        if (!this.isDead)
        {
            character.health = (character.health - 10);
            console.log("Cactus touched! Player health decreased to " + character.health + ".");
            return;
        }

        console.log("Cactus is already destroyed.");
    },
}
// key object
const key =
{
    color: "blue",
    shape: "circle",
    position:
    {
        x: 300,
        y: 500,
    },
    playerPickUp: function() // anonymous method - player picks up key
    {
        character.inventory.push("key");
        console.log("Key picked up! You now have a key.");
        character.hasKey = true;
    },
}

var goldCoinsProp = "goldCoins";

console.log("Character Object: ", character);
console.log("Character Object - Eye Color: ", character.eyeColor);
console.log("Character Object - Inventory: ", character["inventory"]);
console.log("Character Object - Gold Coins Property: ", character[goldCoinsProp]);