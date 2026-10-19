# Atelier — Hero Section

Fullscreen hero landing section built with React, Tailwind CSS and Lucide React, with an animated mobile hamburger menu.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project structure

```
atelier-hero/
├── public/
│   └── videos/            <- put your background video here
│       ├── hero.mp4       <- (add this file)
│       └── README.txt
├── src/
│   ├── config/video.js    <- which video the hero uses
│   ├── components/Hero.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html             <- Google Fonts loaded here
└── tailwind.config.js     <- font families
```

## Changing the background video

1. Drop your video into `public/videos/` (name it `hero.mp4` to replace the default with no code change).
2. Different file name? Edit `LOCAL_VIDEO` in `src/config/video.js`, e.g. `'/videos/my-reel.mp4'`.
3. Restart `npm run dev`.

If the local file is missing, the page falls back to the hosted video from the original spec (`FALLBACK_VIDEO` in the same file; set it to `''` to disable).
