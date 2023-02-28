function CatFact(target) {
    this.target = target;
    this.url = "https://catfact.ninja/fact";

    this.loadFact = function () {
        // taken from: https://www.taniarascia.com/how-to-connect-an-api-with-javascript
        var request = new XMLHttpRequest()
        let parent = this;
        
        request.open('GET', this.url, true)
        request.onload = function () {
            //begin accessing JSON data here
            var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                console.log(parent);
                parent.loadTarget(data.fact)
            } else {
                console.log('error');
            }
        }
        request.send()
    }
    this.loadTarget = function (result) {
       this.target.innerHTML = result;
    }
}