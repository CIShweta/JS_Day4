console.log("Welcome to Ajax");
document.getElementById("fetchbtn");
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
	const xhr = new XMLHttpRequest();
	console.log("button clicked");
	//open the object
	xhr.open('POST','https://dummy.restapiexample.com/api/v1/create', true);
	xhr.getResponseHeader('Content-type','application/json')
	xhr.onprogress = function(){
		console.log("it is in progress");
	}
	xhr.onload = function(){
		console.log(this.responseText);
	}
	params = `{"name":"test3","salary":"123","age":"23"}`
	xhr.send(params);
}