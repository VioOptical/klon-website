# Klon Website

Static lightweight deployment for two VIO Optical landing pages.

## Pages

- `/ortho-k/`
- `/solusi-mata-minus/`

## Structure

Netlify publishes only `public/`. Each page contains:

- `index.html`
- `styles.css`
- `app.js`
- `assets/images/*.webp`

The heavy Leadpages export assets, local font mirrors, and local analytics mirrors are not part of the deploy output.

## Local Preview

Run a static server from `public/`:

```bash
cd public
python -m http.server 4175
```

Then open:

```text
http://localhost:4175/ortho-k/
http://localhost:4175/solusi-mata-minus/
```

## Netlify

Netlify publish directory: `public`.

Custom domain rewrites are configured in `netlify.toml`:

- `https://ortho-k.viooptical.com/` -> `/ortho-k/`
- `https://solusi-mata-minus.viooptical.com/` -> `/solusi-mata-minus/`
