let cart = []; // Tableau pour stocker les produits du panier

function ajouterProduit() {
    const nom = document.getElementById('nom').value;
    const prix = parseFloat(document.getElementById('prix').value);
    const quantite = parseInt(document.getElementById('quantite').value);

    if (nom && !isNaN(prix) && !isNaN(quantite)) {
        const produit = { nom, prix, quantite };
        cart.push(produit);
        afficherPanier();
        // Réinitialiser les champs d'entrée
        document.getElementById('nom').value = '';
        document.getElementById('prix').value = '';
        document.getElementById('quantite').value = '';
    } else {
        alert("Veuillez remplir tous les champs correctement.");
    }
}

function afficherPanier() {
    const listeProduits = document.getElementById('liste-produits');
    listeProduits.innerHTML = ''; // Vider la liste avant de la remplir

    cart.forEach((produit, index) => {
        const li = document.createElement('li');
        li.textContent = `${produit.nom} - Prix : ${produit.prix}€ - Quantité : ${produit.quantite}`;
        
        // Créer un bouton pour supprimer le produit
        const btnSupprimer = document.createElement('button');
        btnSupprimer.textContent = "Supprimer le produit";
        btnSupprimer.onclick = () => supprimerProduit(index);
        
        li.appendChild(btnSupprimer);
        listeProduits.appendChild(li);
    });
}

function supprimerProduit(index) {
    cart.splice(index, 1); // Supprimer le produit à l'index donné
    afficherPanier(); // Met à jour l'affichage du panier
}

function viderPanier() {
    cart = []; // Réinitialise le panier
    afficherPanier(); // Met à jour l'affichage
}

function afficherTotal() {
    const total = cart.reduce((acc, produit) => acc + produit.prix * produit.quantite, 0);
    document.getElementById('total').textContent = `Total : ${total.toFixed(2)}€`;
}
