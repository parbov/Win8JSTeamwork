(function () {
    var PlaceModel = WinJS.Class.define(function (name, region, url, imgUrl, text) {
        this.name = name;
        this.region = region;
        this.url = url;
        this.imgUrl = imgUrl;
        this.text = text;
    }, {
        name: "",
        region: "",
        url: "",
        imgUrl: "",
        text: ""
    })

    WinJS.Namespace.define("Models", {
        PlaceModel: PlaceModel
    })
})()