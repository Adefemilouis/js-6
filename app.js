const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./menu-item.jpg",
        desc: `I'm a baby woke hjfbb wolf bottle hjbfb uhb b fuhg ybhvb yuhb ubub hjfj jb j bbyuhju  uujjn j`,
    
    
    },

    {
       id: 2,
       title: "godzilla milkshake",
       category: "shakes",
       price: 13.99,
       img: "./god.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },

    {
       id: 3,
       title: "diner double",
       category: "lunch",
       price: 60.99,
       img: "./dine.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },

    {
       id: 4,
       title: "country delight",
       category: "breakfast",
       price: 20.99,
       img: "./coun.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },

    {
       id: 5,
       title: "egg attack",
       category: "lunch",
       price: 40.99,
       img: "./egg.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },

    {
       id: 6,
       title: "oreo dream",
       category: "shakes",
       price: 9.99,
       img: "./oreo.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },
    {
       id: 7,
       title: "bacon overflow",
       category: "breakfast",
       price: 12.99,
       img: "./bac.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },
    {
       id: 8,
       title: "american classic",
       category: "lunch",
       price: 19.99,
       img: "./ame.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },
    {
       id: 9,
       title: "quarantine buddy",
       category: "shakes",
       price: 8.99,
       img: "./qua.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },
    {
       id: 10,
       title: "bison steak",
       category: "dinner",
       price: 49.99,
       img: "./bis.jpg",
       desc: `fg bvnb uhjrfb jn  hrnhjn uhj uhj usyui nnhn sniuj hn unjuh jnuyh uhn in n hnh gvh hhhbnhjr fj hjghj`,

    },
];
// get parent element
const selectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
   displayMenuItems(menu);
   displayMenuButtons();

});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (items) {
        //console.log(item);

        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);

    selectionCenter.innerHTML = displayMenu;

}
function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item){
            if (!values.includes(items.category)){
                values.push(items.category);
            }
            return values;
        }
        ["all"]
    );
    const categoryBtns = categories
    .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) { 
        btn.addEventListener("click", function (e) {
            //console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}