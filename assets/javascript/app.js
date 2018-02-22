
function searchNYT() {

    var optionalParms;
    var searchTerm = $("#search-term").text(response.name);
    // num-records-select
    var searchLimit = $("#num-records-select").val();
    // end-year
    var endYear = $("#end-year").text(response.name);
    // start-year
    var startYear = $("#start-year").text(response.name);

    if (endYear !== '') {
        optionalParms = optionalParm + "&end_date=" + endYear;
    }

    if (endYear !== '') {
        optionalParms = optionalParm + "&end_date=" + endYear;
    }

    var apiKey = "6f2e2d04ddcf4b79bd6f455b6aea227b";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        apiKey + "&q=" + searchTerm + optionalParms;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i <= searchLimit - 1; i++) {
            // display code
        }
    }
    );
};
