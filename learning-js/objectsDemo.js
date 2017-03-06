(function(){
  var emp = {name:"Ruchira",id:"106456",infyYears :9,totalYears :9};
  var anotheremp = emp;
  anotheremp.name ="Ruchira Agarwal";
  console.log(emp.name);
  var empUpdate = function(e){
    e.infyYears += 1;
    e.totalYears += 1;
  };
  var currYear = 2017;
  if (currYear == 2017){
    empUpdate(anotheremp);
  }
  console.log(emp.infyYears);
  console.log(emp.totalYears);

  var Movie = {
  title:"",
  releaseDate:"",
  production:""
  };
  var AvengersMovie = Object.create(Movie);
  AvengersMovie.title="Avengers, re assmeble";
  AvengersMovie.releaseDate = "31/12/2016";
  AvengersMovie.production="Marvel comics";
  console.log(typeof Movie);// object -- data type
  console.log(typeof AvengersMovie);
  console.log(typeof AvengersMovie === typeof Movie) ;
  console.log(typeof AvengersMovie.__proto__ === typeof Movie);

  var Employee = function (){
    this.name = "Ruchira"; //this is a public property
    this.location = "pune";
    var role = "lead"; // Member variable
    this.test_role = function(){
      console.log(role);
    }
  };
  var e = new Employee(); // creating a constructor of Employee
  e.name ="Niru";
  e.location = "Blr";
  console.log(e.role); //Here the output will be undefined
  e.role = "some new role"; // this will override the member variable with the same name
  console.log(e.role);
  e.test_role();
})();
