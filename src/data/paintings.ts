import type { ImageMetadata } from 'astro';

export interface Piece {
  slug: string;
  images: { src: ImageMetadata; alt: string }[];
  title: string;
  medium: string;
  year: string;
  dimensions: string;
}

import painting11 from '../assets/images/paintings/painting 11.png';
import painting8  from '../assets/images/paintings/painting 8.jpg';
import painting9  from '../assets/images/paintings/painting 9.jpg';
import painting10 from '../assets/images/paintings/painting 10.jpg';
import painting12 from '../assets/images/paintings/painting 12.jpg';
import painting13 from '../assets/images/paintings/painting 13.jpg';
import painting14 from '../assets/images/paintings/painting 14.jpg';
import painting15 from '../assets/images/paintings/painting 15.jpg';
import painting16 from '../assets/images/paintings/painting 16.jpg';
import painting17 from '../assets/images/paintings/painting 17.jpg';
import painting1  from '../assets/images/paintings/Painting 1.jpg';
import painting2  from '../assets/images/paintings/painting 2.jpg';
import painting3  from '../assets/images/paintings/painting 3.jpg';
import painting4  from '../assets/images/paintings/painting 4.jpg';
import painting5  from '../assets/images/paintings/painting 5.jpg';
import painting6  from '../assets/images/paintings/painting 6.jpg';
import painting7  from '../assets/images/paintings/painting 7.jpg';

export const paintings: Piece[] = [
  { slug: 'resin-and-salt',       images: [{ src: painting11, alt: 'Resin and salt' }],          title: 'Resin and salt',          medium: 'Encaustic, coarse salt, iron',        year: '2023', dimensions: '80 × 80 cm' },
  { slug: 'tide-and-char',        images: [{ src: painting8,  alt: 'Tide and char' }],            title: 'Tide and char',           medium: 'Burnt oak, pigment, resin',           year: '2023', dimensions: '100 × 80 cm' },
  { slug: 'dense-morning',        images: [{ src: painting9,  alt: 'Dense morning' }],            title: 'Dense morning',           medium: 'Oil on fire-treated panel',           year: '2022', dimensions: '60 × 80 cm' },
  { slug: 'ember-field',          images: [{ src: painting10, alt: 'Ember field' }],              title: 'Ember field',             medium: 'Scorched oak, raw pigment',           year: '2024', dimensions: '90 × 70 cm' },
  { slug: 'deep-varnish',         images: [{ src: painting12, alt: 'Deep varnish' }],             title: 'Deep varnish',            medium: 'Layers of pine resin, oil',           year: '2022', dimensions: '70 × 50 cm' },
  { slug: 'wood-and-weather',     images: [{ src: painting13, alt: 'Wood and weather' }],         title: 'Wood and weather',        medium: 'Scorched panel, earth pigment',       year: '2023', dimensions: '100 × 75 cm' },
  { slug: 'slow-fire',            images: [{ src: painting14, alt: 'Slow fire' }],                title: 'Slow fire',               medium: 'Fire-darkened oak, resin pour',       year: '2024', dimensions: '80 × 60 cm' },
  { slug: 'pale-ground',          images: [{ src: painting15, alt: 'Pale ground' }],              title: 'Pale ground',             medium: 'Encaustic, bleached linen',           year: '2023', dimensions: '60 × 90 cm' },
  { slug: 'smoke-line',           images: [{ src: painting16, alt: 'Smoke line' }],               title: 'Smoke line',              medium: 'Oil, raw ash on panel',               year: '2022', dimensions: '90 × 70 cm' },
  { slug: 'night-resin',          images: [{ src: painting17, alt: 'Night resin' }],              title: 'Night resin',             medium: 'Poured resin, charcoal, iron oxide',  year: '2024', dimensions: '100 × 80 cm' },
  { slug: 'char-and-field',       images: [{ src: painting1,  alt: 'Char and field' }],           title: 'Char and field',          medium: 'Burnt oak, iron oxide',               year: '2023', dimensions: '90 × 70 cm' },
  { slug: 'still-water-dark-edge',images: [{ src: painting2,  alt: 'Still water, dark edge' }],   title: 'Still water, dark edge',  medium: 'Resin, charcoal on linen',           year: '2023', dimensions: '80 × 60 cm' },
  { slug: 'low-smoke',            images: [{ src: painting3,  alt: 'Low smoke' }],                title: 'Low smoke',               medium: 'Oil, ash on panel',                   year: '2022', dimensions: '100 × 75 cm' },
  { slug: 'tallow-light',         images: [{ src: painting4,  alt: 'Tallow light' }],             title: 'Tallow light',            medium: 'Beeswax, pine resin on oak',          year: '2023', dimensions: '60 × 80 cm' },
  { slug: 'grain-burning',        images: [{ src: painting5,  alt: 'Grain, burning' }],           title: 'Grain, burning',          medium: 'Scorched panel, iron ground',         year: '2022', dimensions: '90 × 90 cm' },
  { slug: 'the-last-field',       images: [{ src: painting6,  alt: 'The last field' }],           title: 'The last field',          medium: 'Oil, resin on linen',                 year: '2023', dimensions: '80 × 60 cm' },
  { slug: 'amber-interior',       images: [{ src: painting7,  alt: 'Amber interior' }],           title: 'Amber interior',          medium: 'Pine resin, beeswax, oil',            year: '2024', dimensions: '70 × 100 cm' },
];
