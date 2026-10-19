// ─────────────────────────────────────────────────────────────
//  HERO BACKGROUND VIDEO — change the video here
// ─────────────────────────────────────────────────────────────
//
//  HOW TO SWAP THE VIDEO
//  1. Put your new video file in:  public/videos/
//  2. Set LOCAL_VIDEO below to its path, starting with /videos/
//     e.g. a file named "my-reel.mp4"  →  '/videos/my-reel.mp4'
//  3. Restart `npm run dev` (or re-run `npm run build`).
//
//  Tips: MP4 (H.264) works everywhere. Keep it under ~10 MB and
//  muted/looping-friendly for fast loading.
// ─────────────────────────────────────────────────────────────

// Your own file, stored in the project (public/videos/hero.mp4).
export const LOCAL_VIDEO = '/videos/hero.mp4'

// Original hosted video from the design spec. Used automatically
// if the local file is missing, so the page never shows a blank
// background. Set to '' to disable the fallback.
export const FALLBACK_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4'
