function onFormSubmit(e) {
 
var url = "WebHook URL";
//var sandbox_url ="WebHook URL";

var responses =' ';
  
   // Open a form by ID and log the responses to each question.
   var form = FormApp.openById('<FormID>'); // https://docs.google.com/forms/d/FormID/edit
   var formResponses = form.getResponses();
 
   var formResponse = formResponses[formResponses.length-1];
   var itemResponses = formResponse.getItemResponses();
   var customerNameresponse = itemResponses[0];
   var mrrresponse = itemResponses[2];
   responses = responses  + customerNameresponse.getResponse() ;
     
var data = {
  "icon": "<Icon.png>",
  "activity": "YYYYYYYY",
  "title": "YYYYYYYY",
  "body":  "Subject..... " + responses + " , Link : https://docs.google.com/spreadsheets/d/<Google SpreadsheetID>/edit?usp=sharing"
}
var options = {
"method": "post",
"headers": {
"Content-Type": "application/json"
},
"payload": JSON.stringify(data)
};
var response = UrlFetchApp.fetch(url, options);
  
}
