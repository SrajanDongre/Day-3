// for loop
var numbers = [10,20,30,40,50]
for (var i=0; i<numbers.length; i++){
  console.log(numbers[i])
}

//for in Loop
var json = {
  jsonData: [ 
    {a: [10,20,30,40,50]},
    {b: [11,22,33,44,55]},
    {c: [12,23,34,45,56]}
  ]
};
for (var i=0; i<json.jsonData.length; i++){
  for (var key in json.jsonData[i]){
    for (var j=0 ; j<json.jsonData[i][key].length ; j++){
      console.log(json.jsonData[i][key][j])
    }
  }
}

//forEach Loop
var details =[
  {
    Name: "Rohan",
    Age: 23
  },{
    Name: "Sohan",
    Age: 34
  },{
    Name: "Mohan",
    Age: 45
  }
  
]
details.forEach(function( data , index){
  console.log(data);
});