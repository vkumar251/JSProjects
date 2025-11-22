const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

loadPage();
document.querySelector("#img-add").addEventListener("click", implementImage);

function loadPage()
{
    // setup header
    let createHeader = (colour, heading) =>
    {
        header.innerHTML = 
        `
        <header>
            <h1 style="color: ${colour}">${heading}</h1>
        </header>
        `;
    }
    // setup main
    let createMain = () =>
    {
        main.innerHTML =
        `
        <main>
            <h2>Add and remove images to the gallery:</h2>
            <div id="input-container">
                <input type="text" id="img-input" placeholder="Image URL">
                <button id="img-add">Add</button>
            </div>
            <div id="gallery-container">
            </div>
        </main>
        `;
    }
    // setup footer
    let createFooter = (colour, message) =>
    {
        footer.innerHTML =
        `
        <footer>
            <h2 style="color: ${colour}">${message}</h2>
        </footer>
        `;
    }

    createHeader('#a80092ff', "Interactive Image Gallery");
    createMain();
    createFooter('#a80092ff', "&copy; 2021 - 2025. All rights reserved.");
}
function addImage()
{
    // get input
    const imgInput = document.querySelector("#img-input").value;

    if (imgInput)
    {
        const gallery = document.querySelector("#gallery-container");

        // image
        const createImg = function()
        {
            // create image element
            const image = document.createElement("img");

            // retrieve inputted image URL
            image.src = imgInput;
        }

        // image container
        const createGalleryItem = function()
        {
            // create div element
            const galleryItem = document.createElement("div");
            
            // add class gallery-item to created div
            galleryItem.classList.add("gallery-item");
        }

        // delete button
        const createDelButton = function()
        {
            // create button element
            const delButton = document.createElement("button");
            
            delButton.textContent = "Delete";
            delButton.classList.add("delete-button");

            // remove gallery item if clicked
            delButton.onclick = () => 
            {
                gallery.removeChild(galleryItem);
            }
        }
        
        // construct the gallery
        galleryItem.appendChild(image);
        galleryItem.appendChild(delButton);
        gallery.appendChild(galleryItem);

        // clear input when image is added
        document.querySelector("#img-input").value = "";
    }
    else
    {
        alert("Error: Image URL not entered.");
    }
}

function implementImage()
{
    // get input
    const url = document.querySelector("#img-input").value;

    if (!url)
    {
        alert("Error: Image URL not entered.");
        return;
    }
    else
    {
        const gallery = document.querySelector("#gallery-container");

        // setup container
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        // setup image
        const image = document.createElement("img");
        image.src = url; // retrieve inputted image url
        image.alt = "Gallery Image";
        
        // delete button setup
        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.classList.add("delete-button");
        delButton.addEventListener("click", () => 
        {
            gallery.removeChild(galleryItem);
        });

        // construct gallery architecture
        galleryItem.appendChild(image);
        galleryItem.appendChild(delButton);
        gallery.appendChild(galleryItem);

        // clear input
        document.querySelector("#img-input").value = "";
    }
}