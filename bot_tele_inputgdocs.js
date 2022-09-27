let token = "5721336586:AAE1596qS5om2m4OGkrDpravBpCG_EjqHSI";

function getMe() {
  let response = UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/getMe");
  console.log(response.getContentText());
}

function setWebhook() {
  let webAppUrl = "https://script.google.com/macros/s/AKfycbyMRanVf-0a0eNGmk4rkMeW1B9U4njriWEbtTYnU5nhJHB5qZczX2-H5Jie0wC32TQ/exec";
  let response = UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/setWebhook?url=" + webAppUrl);
  console.log(response.getContentText());
}

function sendText() {
  let text = "Hello?";
  let data = {
    method: "post",
    payload: {
      'method': "sendMessage",
        'chat_id': '-711257031',
        'chat_id': '-711257031'+'-711257031',
        'text': text,
        'parse_mode': 'HTML'
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function send() {
  let chat_id = 711257031;
  let text = "Hello?";
  sendText(chat_id, text);
}

function doPost(e) {
  let contents = JSON.parse(e.postData.contents);
  let chat_id = contents.message.chat.id;
  let text = contents.message.text;
  SpreadsheetApp.getActive().getSheetByName("Messages").appendRow([chat_id, text]);
}
