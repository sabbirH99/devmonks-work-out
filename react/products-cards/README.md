# React Starter Template

Minimal Vite + React (JavaScript/JSX) starter with ESLint.

## Requirements

Node.js `^20.19.0` or `>=22.12.0`, npm.

## Scripts

```powershell
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run lint       # run ESLint
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Start a new project from this template

```powershell
git clone C:\path\to\react-starter-template my-new-app
cd my-new-app
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "chore: initial commit"
npm install
npm run dev
```

Then rename `name` in `package.json` and `<title>` in `index.html`.
