# Klon Website

Static high-fidelity clone deployment for two VIO Optical landing pages.

## Pages

- `/ortho-k/`
- `/solusi-mata-minus/`

## Structure

Netlify publishes from the repository root. The deploy output is stored directly in:

- `ortho-k/index.html`
- `ortho-k/assets/`
- `solusi-mata-minus/index.html`
- `solusi-mata-minus/assets/`

## Local Preview

Run a static server from the repository root:

```bash
python -m http.server 4175
```

Then open:

```text
http://localhost:4175/ortho-k/
http://localhost:4175/solusi-mata-minus/
```

## Netlify

Netlify publish directory: repository root (`.`).

Custom domain rewrites are configured in `netlify.toml`:

- `https://ortho-k.viooptical.com/` -> `/ortho-k/`
- `https://solusi-mata-minus.viooptical.com/` -> `/solusi-mata-minus/`
