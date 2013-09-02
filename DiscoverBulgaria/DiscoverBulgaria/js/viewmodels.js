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

    var searchQuery = { queryText: "" };

    var filteredPlaces = placesList.createFiltered(function (item) {
        var queryIndexInItemString = JSON.stringify(item).indexOf(searchQuery.queryText);
        var isSelected = queryIndexInItemString > -1;
        return isSelected;
    });

    var changeSearchQuery = function (text) {
        searchQuery.queryText = text;
        placesList.notifyReload();
    }

    WinJS.Namespace.define("ViewModels", {
        loadPlaces: loadPlaces,
        places: placesList,
        searchPlaces: filteredPlaces,
        submitSearchText: changeSearchQuery
    });
})();