(function () {

    var goToPlaceDetailsPage = function (invokeEvent) {
        WinJS.Navigation.navigate("/pages/placedetails/placedetails.html", {
            indexInPlacesList: invokeEvent.detail.itemIndex
        });
    }

    WinJS.Utilities.markSupportedForProcessing(goToPlaceDetailsPage);

    WinJS.Namespace.define("HomeCodeBehind", {
        callLoadPlaces: function () {
            ViewModels.loadPlaces();
        },

        goToPlaceDetailsPage: goToPlaceDetailsPage
    })
})();