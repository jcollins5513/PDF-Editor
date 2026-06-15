# W & T Detail — Invoice Editor: Setup & Deploy

This is a single-page invoice editor. It works offline by itself, and when you
add Firebase keys it syncs every invoice and the shared invoice number live
across all your desktops.

Files:
- `invoice.html` ........ the whole app
- `firebase-config.js` .. your Firebase keys (you fill this in)
- `vercel.json` ......... makes the app load at your site's root URL
- `DEPLOY.md` ........... this file

---

## Step 1 — Create the free cloud database (Firebase)

1. Go to https://console.firebase.google.com → **Add project**. Name it (e.g.
   `wt-detail-invoices`), skip Analytics, create it.
2. Left sidebar → **Build → Firestore Database → Create database**.
   Choose **Start in test mode**, pick a location, **Enable**.
3. Gear icon (top-left) → **Project settings**.
4. Under **Your apps**, click the **</>** (Web) icon, nickname it, **Register app**.
5. Firebase shows a `firebaseConfig = { ... }` block. Copy those 6 values into
   the matching lines in **`firebase-config.js`**, then save.

Open `invoice.html` — the top bar should now say **☁ Synced**.

### Make the data persist (Firestore Rules)
Test mode stops working after 30 days. In Firestore → **Rules**, paste this and
**Publish** so the app keeps working:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> This makes the database open to anyone who has your Firebase keys. That's fine
> for a small internal tool. If you later want it locked to just your shop, tell
> Claude "add a login to the invoice app" and it can add password protection.

---

## Step 2 — Put it online with Vercel

Easiest (no command line):
1. Create a free account at https://vercel.com.
2. Put these files in a folder, then drag the folder onto the Vercel dashboard
   (or push to GitHub and "Import" the repo).
3. Vercel gives you a URL like `https://wt-detail-invoices.vercel.app`.
4. Open that URL on each desktop. They all share the same invoices and number.

After deploying, add your Vercel URL to Firebase:
**Firebase → Project settings → Authorized domains → Add domain** → paste the
`*.vercel.app` domain. (Usually works without this, but it avoids edge-case
warnings.)

---

## How sync behaves
- Every edit auto-saves to the cloud a moment after you stop typing.
- The **Open saved invoice…** dropdown lists all invoices and updates live.
- **New Invoice** reserves the next number atomically, so two desktops can never
  grab the same invoice number.
- Best practice: one person edits a given invoice at a time (last save wins).
- No internet? It falls back to local-only and still works on that machine.
