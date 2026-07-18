/**
 * Google Apps Script Web App Integration for Brownstone Consulting
 * 
 * Instructions:
 * 1. Open your target Google Spreadsheet:
 *    https://docs.google.com/spreadsheets/d/1hzo6RLe3WHa5N-z7IZuUQExaXl6x0_T7BLvJr9GChOo/edit
 * 2. In the top menu, go to Extension > Apps Script.
 * 3. Delete any default code in Code.gs and paste the code below.
 * 4. In the top right, click "Deploy" > "New deployment".
 * 5. Click the gear icon next to "Select type" and select "Web app".
 * 6. Set:
 *    - Description: "Brownstone Form Lead Logging API"
 *    - Execute as: "Me (your-email@gmail.com)"
 *    - Who has access: "Anyone" (Critical to allow website visitors to log data anonymously)
 * 7. Click "Deploy". Authorize any Google permissions if requested.
 * 8. Copy the generated "Web app URL" and paste it into index.js (replacing the GOOGLE_SCRIPT_URL placeholder).
 */

function doPost(e) {
  try {
    // Open target spreadsheet
    var sheetId = "1hzo6RLe3WHa5N-z7IZuUQExaXl6x0_T7BLvJr9GChOo";
    var ss = SpreadsheetApp.openById(sheetId);
    var sheet = ss.getSheets()[0]; // Log to first active worksheet tab
    
    var name = "";
    var email = "";
    var phone = "";
    var sector = "";
    var message = "";
    
    // Check if payload is sent as JSON body or form parameters
    if (e.postData && e.postData.contents) {
      try {
        var data = JSON.parse(e.postData.contents);
        name = data.name || "";
        email = data.email || "";
        phone = data.phone || "";
        sector = data.sector || "";
        message = data.message || "";
      } catch (err) {
        name = e.parameter.name || "";
        email = e.parameter.email || "";
        phone = e.parameter.phone || "";
        sector = e.parameter.sector || "";
        message = e.parameter.message || "";
      }
    } else {
      name = e.parameter.name || "";
      email = e.parameter.email || "";
      phone = e.parameter.phone || "";
      sector = e.parameter.sector || "";
      message = e.parameter.message || "";
    }
    
    // Append fields sequentially to Columns A-E (No Timestamp)
    sheet.appendRow([
      name,      // Column A
      email,     // Column B
      phone,     // Column C
      sector,    // Column D
      message    // Column E
    ]);
    
    // Return standard success response
    return ContentService.createTextOutput(JSON.stringify({
      result: "success"
    })).setMimeType(ContentService.MimeType.JSON);
       
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

