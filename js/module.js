import Character from "./character.js";

const privateVar = "This is a private variable";

// export - allows other external scripts to use this function
export function publicFunction() 
{
    console.log(privateVar);
}

