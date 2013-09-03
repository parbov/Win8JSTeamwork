// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/openimage/openimage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            document.getElementById("userSavedImageButton").addEventListener("click", userSavedImage, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });

    function userSavedImage() {
        var loadedPhotosList = document.getElementById("loaded-photos");
        var player = document.getElementById("openedPhoto");

        loadedPhotosList.addEventListener("click", function (event) {
            var photoEntry = event.target;

            if (photoEntry.tagName.toLowerCase() == "strong") {
                photoEntry = photoEntry.parentElement;
            }

            player.src = photoEntry.getAttribute("data-song-url");
        });

        var addPhotoListEntry = function (songName, songUrl) {
            var songEntry = document.createElement("li");
            songEntry.setAttribute("data-photo-url", songUrl);
            songEntry.innerHTML = "<strong>" + songName + "</strong>";
            loadedPhotosList.appendChild(songEntry);
        }

        var addPhoto = function (storageFile) {
            var fileUrl = URL.createObjectURL(storageFile);

            storageFile.properties.getImagePropertiesAsync().then(function (properties) {
                properties.title

                addPhotoListEntry(properties.title, fileUrl);
            });
        }

        WinJS.Utilities.id("userSavedImageButton").listen("click", function () {
            var openPicker = Windows.Storage.Pickers.FileOpenPicker();

            openPicker.fileTypeFilter.append("*");
            openPicker.pickSingleFileAsync().then(addPhoto);
        });
    }


})();
