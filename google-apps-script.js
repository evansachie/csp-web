/**
 * CSP Contact Form → Google Sheets
 * ─────────────────────────────────────────────────────────────────
 * SETUP INSTRUCTIONS
 *
 * 1. Go to https://sheets.google.com and create a new spreadsheet
 *    named "CSP Contact Form Submissions"
 *
 * 2. Rename the first tab (bottom of screen) to: Submissions
 *
 * 3. Add these headers in row 1 (one per column, A→F):
 *    Timestamp | Name | Company | Email | Phone | Message
 *
 * 4. In the spreadsheet, click Extensions → Apps Script
 *
 * 5. Delete any existing code and paste the entire contents of
 *    this file into the editor
 *
 * 6. Click Save (Ctrl+S / Cmd+S), then click Deploy → New deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Click Deploy. Authorise when prompted.
 *
 * 7. Copy the Web App URL — it looks like:
 *    https://script.google.com/macros/s/AKfyc.../exec
 *
 * 8. In your Next.js project, create (or open) .env.local and add:
 *    NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfyc.../exec
 *
 * 9. Restart the dev server (pnpm dev) — the form will now submit to
 *    the sheet.
 *
 * NOTES
 * - Every time you edit this script you must create a NEW deployment
 *   (Deploy → New deployment) — editing an existing deployment does
 *   not update the live URL behaviour.
 * - To get email notifications for new submissions, in the sheet go to
 *   Tools → Notification rules → set to "Any changes made".
 * ─────────────────────────────────────────────────────────────────
 */

const SHEET_NAME = "Submissions";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name        || "",
      data.company     || "",
      data.email       || "",
      data.phone       || "",
      data.message     || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "CSP form endpoint is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
