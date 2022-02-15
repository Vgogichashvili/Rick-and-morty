class htmlWorker {
    getCardHtml(Item){
        return `<div class="card" style="width: 18rem;">
                    <img src="${Item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Id : ${Item.id}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name : ${Item.name}</li>
                            <li class="list-group-item">Status : ${Item.status}</li>
                            <li class="list-group-item">Gender : ${Item.gender}</li>
                        </ul>
                        
                    </div>
                </div>`
    }

    genereaterickAndMortyOnView(allItems){
        var rickAndMorty = document.querySelector(".area")
        allItems.forEach(Item =>{
            rickAndMorty.innerHTML += this.getCardHtml(Item)
        })
    }
}


var apiUrl = "https://rickandmortyapi.com/api/character"
var httpRequest = new XMLHttpRequest();
httpRequest.open("GET",apiUrl);
 
httpRequest.onloadstart = function(){
    console.log("start--------");
}

httpRequest.onloadend = function(){
    var htmlService = new htmlWorker();
    var response = JSON.parse(httpRequest.response);
    console.log(response.results)
    htmlService.genereaterickAndMortyOnView(response.results)
    console.log("end");
}

httpRequest.send();