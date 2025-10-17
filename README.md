# Morpion - Application FastAPI

## Description

Application web simple du jeu du morpion (tic-tac-toe) développée avec **FastAPI**, **HTML**, **CSS**, et **JavaScript**.
Le projet est conteneurisé avec Docker et disponible sur Docker Hub.

## Lancer l'application

### 1. Récupérer l'image Docker

```bash
docker pull Konoriki/my-fastapi-app:latest
```

### 2. Lancer le conteneur

```bash
docker run -d -p 8000:80 Konoriki/my-fastapi-app:latest
```

### 3. Accéder à l'application

Ouvre ton navigateur à l’adresse :

```
http://localhost:8000
```

## Jouer au morpion

* Le joueur **X** commence la partie.
* Clique sur une case vide pour jouer ton tour.
* Le message sous la grille indique le joueur courant.
* Quand un joueur gagne ou que la partie est nulle, le statut s’affiche.
* Clique sur **"Rejouer"** pour recommencer une partie.


## Tests

Pour exécuter les tests unitaires :

Créer un environnement virtuel python et installer les requirements:


```bash
python3 -m venv venv

# Sur windows
venv/Scripts/activate 

# Sur Linux
source venv/bin/activate

pip install -r requirements.txt

pytest tests/
```