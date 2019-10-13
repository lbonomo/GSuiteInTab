var gsuiteintab = gsuiteintab || {};

gsuiteintab.ShowCalendar = function(e) {
      var aURL = "https://calendar.google.com/calendar/r";
      document.getElementById('tabmail').openTab(
        "contentTab",
        { "background":  false,
          "clickHandler" : "",
          "contentPage"  :  aURL
       });
};


gsuiteintab.ShowKeep = function(e) {
      var aURL = "https://keep.google.com/";
      document.getElementById('tabmail').openTab(
        "contentTab",
        { "background":  false,
          "clickHandler" : "",
          "contentPage"  :  aURL
       });
};
