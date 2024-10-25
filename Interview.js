function OuterFunction(){
	var a = 1;
    const InnerFunction = function () {
  	console.log(a);
  }
	return InnerFunction; 
}
var z = OuterFunction();
z();