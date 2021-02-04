// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBH9L2NQMEZpsY_UWxVkewpxTcCUpjXm3Y",
    authDomain: "grayll-app-test.firebaseapp.com",
    databaseURL: "https://grayll-app-test.firebaseio.com",
    projectId: "grayll-app-test",
    storageBucket: "grayll-app-test.appspot.com",
    messagingSenderId: "751987705139",
    appId: "1:751987705139:web:c9d718fb9d43ab34076a46",
    measurementId: "G-MLQVN0YEW5"
  },

  // firebase: {
  //   apiKey: "AIzaSyCUVVIS63RokObYQ2pV9g1uksFizEEF1sY",
  //   authDomain: "grayll-web.firebaseapp.com",
  //   databaseURL: "https://grayll-web.firebaseio.com",
  //   projectId: "grayll-web",
  //   storageBucket: "grayll-web.appspot.com",
  //   messagingSenderId: "227799760832",
  //   appId: "1:227799760832:web:9032039cea6f89106b1225",
  //   measurementId: "G-ELEBZBQ86K"
  // }
  algolia: {
    app_id: 'BXFJWGU0RM',
    search_key: '6c4198951d5ceb7bfa8a101d89406825'
  }
  // algolia: {
  //   app_id: 'BXFJWGU0RM',
  //   search_key: '6c4198951d5ceb7bfa8a101d89406825'
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
