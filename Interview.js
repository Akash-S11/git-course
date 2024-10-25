function OuterFunction(){
	var a = 1;
    const InnerFunction = function Innerfun() {
  	console.log(a);
  }
	return InnerFunction; 
}
var z = OuterFunction();
z();