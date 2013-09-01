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

            var savePlaylistBtn = document.getElementById("write-text");
            savePlaylistBtn.addEventListener("click", function () {
                var ul = document.getElementById("placesText").innerHTML;
                var savePicker = new Windows.Storage.Pickers.FileSavePicker();
                savePicker.defaultFileExtension = ".txt"
                savePicker.fileTypeChoices.insert("Plain Text", [".txt"])
                savePicker.fileTypeChoices.insert("MS Word Text", [".doc"])
                savePicker.suggestedFileName = document.getElementById("name").innerHTML;

                savePicker.pickSaveFileAsync().then(function (file) {
                    if (file) {
                        Windows.Storage.FileIO.writeTextAsync(file, ul);
                    }
                    if (!file) {  // If the URL is really malformed or blank.
                        var md = Windows.UI.Popups.MessageDialog("You haven't saved the file!");
                        //md.showAsync()
                    }
                });
            });

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
