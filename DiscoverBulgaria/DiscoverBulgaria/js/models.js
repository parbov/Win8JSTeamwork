(function () {
    var PlaceModel = WinJS.Class.define(function (name, region, url, imgUrl) {
        this.name = name;
        this.region = region;
        this.url = url;
        this.imgUrl = imgUrl;
    }, {
        name: "",
        region: "",
        url: "",
        imgUrl:""
    })

    WinJS.Namespace.define("Models", {
        PlaceModel: PlaceModel
    })
})()