var firebaseConfig = {
	    apiKey: "",
	    authDomain: "",
	    databaseURL: "",
	    projectId: "",
	    storageBucket: "",
	    messagingSenderId: "332561097117",
	    appId: ""
	  };
firebase.initializeApp(firebaseConfig);


var database = firebase.database();
console.log(database);
console.log("connectect to db");


var questionref = database.ref();
// questionref.once("value").then(function(snapshot)
// {
// 	var data = (snapshot.val());
// 	for(var key in data)
// 	{
// 		console.log(key +"***" + data[key]);
// 	}


// })


