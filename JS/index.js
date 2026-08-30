// Nom du fichier : index.js
// Auteur : Baptiste Wagée
// Date de création : 02 juillet 2026
// Version : 1.0

const logo = document.getElementById("logo-container");
const navbar = document.getElementById("navbar");

// ==============================
// Animation du logo au scroll
// ==============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.classList.add("sticky");
    } else {
        navbar.classList.remove("scrolled");
        logo.classList.remove("sticky");
    }

});

// ==============================
// Données du menu
// ==============================

const menus = {

    pizzas: [

        {
            nom: "Margherita",
            prix: "13,50€",
            description: "Tomate, mozzarella, basilic frais."
        },

        {
            nom: "Reine",
            prix: "13,50€",
            description: "Tomate, mozzarella, jambon, champignons."
        },

        {
            nom: "Diavola",
            prix: "14,50€",
            description: "Tomate, mozzarella, chorizo, piment."
        },

        {
            nom: "Calzone",
            prix: "15,50€",
            description: "Pizza pliée, jambon, mozzarella, œuf."
        },

        {
            nom: "Bufala",
            prix: "15,50€",
            description: "Mozzarella di Buffala, tomates cerises, basilic."
        },

        {
            nom: "4 Fromages",
            prix: "15,90€",
            description: "Mozzarella, chèvre, gorgonzola, parmesan."
        }

    ],

    desserts: [

        {
            nom: "Tiramisu",
            prix: "6€",
            description: "Recette italienne maison."
        },

        {
            nom: "Panna Cotta",
            prix: "5€",
            description: "Vanille & coulis de fruits rouges."
        },

        {
            nom: "Fondant Chocolat",
            prix: "7€",
            description: "Servi chaud."
        }

    ],

    boissons: [

        {
            nom: "Coca-Cola",
            prix: "2,50€",
            description: "33 cl",
            image: "../images/coca.png"
        },

        {
            nom: "Ice Tea",
            prix: "2,50€",
            description: "33 cl"
        },

        {
            nom: "San Pellegrino",
            prix: "3€",
            description: "50 cl"
        }

    ]

};

// ==============================
// Génération des cartes
// ==============================

const menuContent = document.getElementById("menu-content");
const tabs = document.querySelectorAll(".tab");

function afficherMenu(categorie) {

    menuContent.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "menu-grid";

    menus[categorie].forEach(item => {

        grid.innerHTML += `

        <div class="menu-card">
            
            <img src="${item.image}" alt="${item.nom}" class="menu-image">

            <div class="menu-header">

                <h3>${item.nom}</h3>

                <span class="price">${item.prix}</span>

            </div>

            <p>${item.description}</p>

        </div>

        `;

    });

    menuContent.appendChild(grid);

}

// ==============================
// Gestion des onglets
// ==============================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));

        tab.classList.add("active");

        afficherMenu(tab.dataset.tab);

    });

});

// ==============================
// Affichage par défaut
// ==============================

afficherMenu("pizzas");