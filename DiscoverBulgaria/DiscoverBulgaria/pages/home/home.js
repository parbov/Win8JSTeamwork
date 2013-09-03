﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {
            HomeCodeBehind.callLoadPlaces();

        },
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView();
            this.updateLayout(element, Windows.UI.ViewManagement.ApplicationView.value, null);

            //dataTransferManager.ondatarequested = function (event) {
            //    var deferral = event.request.getDeferral();
            //    grid.winControl.selection.getItems().done(
            //        function (items) {
            //            if (items.length > 0) {
            //                event.request.data.properties.title = "TweetScan";
            //                event.request.data.properties.description = "Share tweet from " + items[0].data.from_user_name;
            //                event.request.data.setText(items[0].data.text);

            //            }
            //        },
            //        function (error) { console.error(error.message); }
            //        );
            //    deferral.complete();
            //};
        },

        updateLayout: function (element, viewState, lastViewState) {

            // Respond to changes in viewState.

            // Get the ListView control. 
        var viewStateExampleListView =
            element.querySelector("#grid").winControl;

            // Use a ListLayout if the app is snapped or in full-screen portrait mode. 
        if (viewState === Windows.UI.ViewManagement.ApplicationViewState.snapped ||
            viewState === Windows.UI.ViewManagement.ApplicationViewState.fullScreenPortrait) {

            // If layout.Horizontal is false, the ListView
            // is already using a ListLayout, so we don't
            // have to do anything. We only need to switch
            // layouts when layout.horizontal is true. 
            if (viewStateExampleListView.layout.horizontal) {
                viewStateExampleListView.layout = new WinJS.UI.ListLayout();
            }
        }
   
            // Use a GridLayout if the app isn't snapped or in full-screen portrait mode. 
        else 
        {
            // Only switch layouts if layout.horizontal is false. 
            if (!viewStateExampleListView.layout.horizontal) {
                viewStateExampleListView.layout = new WinJS.UI.GridLayout();
            }
        }

    }
    });
})();
