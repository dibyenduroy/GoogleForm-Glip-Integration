function onFormSubmit(e) {
 
var url = "https://hooks.glip.com/webhook/29a7a324-2a00-497e-a282-e563a4dd2451";
//var sandbox_url ="https://hooks-glip.devtest.ringcentral.com/webhook/72925175-55d6-49a8-b568-b45c9cff9fa9";

var responses =' ';
  
   // Open a form by ID and log the responses to each question.
   var form = FormApp.openById('1rn0Jaw6EPfXWLl7Vf5DQUd-W_ezAecPNJL2pmOTzGP8');
   var formResponses = form.getResponses();
 
   var formResponse = formResponses[formResponses.length-1];
   var itemResponses = formResponse.getItemResponses();
   var customerNameresponse = itemResponses[0];
   var mrrresponse = itemResponses[2];
   responses = responses  + customerNameresponse.getResponse() ;
     
var data = {
  "icon": "http://www.freepngimg.com/download/customer/4-2-customer-png-pic.png",
  "activity": "Customer Outreach Notification",
  "title": "Customer Outreach Notification",
  "body":  "New Customer Added is " + responses + " , Link : https://docs.google.com/spreadsheets/d/1NPL3RfP2LeBgNKXyK5vrw36dditGPtQGJ3GPijc0oK8/edit?usp=sharing"
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
