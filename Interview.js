function OuterFunction(){
	var a = 1;
    const InnerFunction = () => {
  	console.log(a);
  }
	return InnerFunction; 
}
var z = OuterFunction();
console.log(z);
z();
