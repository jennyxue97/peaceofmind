import urllib.request
import json

data = {
        "Inputs": {
                "input1":
                [
                    {
                            'Country': "United States",   
                            'state': "CA",   
                            'treatment': "1",   
                            'no_employees': "6-25",   
                            'tech_company': "1",   
                            'benefits': "1",   
                            'wellness_program': "1",   
                            'seek_help': "1",   
                            'anonymity': "1",   
                            'leave': "1",   
                            'col1': "0",   
                            'col2': "0",   
                            'Latitude': "0",   
                            'Country2': "United States",   
                            'country-general': "United States",   
                    }
                ],
        },
    "GlobalParameters":  {
    }
}

body = str.encode(json.dumps(data))

url = 'https://ussouthcentral.services.azureml.net/workspaces/72430c7272eb41b09f2cbf85c792b7f2/services/fc87edce0e714613b7b2e4a5ecdece7d/execute?api-version=2.0&format=swagger'
api_key = 'jrBBBr0ocoRjHyieuZznMqw8kx1MdIZRfe1taf5/cS/tvHOvyeeI0R33H6Rus/OKGhvR0ivUqYrhA5shgeebgg==' # Replace this with the API key for the web service
headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

req = urllib.request.Request(url, body, headers)

try:
    response = urllib.request.urlopen(req)

    result = response.read()
    print(result)
except urllib.error.HTTPError as error:
    print("The request failed with status code: " + str(error.code))

    # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
    print(error.info())
    print(json.loads(error.read().decode("utf8", 'ignore')))
