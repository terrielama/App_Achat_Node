const express = require('express');
const path = require('path');
const fs = require('fs');  // Importe le module fs

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let panier = [];

// Route pour ajouter un produit
app.post('/panier/ajouter', (req, res) => {
    const { nom, prix, quantite } = req.body;
    panier.push({ nom, prix, quantite });
    res.status(200).send({ message: 'Produit ajouté!', panier });
});

// Route pour supprimer un produit
app.delete('/panier/supprimer/:nom', (req, res) => {
    const { nom } = req.params;
    panier = panier.filter(produit => produit.nom !== nom);
    res.status(200).send({ message: 'Produit supprimé!', panier });
});

// Route pour mettre à jour la quantité
app.put('/panier/miseajour', (req, res) => {
    const { nom, quantite } = req.body;
    const produit = panier.find(p => p.nom === nom);
    if (produit) produit.quantite = quantite;
    res.status(200).send({ message: 'Quantité mise à jour!', panier });
});

// Route pour calculer le total
app.get('/panier/total', (req, res) => {
    const total = panier.reduce((acc, produit) => acc + produit.prix * produit.quantite, 0);
    res.status(200).send({ total });
});

// Route pour afficher le panier
app.get('/panier', (req, res) => {
    res.status(200).send(panier);
});

app.listen(port, () => {
    console.log(`Serveur est en ligne sur le port ${port}`);
});
