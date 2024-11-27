Créer un serveur Node.js et une application d'achat

Fonctionnalités de l'application :

L'application permet d'ajouter au "panier" un produit en renseignant son nom, son prix unitaire et la quantité souhaitée.
Le prix total de chaque produit est calculé automatiquement en fonction de son prix unitaire et de la quantité spécifiée.
Il est possible de supprimer un produit individuellement du panier.
Un bouton "Total des courses" permet d'afficher le montant total des produits dans le panier.
Un autre bouton permet de vider l'intégralité du panier.

------------------------------------------------------------------------------------------------------------------------------------------------
Instaler les modules node

Instructions pour configurer un projet Node.js avec Express et Nodemon :

- Créez un dossier vide pour votre projet.
- Ouvrez le terminal et accédez au dossier créé.
- Exécutez la commande : npm init.
- Appuyez sur la touche Entrée pour chaque question jusqu'à ce que "YES" apparaisse pour confirmer la configuration.
- Installez Express en exécutant : npm install express.
- Installez Nodemon en exécutant : npm install nodemon.
(Nodemon permet de redémarrer automatiquement le serveur après chaque modification.)

À ce stade, tous les packages, le fichier package.json et le dossier node_modules seront créés.

- Dans le fichier package.json, ajoutez dans la section "scripts{}" : "start": "nodemon index.js" 
Utilisez la commande npm start pour lancer le serveur avec Nodemon.

                        OU

- Pour lancer le server avec express Dans le fichier package.json, ajoutez dans la section "scripts{}" : "start": "node index.js",
Utilisez la commande npm start pour lancer le serveur.

------------------------------------------------------------------------------------------------------------------------------------------------

Dans le fichier index.js, ajoutez le code suivant :

- Créez une constante port pour définir le port du serveur. Le serveur essaiera d’utiliser un port défini dans process.env.PORT (pour les environnements de déploiement) ou utilisera par défaut le port 3000.
  const port = process.env.PORT || 3000;
- Créez une constante app pour appeler la fonction express, qui initialise notre application et prépare le serveur à démarrer.
  const express = require('express');
  const app = express();
- Pour que le serveur "écoute" les connexions entrantes, utilisez app.listen :
  app.listen(port, () => {
    console.log(`Serveur est en ligne sur le port ${port}`);
  });

------------------------------------------------------------------------------------------------------------------------------------------------

Dans le terminal, tapez la commande suivante pour démarrer le serveur :

npm start
- Le serveur Node.js est maintenant en cours d'exécution.

Ouvrez votre navigateur et allez à l'adresse suivante pour accéder au serveur :
  http://localhost:3000/
