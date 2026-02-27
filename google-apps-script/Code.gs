/**
 * Google Apps Script Web App for contact form submissions.
 *
 * Steps:
 * 1) Set SPREADSHEET_ID to your Google Sheet ID.
 * 2) Optionally change SHEET_NAME.
 * 3) Deploy as Web App:
 *    - Execute as: Me
 *    - Who has access: Anyone
 */
const SPREADSHEET_ID = '1VFB4oSbD0N3YQIqt4YiojSCjT7zsvEdWWCFIKcOmoOs';
const SHEET_NAME = 'PortfolioContactResponses';

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_();
    ensureHeaderRow_(sheet);

    const name = safeTrim_(e.parameter.Name);
    const email = safeTrim_(e.parameter.Email);
    const message = safeTrim_(e.parameter.Message);

    if (!name || !email) {
      return jsonResponse_({
        ok: false,
        error: 'Name and Email are required.',
      });
    }

    sheet.appendRow([
      new Date(),
      name,
      email,
      message,
      safeTrim_(e.parameter.userAgent),
      safeTrim_(e.parameter.pageUrl),
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({
      ok: false,
      error: err && err.message ? err.message : 'Unknown error',
    });
  }
}

function getOrCreateSheet_() {
  if (SPREADSHEET_ID === 'PASTE_YOUR_SPREADSHEET_ID_HERE') {
    throw new Error('Set SPREADSHEET_ID in Code.gs before deploying.');
  }

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    'Timestamp',
    'Name',
    'Email',
    'Message',
    'User Agent',
    'Page URL',
  ]);
}

function safeTrim_(value) {
  return value ? String(value).trim() : '';
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
