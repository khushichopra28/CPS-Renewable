PUT YOUR HERO VIDEO HERE
========================

1. Copy your video file into this folder (public/videos/).
   Easiest: name it  hero.mp4  - then nothing else needs changing.

2. Using a different file name? Open  src/config/video.js  and change
   LOCAL_VIDEO to match, e.g.  '/videos/my-reel.mp4'

3. Restart the dev server:  npm run dev

Notes
- MP4 (H.264) is the safest format. Keep it under ~10 MB if you can.
- If hero.mp4 is missing, the site automatically falls back to the
  original hosted video from the design spec.
