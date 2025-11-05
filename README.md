# React

A learning React project that demonstrates building a small restaurants listing app with:
- React + React Router
- Context API for shared user state
- A small Express mock API (serves `menu.json`)
- Parcel used as the bundler (installed as a dev dependency)
- Tailwind for styling
- Redux Toolkit + react-redux (store wired into the app)

This repository is a teaching playground to learn core React patterns: components, hooks, routing, context, and basic state management.

---

## Prerequisites
- Node.js (16+ recommended)
- npm (comes with Node)

## Quick start
1. Open a terminal and change to the project folder that contains `package.json`:

```bash
cd /path/to/NamasteReact/NamasteReact
```

2. Install dependencies:

```bash
npm install
```

3. Start the mock API server (Express) which serves `menu.json` on port 5000:

```bash
npm start
# => runs `node server.js` and starts server at http://localhost:5000
```

4. Start the front-end dev server (Parcel). There isn't currently a `dev` script in `package.json`, so either run Parcel directly with npx, or add a script:

Option A — run with npx (no package.json changes required):

```bash
npx parcel index.html
# Parcel will serve the app (default port 1234 unless occupied)
```

Option B — add a script to `package.json` and then run it:

Add under the `scripts` section in `package.json`:

```json
"dev": "parcel index.html",
"build": "parcel build index.html"
```

Then run:

```bash
npm run dev
```

After the Parcel dev server starts you can open:

- Frontend: http://localhost:1234
- Mock API: http://localhost:5000/api/menu

---

## Project structure (high level)
- `index.html` - Parcel entry
- `server.js` - Express mock API (serves `menu.json` at `/api/menu`)
- `src/` - React source files
  - `src/components/` - React components (Header, BodyWithApiCall, RestaurantCard, etc.)
  - `src/utils/LoggedInUserContext.js` - Context that provides `{ user, setUser }`
  - `src/RestaurantsAppApi.js` - App entry that sets up React Router, Redux Provider and LoggedInUserContext Provider
  - `src/redux/` - Redux store and slices (Redux Toolkit)

## Important files / behavior notes
- `server.js` — starts on port 5000 and exposes GET `/api/menu` which reads `menu.json` and returns it as JSON.
- `src/RestaurantsAppApi.js` — the app layout (`AppLayout`) wraps the app with both the Redux `<Provider>` (store) and the `LoggedInUserContext` Provider. Routes are defined with `createBrowserRouter` and `RouterProvider`.
- `src/utils/LoggedInUserContext.js` — provides context default shape `{ user: { name, email }, setUser }`.

## Troubleshooting
- If `http://localhost:1234` doesn't open:
  - Make sure you started Parcel from the directory that contains `index.html` / `package.json` (`/NamasteReact/NamasteReact`).
  - Start Parcel with `npx parcel index.html` or add a `dev` script then `npm run dev`.
  - If port 1234 is already in use, Parcel will pick another port; check the terminal output to see the URL.
  - If you previously ran `npm install` in a different directory, you might be missing dependencies. Run `npm install` in `/NamasteReact/NamasteReact`.

- If `/api/menu` returns an error, ensure `npm start` is running and that `menu.json` exists at the project root.

## Adding features
- To wire a cart feature, use the existing Redux setup (Redux Toolkit + `react-redux`). The app already imports `appStore` in `RestaurantsAppApi.js` and wraps the layout with `<Provider store={appStore}>`.
- To add a dev script to package.json, update the `scripts` section as described above.

## Suggestions / next steps
- Add `dev` and `build` scripts to `package.json` for convenience.
- Add basic README badges (Node version, build status) if you add CI.
- Add tests for critical components (Jest + React Testing Library) if you want to practice testing.

---

If you'd like, I can:
- Add the `dev` and `build` scripts to `package.json` now.
- Create a small `CONTRIBUTING.md` or PR template.
- Verify the exact port Parcel uses on your machine and add a `dev` script that specifies a port.

Which of the above would you like me to do next?
