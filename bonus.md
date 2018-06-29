# Bonus : High Order Component

Les containers `Form.js` et `Headline.js` sont presque pareil. C'est dommage.  
Qu'est-ce qu'on fait dès qu'on se répète ? **Une fonction !** :tada:

Ou plus exactement, un [High Order Component](https://reactjs.org/docs/higher-order-components.html).

## Instructions

1. Créer un dossier `src/hocs`

2. Créer le fichier `src/hocs/withData.js`

3. Dedans, on va faire comme si on se codait un container tel quel `Form.js` ou `Headline.js`.  
Seulement, au lieu d'exporter la création d'un container, on va exporter une fonction
prenant en paramètre un composant, qui créé un container à partir de ce composant.

Par exemple :

```js
const withData = Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
```

4. Dans `Form.js` et `Headline.js`, il suffit maintenant d'importer le composant
de présentation et la fonction `withData`, et d'exporter !

```
export default withData(Form);
```


## Containerception

C'est possible un container de container ?  
Bien sûr :blush:

La container `ChangeView.js` importe également `datas` et crée une prop `data`.
Contrairement à `Form.js` et `Headline.js`, il crée aussi d'autres props.
Pas grave, on peut tout de même utiliser notre fonction `withData`.

Essayons donc ! :wink:
