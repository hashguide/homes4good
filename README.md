# Homes for Good

Student civics project site built with Vite + React + TypeScript + Tailwind + Supabase.

Main features:
- CTA to official Change.org petition (opens in new tab)
- Tracks CTA clicks in Supabase and displays a public count
- Hidden `/analytics` admin route protected by a password stored in env

Environment variables (create a `.env` file in project root):

- `VITE_SUPABASE_URL` — your Supabase project URL (used in browser client)
- `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key (used in browser client)

# Admin credentials
- `ADMIN_USERNAME` and `ADMIN_PASSWORD` — preferred non-VITE admin credentials used for initial Supabase setup and for protecting the `/analytics` route.
- (Optional) `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` — client-side fallbacks for local/dev access to `/analytics` if you want to allow login from the browser. For security in production, rely on `ADMIN_*` server-side values.

Example:

```
VITE_SUPABASE_URL=https://xyzcompany.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key

ADMIN_USERNAME=jakeisadmin
ADMIN_PASSWORD=replace-with-strong-secret

# Optional client-side fallbacks (for dev only)
VITE_ADMIN_USERNAME=jakeisadmin
VITE_ADMIN_PASSWORD=replace-with-strong-secret
```

Run locally:

```bash
npm install
npm run dev
```

Supabase setup: run `SUPABASE_SETUP.sql` in your Supabase SQL editor to create tables and RPC.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
