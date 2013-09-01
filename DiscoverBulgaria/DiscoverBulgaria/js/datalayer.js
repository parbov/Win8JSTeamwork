(function () {

    var places = [
            new Models.PlaceModel("Memorial Temple ”St. Alexander Nevski“", "Sofia", "http://100obekta.com/en/%D1%85%D1%80%D0%B0%D0%BC-%D0%BF%D0%B0%D0%BC%D0%B5%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%B2%D0%B5%D1%82%D0%B8-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%8A%D1%80-%D0%BD%D0%B5%D0%B2%D1%81%D0%BA/",
                "http://100obekta.com/wp-content/uploads/2012/12/4f52dc1233feb1f8e43207f5469f1210.jpg"),
            new Models.PlaceModel("National Palace of Culture (NDK)", "Sofia", "http://100obekta.com/en/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5%D0%BD-%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86-%D0%BD%D0%B0-%D0%BA%D1%83%D0%BB%D1%82%D1%83%D1%80%D0%B0%D1%82%D0%B0-%D0%BD%D0%B4%D0%BA/",
                "http://100obekta.com/wp-content/uploads/2012/12/0907104858_NDK-1.jpg"),
            new Models.PlaceModel("National Gallery of Art", "Sofia", "http://100obekta.com/en/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%B0-%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F/",
                "http://100obekta.com/wp-content/uploads/2012/12/Sofia-national-art-gallery-ex-palace.jpg"),
            new Models.PlaceModel("National Museum “Earth and Man”", "Sofia", "http://100obekta.com/en/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5%D0%BD-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%B7%D0%B5%D0%BC%D1%8F%D1%82%D0%B0-%D0%B8-%D1%85%D0%BE%D1%80%D0%B0%D1%82%D0%B0/",
                "http://100obekta.com/wp-content/uploads/2012/12/cd4cf7bae82e6261bf4c677370521c57.jpg"),
            new Models.PlaceModel("Ethnographic Institute and Museum", "Sofia", "http://100obekta.com/en/%D0%B5%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D1%81%D0%BA%D0%B8-%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%81-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9/",
                "http://100obekta.com/wp-content/uploads/2012/12/Sofia-national-art-gallery-ex-palace.jpg"),
            new Models.PlaceModel("National Stadium “Vasil Levski”", "Sofia", "http://100obekta.com/en/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5%D0%BD-%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB-%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8/",
                "http://100obekta.com/wp-content/uploads/2012/12/98a31bd4828edeb408f22fc7c6a7a1fb.jpg"),
            new Models.PlaceModel("National Archaeological Museum", "Sofia", "http://100obekta.com/en/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5%D0%BD-%D0%B0%D1%80%D1%85%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82/",
                "http://100obekta.com/wp-content/uploads/2012/12/0137d434dce5fd9d771d90ac5cf8a045.jpg"),
            new Models.PlaceModel("Sofia zoo", "Sofia", "http://100obekta.com/en/%D1%81%D0%BE%D1%84%D0%B8%D0%B9%D1%81%D0%BA%D0%B8-%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA/",
                "http://100obekta.com/wp-content/uploads/2012/12/f3bb99c2303633672033a0f9e58b6814.jpg"),
    ]

    var getPlaces = function () {
        return places;
    }

 
    WinJS.Namespace.define("Data", {
        getPlaces: getPlaces
    });
})()