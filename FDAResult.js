function FDAResult(target) {
    this.target = target;
    this.url = "https://api.fda.gov/food/enforcement.json?limit=10&search=state:nm&sort=report_date:desc"
    // this.url = "https://api.fda.gov/food/enforcement.json?limit=10"

    this.loadData = function () {
        // taken from: https://www.taniarascia.com/how-to-connect-an-api-with-javascript
        var request = new XMLHttpRequest()
        let parent = this;
        request.open('GET', this.url, true)
        request.onload = function () {
            //begin accessing JSON data here
            var data = JSON.parse(this.response).results;
            var result = [];
            if (request.status >= 200 && request.status < 400) {
                data.forEach(recall => result.push("<br />" + recall.reason_for_recall))
                parent.loadArrayToTarget(result)
            } else {
                console.log('error');
            }
        }
        request.send()
        
    }
    this.loadArrayToTarget = function (result) {
            this.target.innerHTML = result.join(" ");
    }
}