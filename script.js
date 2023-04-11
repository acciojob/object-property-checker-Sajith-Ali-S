const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
let keys = Object.keys(sampleObject);
function hasKey(key) {
  for (let i in keys) {
  	 if(keys[i]==key)return true
  }
	return false
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key)); 
