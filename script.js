//Connect to database at url and make a reference object
var myDataRef = new Firebase('https://intense-torch-1227.firebaseIO.com/');

//If value of count changes then display it
 myDataRef.child("count").on('value', function(snapshot) {
  var message = snapshot.val();
  displayCount(message);
});

 // function to add one to the count value
function add(){
 myDataRef.orderByChild("count").on("child_added", function(snapshot) {
    console.log(snapshot.val());
    myDataRef.child('count').set(snapshot.val()+1);
  });
}

// function to decrement one from count
function min(){
 myDataRef.orderByChild("count").on("child_added", function(snapshot) {
    console.log(snapshot.val());
    if(snapshot.val()>0){
      myDataRef.child('count').set(snapshot.val()-1);
    }
  });
}

//Function to reset to zero
function reset(){
  myDataRef.set({count: 0});
}

//function to display the value
function displayCount(counterval) {
  var textcounter = document.getElementById('counttext');
  textcounter.innerHTML=counterval;
}