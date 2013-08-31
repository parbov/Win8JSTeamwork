(function () {

    var places = [
            new Models.PlaceModel("NDK", "Sofia", "%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5%D0%BD-%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86-%D0%BD%D0%B0-%D0%BA%D1%83%D0%BB%D1%82%D1%83%D1%80%D0%B0%D1%82%D0%B0-%D0%BD%D0%B4%D0%BA/",
                "http://100obekta.com/wp-content/uploads/2012/12/0907104858_NDK-1.jpg"),
            new Models.PlaceModel("NIM", "Sofia", "D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5%D0%BD-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9/",
                "http://100obekta.com/wp-content/uploads/2012/12/9f19871bb041f392345540c341a5911f.jpg")
    ]

    var getPlaces = function () {
        return places;
    }

 
    WinJS.Namespace.define("Data", {
        getPlaces: getPlaces
    });
})()