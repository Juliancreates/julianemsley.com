# How to develop and publish this site

This is a plain-English guide to making changes to your website and getting them live.

---

## What you're working with

- **The code** lives on your computer at `/Users/julian/Documents/JE.com`
- **GitHub** (`github.com/Juliancreates/julianemsley.com`) is the online backup of your code — think of it as saving your work to the cloud
- **Vercel** is the service that turns your code into a live website at `julianemsley.com`
- **Claude Code** is the AI tool you use to make changes — you describe what you want and it edits the files for you

The flow is: **make changes → save to GitHub → publish to Vercel**

---

## Step 1 — Open the project in Claude Code

1. Open your terminal (press `Cmd + Space`, type "Terminal", press Enter)
2. Type this and press Enter:
   ```
   cd /Users/julian/Documents/JE.com
   ```
3. Then open Claude Code:
   ```
   claude
   ```

You're now inside Claude Code with the project loaded. You can describe changes in plain English — for example:
- *"Add a new painting called Harbour Light, 2024, oil on canvas, 60x80cm"*
- *"Change the about page text to say..."*
- *"Make the navigation links slightly larger on desktop"*

Claude will read the relevant files and make the changes for you.

---

## Step 2 — Preview your changes locally

Before publishing, you can see your changes in a browser on your own computer.

In a terminal (open a new tab with `Cmd + T`):
```
cd /Users/julian/Documents/JE.com
npm run dev
```

Then open your browser and go to: **http://localhost:4321**

This is a live preview — only visible to you, not the public. Press `Ctrl + C` in the terminal to stop it when you're done.

---

## Step 3 — Save your changes to GitHub

Once you're happy with the changes, you need to save them. This is called "committing" and "pushing".

In Claude Code, just say:
> *"Commit and push these changes"*

Claude will write a short description of what changed and send it to GitHub for you.

Alternatively, you can do it yourself in the terminal:
```
git add -A
git commit -m "describe what you changed here"
git push
```

---

## Step 4 — Publish to Vercel

After pushing to GitHub, you need to deploy to make the changes live on `julianemsley.com`.

In the terminal (make sure you're in the project folder):
```
npx vercel --prod
```

This builds the site and pushes it live. It takes about a minute. When it's done it will show you the live URL.

---

## Adding new artwork

All artwork is defined in two files:
- `src/data/paintings.ts` — for paintings
- `src/data/vessels.ts` — for vessels

Images go in:
- `src/assets/images/paintings/` — for paintings
- `src/assets/images/vessels/` — for vessels

**The easiest way** is to drop your image files into the right folder, then tell Claude Code:
> *"Add a new painting: title is X, medium is Y, year is Z, dimensions are W. The image file is filename.jpg"*

Claude will add the entry to the data file for you.

---

## Troubleshooting

**"I broke something and want to undo"**
Tell Claude: *"Undo the last change"* or *"Revert to how it was before"*

**"The dev server stopped working"**
Press `Ctrl + C` to stop it, then run `npm run dev` again.

**"I get an error when pushing to GitHub"**
Run `git pull` first (this syncs any changes from GitHub), then try pushing again.

**"The site looks different locally vs live"**
Run `npm run build` to check for build errors before deploying. If there are errors, Claude can fix them.

---

## Quick reference

| What you want to do | Command |
|---|---|
| Open project in Claude Code | `cd /Users/julian/Documents/JE.com` then `claude` |
| Preview locally | `npm run dev` → go to http://localhost:4321 |
| Save changes to GitHub | `git add -A && git commit -m "message" && git push` |
| Publish live | `npx vercel --prod` |
| Stop the dev server | `Ctrl + C` |
