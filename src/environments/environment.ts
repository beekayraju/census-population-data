// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBQBdXrw8bNENFmpCh5pQouqFugkOAxBHg",
    authDomain: "census-population-data.firebaseapp.com",
    databaseURL: "https://census-population-data.firebaseio.com",
    projectId: "census-population-data",
    storageBucket: "census-population-data.appspot.com",
    messagingSenderId: "198348019813"
   }
};
