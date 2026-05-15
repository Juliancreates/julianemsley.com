export interface VideoEntry {
  slug: string;
  title: string;
  src: string;
  year: string;
  aspect: number; // width / height
}

export const videos: VideoEntry[] = [
  { slug: 'barriers-in-maple', src: '/images/barriers-in-maple-compressed.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'img-0069', src: '/images/IMG_0069.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'img-6229', src: '/images/IMG_6229_compressed.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'img-6242', src: '/images/IMG_6242_compressed.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'img-6689', src: '/images/IMG_6689_compressed.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'smoke-series', src: '/images/smoke-series-triptych.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'smoke-on-the-hills-ii', src: '/images/char-and-field.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'fire-in-the-hills', src: '/images/grain-burning.mov', title: '', year: '', aspect: 9 / 16 },
  { slug: 'low-smoke', src: '/images/low-smoke.mov', title: '', year: '', aspect: 9 / 16 },
];
