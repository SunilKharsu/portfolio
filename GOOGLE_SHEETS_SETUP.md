# Google Sheets Contact Form Setup

## 1) Create the Sheet
- Create a Google Sheet (example name: `Portfolio Contact Responses`).
- Copy the Spreadsheet ID from the URL:
  `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit`

## 2) Add Apps Script
- Open [script.new](https://script.new) or open Apps Script from your sheet.
- Replace default code with `/Users/sunilkharsu/Desktop/personal-portfolio/google-apps-script/Code.gs`.
- In `Code.gs`, set:
  - `SPREADSHEET_ID`
  - optional `SHEET_NAME`

## 3) Deploy Web App
- In Apps Script: `Deploy` -> `New deployment` -> type `Web app`.
- Set:
  - `Execute as`: `Me`
  - `Who has access`: `Anyone`
- Deploy and copy the `Web app URL` (ends with `/exec`).

## 4) Configure this project
- Create `.env` in project root (same level as `package.json`).
- Add:

```bash
VITE_CONTACT_SCRIPT_URL=YOUR_WEB_APP_EXEC_URL
```

- You can use `.env.example` as a template.

## 5) Run
- Start your app and submit the contact form.
- A new row should be added in your sheet with:
  - Timestamp
  - Name
  - Email
  - Message
  - User Agent
  - Page URL

## Notes
- If submission fails after redeploying Apps Script, update `.env` with the latest `/exec` URL.
- After editing `Code.gs`, redeploy a new version if required by Apps Script.
