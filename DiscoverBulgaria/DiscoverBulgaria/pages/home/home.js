(function () {
    "use strict";
    var networkInformation = Windows.Networking.Connectivity.NetworkInformation;

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.


        init: function (element, options) {
            HomeCodeBehind.callLoadPlaces();

        },
        ready: function (element, options) {
            networkInformation.addEventListener("networkstatuschanged", this.onNetworkStatusChanged);
            this.updateLayout(element, Windows.UI.ViewManagement.ApplicationView.value, null);
        },

        unload: function()
        {
            // Unregistering for connection change
            networkInformation.removeEventListener("networkstatuschanged", this.onNetworkStatusChanged);
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

        },

        onNetworkStatusChanged: function(eventArgs)
        {
                // Retrieve the InternetConnectionProfile
            var internetConnectionProfile = networkInformation.getInternetConnectionProfile();
                // Accesses the NetworkConnectivityLevel
            var networkConnectivityLevel = internetConnectionProfile.getNetworkConnectivityLevel();
                // Switch on NetworkConnectivityLevel
            switch (networkConnectivityLevel) {
                case Windows.Networking.Connectivity.NetworkConnectivityLevel.none:
                    Windows.UI.Popups.MessageDialog("No Network Connectivity").showAsync();

                case Windows.Networking.Connectivity.NetworkConnectivityLevel.localAccess:
                    Windows.UI.Popups.MessageDialog("Local Access Connection").showAsync();

                case Windows.Networking.Connectivity.NetworkConnectivityLevel.constrainedInternetAccess:
                    Windows.UI.Popups.MessageDialog("Constrained Internet Access").showAsync();

                case Windows.Networking.Connectivity.NetworkConnectivityLevel.internetAccess:
                    //Windows.UI.Popups.MessageDialog("There is internet!").showAsync();
            }
        }
    });
})();
