export interface Division {
  id: string;
  name: string;
  tagline: string;
  url: string;
  accentColor: string;
  vibe: string;
  gifUrl?: string;
  thumbnailUrl?: string;
}

export const divisions: Division[] = [
  {
    id: "drewimages",
    name: "DrewImages.Studio",
    tagline: "Visual Branding & Creative Direction",
    url: "https://drewimages.studio",
    accentColor: "#c9a84c", // Warm gold
    vibe: "Editorial, warm amber/gold tones",
    gifUrl: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772094669/ezgif.com-video-to-gif-converter_2_gkom6s.gif",
  },
  {
    id: "silverrushmedia",
    name: "Silver Rush Media",
    tagline: "Marketing, Content & AI Strategy",
    url: "https://silverrushmedia.com",
    accentColor: "#00d4ff", // Electric cyan
    vibe: "Tech-forward, futuristic",
    gifUrl: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772091744/ezgif.com-optimize_2_cqc3gt.gif",
    thumbnailUrl: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772092447/Screenshot_2026-02-26_at_2.53.34_AM_ojmjwk.png",
  },
  {
    id: "drewbordeaux",
    name: "Drew Bordeaux",
    tagline: "Artist & Producer",
    url: "https://drewbordeaux.com",
    accentColor: "#6b5ce7", // Deep indigo
    vibe: "Organic, musical, deep undertones",
    gifUrl: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772093618/freepik_the-colored-sand-is-flowing-like-a-lake-of-sand-an_veo3_1_1080p_16-9_24fps_48738-ezgif.com-optimize_2_iq2aie.gif",
  },
  {
    id: "suddenflight",
    name: "Sudden Flight Records",
    tagline: "Independent Music & Production",
    url: "https://suddenflight.com",
    accentColor: "#c47a5a", // Warm copper
    vibe: "Vinyl-meets-future, warm but edgy",
    gifUrl: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772088713/ezgif.com-video-to-gif-converter_ev4sae.gif",
  },
];
