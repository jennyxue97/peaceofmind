$(function () {
    var key = "jrBBBr0ocoRjHyieuZznMqw8kx1MdIZRfe1taf5/cS/tvHOvyeeI0R33H6Rus/OKGhvR0ivUqYrhA5shgeebgg==";
    var url = 'https://ussouthcentral.services.azureml.net/workspaces/72430c7272eb41b09f2cbf85c792b7f2/services/fc87edce0e714613b7b2e4a5ecdece7d/execute?api-version=2.0&details=true';

    // Handle clicks of the Analyze button
    $("#submit_button").click(function() {
        // Get user input
        var country = $("#country").val();
        var state = $("state").val();
        var employees = $("#employees").val();
        var tech = $("#tech").val();
        var benefits = $("#benefits").val();
        var wellness = $("wellness").val();
        var help = $("#help").val();
        var anonymity = $("#anonymity").val();
        var leave = $("#leave").val();

        // Build JSON input
        var columns = ["Country", "state", "treatment", "no_employees", "tech_company", "benefits", "wellness_program", "seek_help", "anonymity", "leave", "col1", "col2", "Latitude", "Country2", "country-general"];
        var values = [country, state, 1, employees, tech, benefits, wellness, help, anonymity, leave, 0, 0, 0, country, country];

        var input1 = new Object();
        input1.ColumnNames = columns;
        input1.Values = [values];

        var inputs = new Object();
        inputs.input1 = input1;

        var wrapper = new Object();
        wrapper.Inputs = inputs;
        wrapper.GlobalParameters = new Object();

        // Call ML Web service
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(wrapper),
            headers: {
                "Authorization": "Bearer " + key,
                "Content-Type": "application/json;charset=utf-8"
            }
        }).done(function (data) {
            showResults(data);
        }).fail(function(xhr, status, err) {
            alert(status + " (" + err + ")");
        });
    });
});

function showResults(data) {
    var late = data.Results.output1.value.Values[0][7];
    var probability = data.Results.output1.value.Values[0][8];
    alert("Mental Health Awareness Score: " + Math.floor(probability * 100) + "%");
}