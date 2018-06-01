// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDyE4TDFS2g1E2tg_tSueEpG5ZbKKCvwVU",
    authDomain: "angular5cruddb.firebaseapp.com",
    databaseURL: "https://angular5cruddb.firebaseio.com",
    projectId: "angular5cruddb",
    storageBucket: "angular5cruddb.appspot.com",
    messagingSenderId: "556068990102"
  }
};
