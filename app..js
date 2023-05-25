const myJSON = '{"name": "Aicholpon","age": 30,"cars": ["BMW","FORD","FIAT"]}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.cars[0];