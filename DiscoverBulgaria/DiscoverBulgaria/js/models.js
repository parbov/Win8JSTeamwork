(function () {
    var PlaceModel = WinJS.Class.define(function (name, region, url) {
        this.name = name;
        this.region = region;
        this.url = url;
    }, {
        name: "",
        region: "",
        url: ""
    })

    WinJS.Namespace.define("Models", {
        PlaceModel: PlaceModel
    })
})()