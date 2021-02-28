 var firebaseConfig = {
    apiKey: "AIzaSyBiN2rd_XT6vzVghjFZLueTQVZQ3YIFnLk",
    authDomain: "proj21-d2f90.firebaseapp.com",
    databaseURL: "https://proj21-d2f90-default-rtdb.firebaseio.com",
    projectId: "proj21-d2f90",
    storageBucket: "proj21-d2f90.appspot.com",
    messagingSenderId: "394835535664",
    appId: "1:394835535664:web:b415b8a7edb770554fcaf5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var nameV, rollV, secV, genV;
  function Ready(){
	  nameV = document.getElementById('namebox').value;
	  rollV = document.getElementById('rollbox').value;
	  secV = document.getElementById('secbox').value;
	  genV = document.getElementById('genbox').value;
  }
  
  // Insert Function ------//
  document.getElementById('insert').onclick = function(){
	  Ready();
	  firebase.database().ref('task/'+genV).set({
		  Employee: nameV,
		  Task: rollV,
		  Priority: secV,
		  DueDate: genV,
	  });
  }
  
  
  //----- Selection Function ---//
document.getElementById("select").onclick = function(){
Ready();
firebase.database().ref('task/'+nameV).on('value',function(snapshot){
	document.getElementById('namebox').value= snapshot.val().Employee;
	document.getElementById('secbox').value= snapshot.val().Task;
	document.getElementById('genbox').value= snapshot.val().DueDate;
});
}	


// Update Function ------//
  document.getElementById('update').onclick = function(){
	  Ready();
	  firebase.database().ref('task/'+nameV).update({
		  Task: rollV,
		  Priority: secV,
		  DueDate: genV,
	  });
  }
  
  // Delete Function ------//
  document.getElementById('delete').onclick = function(){
	  Ready();
	  firebase.database().ref('task/'+nameV).remove();
  }