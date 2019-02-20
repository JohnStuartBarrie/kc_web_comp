
### Start a dev server

```
npm install -g polymer-cli
cd start-lit-element
npm install
npm start
```

### Build for production and serve locally

Build your project and serve the build locally:

```
polymer build
polymer serve build/default
```


### Deploy

1.  [Set up Firebase CLI tools](https://firebase.google.com/docs/cli/).
2.  [Create a new Firebase project](https://firebase.google.com/console).
3.  Update firebase.json and .firebaserc with your own app details.   
4.  Deploy.

    ```
    firebase deploy
    ```

See the [Firebase CLI Reference](https://firebase.google.com/docs/cli) for more info.
