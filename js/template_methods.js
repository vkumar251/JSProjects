var displayHead;
var displayHeader;
var displayMain;
var displayFooter;

export function loadPage()
{
    generateHead();
    generateHeader();
    generateMain();
    generateFooter();

    document.head.innerHTML = displayHead;
    document.body.innerHTML = (displayHeader + displayMain + displayFooter);
}
export function generateHead()
{
    displayHead =
    `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible", content="IE-edge">
        <title>Name | JSProject</title>
        <link rel="stylesheet", href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
        <link rel="stylesheet", href="css/style.css">
        <style>
            body {font-family: Arial;}
            section {border: 2px dashed black; margin: 2rem;}
            div {border: 2px solid black; width: 60%; margin: 2rem auto; padding: 2rem; text-align: center;}
            h1 {font-size: 40px;}
            h2 {font-size: 25px; padding: 1rem;}
            p {font-size: 20px;}
            button {padding: 0.5rem 2rem; margin: 1rem; border: 2px solid black; cursor: pointer;}
            label {padding: 0.5rem; margin: 1rem;}
            input {padding: 0.5rem; margin: 1rem; border: 2px solid black;}
        </style>
    </head>
    `;
}
export function generateHeader() {displayHeader = `<header></header>`;}
export function generateMain() {displayMain = `<main></main>`;}
export function generateFooter() {displayFooter = `<footer></footer>`;}