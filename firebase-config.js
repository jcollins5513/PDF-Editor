// ============================================================================
//  FIREBASE SETUP — paste your project's keys below, then save this file.
// ============================================================================
//
//  Where to get these values (one-time, ~5 minutes, free):
//   1. Go to https://console.firebase.google.com  and click "Add project".
//      Name it anything (e.g. "wt-detail-invoices"). Skip Google Analytics.
//   2. In the left sidebar open  Build → Firestore Database → "Create database".
//      Choose "Start in test mode" for now, pick a location, click Enable.
//   3. Click the gear icon (top-left) → "Project settings".
//   4. Scroll to "Your apps", click the </> (Web) icon, give it a nickname,
//      click "Register app".  Firebase shows a `firebaseConfig = { ... }` block.
//   5. Copy the six values from that block into the matching lines below.
//
//  These keys are NOT secret — they are meant to live in the browser. Security
//  is controlled by Firestore Rules (see DEPLOY.md), not by hiding these values.
//
//  Until real values are filled in, the app simply runs in local-only mode.
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
