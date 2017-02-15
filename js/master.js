(function() {
  console.log("working");
    var F55 = document.querySelector('#F55'),
        F56 = document.querySelector('#F56'),
        R58 = document.querySelector('#R58'),
        thumbInfo = document.querySelectorAll('img'),
        modelName = document.querySelector('.modelName'),
        priceInfo = document.querySelector('.priceInfo'),
        modelDetails = document.querySelector('.modelDetails');

    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            console.log('Your browser is so 1990s');
        }
        httpRequest.onreadystatechange = showModelInfo;
        httpRequest.open('GET', 'includes/ajaxQuery.php' + "?model=" + this.id);
        httpRequest.send();
    }

    function showModelInfo() {
      console.log("in model info");

      //We talked in class, we couldn't figure out why this wasn't working, hopefully everything is good!
        // if (httpRequest.readystate == 4 && httpRequest.status == 200) {
          console.log("httprequest");
            modelData = JSON.parse(httpRequest.responseText);

            [].forEach.call(document.querySelectorAll('.hidden'), function(item) {
                      item.classList.remove('hidden');
                    });

            modelName.innerHTML = modelData.model;
            priceInfo.innerHTML = modelData.pricing;
            modelDetails.innerHTML = modelData.modelDetails;
        // }
    }


    for (var i = 0; i < thumbInfo.length; i++) {
      thumbInfo[i].addEventListener('click', makeRequest, false);
    }
})();
