// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/placedetails/placedetails.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        
        ready: function (element, options) {
            // TODO: Initialize the page here.


        //    WinJS.xhr({
        //        url: "http://100places.apphb.com/api/places/get-place?url=nana",
        //        type: "GET"
        //    }).then(function (request) {
        //        var outputElement = document.getElementById("output");
        //        outputElement.innerHTML = request.responseText
        //    });
            var x = ViewModels.places.getAt(options.indexInPlacesList);
            WinJS.Binding.processAll(element, x);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
