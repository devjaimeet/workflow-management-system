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
  
  var gen, name, sec, roll;
  function Ready(){
	  genV = document.getElementById('genbox').value;
	  nameV = document.getElementById('namebox').value;
	  secV = document.getElementById('secbox').value;
	  rollV = document.getElementById('rollbox').value;
	 
  }
  
//------ Get Data ------//
  function SelectAllData(){
	  firebase.database().ref('task').once('value',
	  function(AllRecords){
		  AllRecords.forEach(
		  function(CurrentRecord){
			  var name = CurrentRecord.val().DueDate;
			  var name = CurrentRecord.val().Employee;
			  var name = CurrentRecord.val().Priority; 
			  var name = CurrentRecord.val().Task;
			  AddItemsToTable(gen,name,sec,roll);
		  }
		  );
	  });
  }
  window.onload = SelectAllData
  
  //------ Fill Data Into Tables ------//
  var stdNo = 0;
  function AddItemsToTable(gen,name,sec,roll){
	  var tbody = document.getElementById('tbody1');
	  var trow = document.createElement('tr');
	  var td1 = document.createElement('td');
	  var td2 = document.createElement('td');
	  var td3 = document.createElement('td');
	  var td4 = document.createElement('td');
	  var td5 = document.createElement('td');
	  td1.innerHTML= ++stdNo;
	  td2.innerHTML= gen;
	  td5.innerHTML= name;
	  td4.innerHTML= sec;
	  td3.innerHTML= roll;
	  trow.appendChild(td1); 
	  trow.appendChild(td2); 
	  trow.appendChild(td3); 
	  trow.appendChild(td4);
	  trow.appendChild(td5); 
	  tbody.appendChild(trow);
  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  