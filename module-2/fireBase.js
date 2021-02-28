var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
	apiKey: "AIzaSyBiN2rd_XT6vzVghjFZLueTQVZQ3YIFnLk",
    authDomain: "proj21-d2f90.firebaseapp.com",
    projectId: "proj21-d2f90",
    storageBucket: "proj21-d2f90.appspot.com",
    messagingSenderId: "394835535664",
    appId: "1:394835535664:web:b415b8a7edb770554fcaf5"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


