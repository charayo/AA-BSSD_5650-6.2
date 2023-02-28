function ArticleFacade(){
    this.dogArticle = function(){
        let div = document.createElement("div");
        new DogImage(div).loadImage();
        document.getElementById("results").prepend(div);
    }
    this.petArticle = function(){
        let articleDiv = document.createElement("div");

        let imgDiv = document.createElement("div");
        imgDiv.style = "float: left; width: 50%";
        new DogImage(imgDiv).loadImage();

        let factDiv = document.createElement("div");
        factDiv.style = "float: right; width: 50%";
        new CatFact(factDiv).loadFact();

        articleDiv.append(imgDiv);
        articleDiv.append(factDiv);

        document.getElementById("resullts").prepend(articleDiv);
    }
    this.pets = function(){
        let petsDiv = document.createElement("div");
        petsDiv.style = "display: flex; padding: 20px; border: solid 1px black; margin: 10px auto; width: 50%; align-items: center;";

        let div1 = document.createElement("div");
        div1.style = "padding: 5px";

        let div2 = document.createElement("div");
        div2.style = "padding: 5px";
        new DogImage(div1).loadImage();
        new DogImage(div2).loadImage();

        let factDiv = document.createElement("div");
        factDiv.style = "display: block"
        new CatFact(factDiv).loadFact();

        petsDiv.append(div1)
        petsDiv.append(div2)
        petsDiv.append(factDiv)
        document.getElementById("results").prepend(petsDiv);
    }
    
    this.allText = function () {
        let articleDiv = document.createElement ("div");
        articleDiv.style = "display: flex; padding: 20px; border: solid 1px black; margin: 10px auto; width: 50%; align-items: center;";

        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");

        new CatFact(li1).loadFact();
        new FDAResult(li2).loadData();

        ul.append(li1); 
        ul.append(li2);
        articleDiv.append(ul);

        document. getElementById("results").prepend(articleDiv);
    }
    
}