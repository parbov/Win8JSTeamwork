// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/placedetails/placedetails.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        
        ready: function (element, options) {

            var x = ViewModels.places.getAt(options.indexInPlacesList);

            WinJS.xhr({
                url: "http://100places.apphb.com/api/places/get-place?url="+x.url,
                type: "GET"
            }).then(function (request) {
                var outputElement = document.getElementById("output");
                outputElement.innerHTML = request.responseText
            });

            document.getElementById("write-text").addEventListener("click", saveInfo,false);
            document.getElementById("capturePhoto").addEventListener("click", capturePhoto, false);

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

    function saveInfo() {
        var ul = document.getElementById("output").innerText;
        var savePicker = new Windows.Storage.Pickers.FileSavePicker();
        savePicker.defaultFileExtension = ".txt"
        savePicker.fileTypeChoices.insert("Plain Text", [".txt"])
        savePicker.fileTypeChoices.insert("MS Word Text", [".doc"])
        savePicker.suggestedFileName = document.getElementById("name").innerHTML;

        savePicker.pickSaveFileAsync().then(function (file) {
            if (file) {
                Windows.Storage.FileIO.writeTextAsync(file, ul);
            }
        }, function (err) { 
            var md = Windows.UI.Popups.MessageDialog("You haven't saved the file!");
            //md.showAsync()
        });
    }

    function capturePhoto() {
        var captureUI = new Windows.Media.Capture.CameraCaptureUI();
        captureUI.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).then(function (capturedItem) {
            if (capturedItem) {
                var fileName = (document.getElementById("name").innerHTML) + ".jpg";
                capturedItem.moveAsync(Windows.Storage.KnownFolders.picturesLibrary, fileName, Windows.Storage.NameCollisionOption.generateUniqueName)
                var md = Windows.UI.Popups.MessageDialog("User captured a photo.");
                md.showAsync()
            }
            else {
                var md = Windows.UI.Popups.MessageDialog("User didn't capture a photo.");
                md.showAsync()
            }
        });
    }

   
})();
