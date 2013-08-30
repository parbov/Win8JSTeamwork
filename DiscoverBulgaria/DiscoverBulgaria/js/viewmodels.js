(function () {
    var placesList = new WinJS.Binding.List([]);

    var loadPlaces = function () {
        var placeDTOs = Data.getPlaces();

        var currentCount = placesList.dataSource.list.length
        placesList.dataSource.list.splice(0, currentCount);

        for (var i = 0; i < placeDTOs.length; i++) {
            placesList.push(placeDTOs[i]);
        }
    }

    WinJS.Namespace.define("ViewModels", {
        loadPlaces: loadPlaces,
        places: placesList
    });
})();