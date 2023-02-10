const menu = [
    {
        id:1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "image/item-1.jpeg",
        desc: `I'm baby wok mlkshk wolf bitters live-edge
        blue bottle, hammock freegan copper mug whatever
        cold-pressed`,
    },
    {
        id:2,
        title: "Diner double",
        category: "lunch",
        price: 13.99,
        img: "image/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,

    },
    {
        id:3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "image/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id:4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "image/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
    },
    {
        id:5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "image/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    },
    {
        id:6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "image/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id:7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "image/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
    },
    {
        id:8,
        title: "American Classic",
        category: "lunch",
        price: 12.99,
        img: "image/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
    {
        id:9,
        title: "Quarentine Buddy",
        category: "shakes",
        price: 16.99,
        img: "image/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id:10,
        title: "Steak Dinner",
        category: "dinner",
        price: 39.99,
        img: "image/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]


let ContainerEL = document.getElementById('container-el')
let Testcards = document.getElementById('testecards')


/* Function all */
function allitems(){
    ContainerEL.innerHTML = ''
    for (i in menu){
        ContainerEL.innerHTML +=
        `<div id="cards">
            <div class="img">
                <img src=${menu[i].img} alt="">
            </div>

            <div id="text">
                <div id="info">
                    <h2 id="title-eat">${menu[i].title}</h2>
                    <p id="price">${menu[i].price}</p>
                </div>
                <p id="sumary">${menu[i].desc}</p>
            </div>
        </div> 
        `
        
    }

}

/* Breakfast */

function breakitems(){
    ContainerEL.innerHTML = ''
    for (i in menu){
        if (menu[i].category === 'breakfast'){
            ContainerEL.innerHTML +=
            `<div id="cards">
                <div class="img">
                    <img src=${menu[i].img} alt="">
                </div>

                <div id="text">
                    <div id="info">
                        <h2 id="title-eat">${menu[i].title}</h2>
                        <p id="price">${menu[i].price}</p>
                    </div>
                    <p id="sumary">${menu[i].desc}</p>
                </div>
            </div> 
        `
        }
    }
}

/* Lunch */

function lunchitems(){
    ContainerEL.innerHTML = ''
    for (i in menu){
        if (menu[i].category === 'lunch'){
            ContainerEL.innerHTML +=
            `<div id="cards">
                <div class="img">
                    <img src=${menu[i].img} alt="">
                </div>

                <div id="text">
                    <div id="info">
                        <h2 id="title-eat">${menu[i].title}</h2>
                        <p id="price">${menu[i].price}</p>
                    </div>
                    <p id="sumary">${menu[i].desc}</p>
                </div>
            </div> 
        `
        }
    }
}

/* Shakes */

function shakesitems(){
    ContainerEL.innerHTML = ''
    for (i in menu){
        if (menu[i].category === 'shakes'){
            ContainerEL.innerHTML +=
            `<div id="cards">
                <div class="img">
                    <img src=${menu[i].img} alt="">
                </div>

                <div id="text">
                    <div id="info">
                        <h2 id="title-eat">${menu[i].title}</h2>
                        <p id="price">${menu[i].price}</p>
                    </div>
                    <p id="sumary">${menu[i].desc}</p>
                </div>
            </div> 
        `
        }
    }
}

/* Dinner */

function dinneritems(){
    ContainerEL.innerHTML = ''
    for (i in menu){
        if (menu[i].category === 'dinner'){
            ContainerEL.innerHTML +=
            `<div id="cards">
                <div class="img">
                    <img src=${menu[i].img} alt="">
                </div>

                <div id="text">
                    <div id="info">
                        <h2 id="title-eat">${menu[i].title}</h2>
                        <p id="price">${menu[i].price}</p>
                    </div>
                    <p id="sumary">${menu[i].desc}</p>
                </div>
            </div> 
        `
        }
    }
}