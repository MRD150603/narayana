/* ============================================================
   HOME VIDEO SECTIONS — shared data source
   Real, wired-up <video>-ready slider component. `src` is left
   empty until a real video file/URL is added here (local .mp4 or
   a YouTube/Vimeo embed URL) — per instructions, no placeholder/
   fake video content is played. Until a src is filled in, each
   card shows its poster image with a "Video coming soon" state.
   Add a real file/URL to `src` (and set `type:"embed"` for a
   YouTube/Vimeo URL, default is a direct video file) to go live —
   nothing else needs to change.
   ============================================================ */
window.VIDEO_SECTIONS = [
  {
    id: "patient-videos",
    eyebrow: "Patient Stories",
    heading: "Patient Stories on Video",
    text: "Hear directly from patients about their treatment journey and recovery.",
    videos: [
      { title: "A Cataract Patient's Journey", poster: "assets/photos/official/video-cataract.webp", src: "" },
      { title: "A Squint Correction Story", poster: "assets/photos/official/video-squint.webp", src: "" },
      { title: "Living with AMD: A Patient's Experience", poster: "assets/photos/official/video-amd.webp", src: "" }
    ]
  }
];
