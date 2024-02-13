# DEVOPS ESGI

Bienvenue dans l'évaluation Devops de l'ESGI.

## Prérequis

- [Docker](https://www.docker.com/)

## Description

Ce dépôt contient une application Node.js simple qui affiche une simple page web indiquant le nombre de visite de la page. L'application est fournie avec un Dockerfile qui permet de construire une image Docker contenant l'application.

## Installation

Pour cloner le dépôt, exécutez la commande suivante :

```bash
git clone https://github.com/Bertrand2808/ESGIDevops.git
```

## Utilisation

### Commandes pour fabriquer l'image :

Vous pouvez utiliser la commande suivante pour fabriquer l'image Docker à partir du Dockerfile :

```bash
docker image build --tag=docker-ci:1.0.0 ./
```

### TEST pour vérifier le bon fonctionnement :

#### Localement :

Vous pouvez exécuter la commande suivante pour démarrer un conteneur à partir de l'image nouvellement créée et vérifier si l'application fonctionne correctement :

```bash
# test-container est le nom donné au conteneur à titre d'exemple
docker run -d --name test-container docker-ci:1.0.0 node index.js
```

Vous pouvez ensuite vérifier si l'application répond correctement en exécutant la commande suivante :

```bash
docker exec test-container curl http://localhost:3000
```

Vous devriez voir le message suivant s'afficher :

![1707828205670](image/Readme/1707828205670.png)

Enfin, vous pouvez arrêter le conteneur avec la commande suivante :

```bash
docker stop test-container
```

### Dans le CI Github Actions :

Les étapes du CI sont déjà définies dans le workflow GitHub Actions. Après chaque push sur la branche principale ou l'ouverture d'une pull request, le workflow construit l'image Docker et exécute des tests pour vérifier son bon fonctionnement.

Rendez vous sur le dépôt git, dans l'onglet **Actions** : https://github.com/Bertrand2808/ESGIDevops/actions


De là, vous trouverez les différents workflows qui ont été exécutés ou sont en cours d'exécution :

![1707834946586](image/Readme/1707834946586.png)

Pour plus de détails vous pourrez développer les onglets et afficher les logs des différentes étapes. Si l'icone indique un succès, cela signifie que le workflow a été exécuté avec succès, sinon, il y a eu un problème.

![1707834998379](image/Readme/1707834998379.png)

## Auteurs

- Bertrand
