
var myHttp = new XMLHttpRequest();
var allCountry = [];
myHttp.open("GET" , "https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
myHttp.send();
myHttp.addEventListener("readystatechange", function(){
    if (myHttp.readyState == 4){
        allCountry = JSON.parse(myHttp.response);
		console.log(myHttp.response)
        displayPosts();
    }
});

function displayPosts(){
    let cartoona = ``;
    for (var i = 0 ; i<allCountry.length ; i++){
        cartoona +=`
         <tr class="text-white">
         <td> ${allCountry[i].continent}</td>
         <td class="text-white"> ${allCountry[i].todayCases}</td>
         <td> ${ allCountry[i].recovered } </td>
         <td> ${ allCountry[i].todayDeaths} </td>
         </tr>
        `
    }
    document.getElementById("Data").innerHTML = cartoona;
}

