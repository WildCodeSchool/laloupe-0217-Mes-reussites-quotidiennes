s
# Safaro

## Projet 3

### Groupe

-   Philippe Pinceloup
-   Angélique Clery
-   Emmanuel Jousselin


## Angular

### Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)

### Execution

#### Installation

```bash
git clone git@github.com:JbPasquier/mean-lineman.git
cd mean-lineman
npm install
```

#### API installation

```bash
npm run createAdmin
curl -d "email=admin@mail.com&password=12345&isAdmin=true" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/
```

#### Development

```bash
npm start
```
#### Development API

```
nodemon --exec npm run server
```

#### Production

```bash
npm run production
```

#### Exporter et Importer les badges de la BDD vers badges.json

```bash
npm run exportBadges (exporte les badges de la BDD vers badges.json)
npm run importBadges (importe les badges du dossier badges.json vers la BDD)
```
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
