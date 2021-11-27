document.addEventListener("arlojscontrolsloaded", function() {
  var platformID = "websitetestdata.arlo.co";

  var eventList1 = {
    moduleType: "UpcomingEvents",
    targetElement: "#upcoming-events-list1",
    template: "#upcoming-events-list1-template",
    maxCount: 2,
    includeLoadMoreButton: true,
    loadMoreButtonText: "Show More",
    callbacks: {
      onShow: eventListOnShow
    }
  };

  function eventListOnShow(getEventListItemsFunction, $) {
    ElementQueries.init();

    var listItems = $(getEventListItemsFunction());
    listItems.each(function(i, li) {
      var offerItems = $(li).find('.arlo-offer-li, .arlo-offer-container').not(".arlo-discount-offer").not(":only-child");
      offerItems.prepend('<span class="arlo-offer-label">Standard</span>');
      offerItems.addClass('arlo-pricing-table');
    });
  }

  var app = new window.ArloWebControls();

  app.start({
    "platformID": platformID,
    "googleMapsAPIKey": "AIzaSyCGqwCAGKeNOGgMeyl40gyE9n721EO5eFc",
    "showDevErrors": false,
    "modules": [eventList1]
  });
});