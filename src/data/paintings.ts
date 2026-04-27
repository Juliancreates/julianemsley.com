import type { ImageMetadata } from 'astro';

export interface Piece {
  slug: string;
  images: { src: ImageMetadata; alt: string }[];
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  blurb?: string;
  caption?: string;
  price?: string;
  sold?: string;
  buyLink?: string;
  video?: string;
}

import painting11 from '../assets/images/paintings/painting 11.png';
import smokeOnTheHillsI5 from '../assets/images/paintings/smoke-on-the-hills-i-5.jpg';
import smokeOnTheHillsI6 from '../assets/images/paintings/smoke-on-the-hills-i-6.jpg';
import resinAndSalt2 from '../assets/images/paintings/resin-and-salt-2.jpg';
import resinAndSalt3 from '../assets/images/paintings/resin-and-salt-3.jpg';
import resinAndSalt4 from '../assets/images/paintings/resin-and-salt-4.jpg';
import resinAndSalt5 from '../assets/images/paintings/resin-and-salt-5.jpg';
import painting8  from '../assets/images/paintings/painting 8.jpg';
import painting9  from '../assets/images/paintings/painting 9.jpg';
import denseMorning2 from '../assets/images/paintings/dense-morning-2.jpg';
import painting10 from '../assets/images/paintings/painting 10.jpg';
import emberField3 from '../assets/images/paintings/ember-field-3.jpg';
import emberField4 from '../assets/images/paintings/ember-field-4.jpg';
import emberField5 from '../assets/images/paintings/ember-field-5.jpg';
import slowFire4 from '../assets/images/paintings/slow-fire-4.jpg';
import painting15 from '../assets/images/paintings/painting 15.jpg';
import paleGround2 from '../assets/images/paintings/pale-ground-2.jpg';
import paleGround3 from '../assets/images/paintings/pale-ground-3.jpg';
import painting16 from '../assets/images/paintings/painting 16.jpg';
import smokeLine2 from '../assets/images/paintings/smoke-line-2.jpg';
import painting17 from '../assets/images/paintings/painting 17.jpg';
import nightResin2 from '../assets/images/paintings/night-resin-2.jpg';
import contrastSeriesI3 from '../assets/images/paintings/contrast-series-i-3.jpg';
import contrastSeriesI4 from '../assets/images/paintings/contrast-series-i-4.jpg';
import painting1  from '../assets/images/paintings/Painting 1.jpg';
import charAndField2 from '../assets/images/paintings/char-and-field-2.jpg';
import charAndField3 from '../assets/images/paintings/char-and-field-3.jpg';
import painting3  from '../assets/images/paintings/painting 3.jpg';
import lowSmoke2 from '../assets/images/paintings/low-smoke-2.jpg';
import painting5  from '../assets/images/paintings/painting 5.jpg';
import grainBurning3 from '../assets/images/paintings/grain-burning-3.jpg';
import theLastFieldNew from '../assets/images/paintings/the-last-field-new.jpg';
import charcoalDiptych2 from '../assets/images/paintings/charcoal-diptych-2.jpg';
import charcoalDiptych3 from '../assets/images/paintings/charcoal-diptych-3.jpg';

export const paintings: Piece[] = [
  { slug: 'smoke-series-triptych',             images: [{ src: slowFire4, alt: 'Slow fire' }],               video: '/images/smoke-series-triptych.mov', title: 'Smoke Series Triptych',              medium: 'Paint, charcoal, resin on wood panel',       year: '2025', dimensions: '105 × 55 cm framed x 3',  price: '£2000' },
  { slug: 'smoke-on-the-hills-ii',        images: [{ src: painting1,  alt: 'Char and field' }, { src: charAndField2, alt: 'Char and field' }, { src: charAndField3, alt: 'Char and field' }],          video: '/images/char-and-field.mov', title: 'Smoke On The Hills II',         medium: 'Paint, charcoal, pastel, chalk, ink on carved wood panel',               year: '2025', dimensions: '100 × 70 cm',  price: '£1000' },
  { slug: 'smoke-on-the-hills-i',         images: [{ src: painting8, alt: 'Tide and char' }, { src: smokeOnTheHillsI5, alt: 'Tide and char' }, { src: smokeOnTheHillsI6, alt: 'Tide and char' }],           title: 'Smoke On The Hills I',          medium: 'Paint, ink, charcoal, pastel, chalk on carved wood panel',           year: '2025', dimensions: '107 × 98 cm', price: 'SOLD' },
  { slug: 'fire-in-the-hills',         images: [{ src: painting5,  alt: 'Grain, burning' }, { src: grainBurning3, alt: 'Grain, burning' }],          video: '/images/grain-burning.mov', title: 'Fire In The Hills',         medium: 'Paint, charcoal, pastel, chalk, ink on carved wood panel',         year: '2022', dimensions: '99 × 53 cm',  price: '£800' },
  { slug: 'south-downs',             images: [{ src: painting3,  alt: 'Low smoke' }, { src: lowSmoke2, alt: 'Low smoke' }],               video: '/images/low-smoke.mov', title: 'South Downs',              medium: 'Acrylic, charcoal, pastel, South Downs chalk, ink on carved wood panel',                   year: '2025', dimensions: '100 × 70 cm', blurb: 'This painting was inspired by the hazy days on the South Downs. During a walk along the Downs, I picked up some chalk. Once back at the studio I ground it into a fine dust and used it in this painting to add a layer of depth and texture.', price: '£950' },
  { slug: 'resin-and-salt',        images: [{ src: painting11, alt: 'Resin and salt' }, { src: resinAndSalt2, alt: 'Resin and salt' }, { src: resinAndSalt3, alt: 'Resin and salt' }, { src: resinAndSalt4, alt: 'Resin and salt' }, { src: resinAndSalt5, alt: 'Resin and salt' }],         title: 'Charcoal Hills Triptych',         medium: 'Charcoal, paint, ink, resin on wood panel', year: '2024', dimensions: '130 × 106 cm', blurb: 'This painting is a mixture of charcoal and acrylic paint. Inspired by the graphic landscapes left after wildfires.', price: 'SOLD' },
  { slug: 'ember-field',           images: [{ src: painting10, alt: 'Ember field' }, { src: emberField3, alt: 'Ember field' }, { src: emberField4, alt: 'Ember field' }, { src: emberField5, alt: 'Ember field' }],             title: 'Charcoal Fields',            medium: 'Charcoal, paint, ink, resin on wood panel',           year: '2025', dimensions: '107 × 38 cm framed x 3',  blurb: 'This triptych is made up of charcoal, chalk, resin and ink. I\'ve also used tools to carve into the resin to create texture. Each blade of grass in the lower half of the painting has been scratched into the resin.', price: '£1000' },
  { slug: 'dense-morning',         images: [{ src: painting9,  alt: 'Dense morning' }, { src: denseMorning2, alt: 'Dense morning' }],           title: 'Dense Morning',          medium: 'Ink, pastel, chalk, acrylic on wood panel',           year: '2025', dimensions: '105 × 55 cm Framed', price: '£800' },
  { slug: 'contrast-series-i',           images: [{ src: painting17, alt: 'Night resin' }, { src: contrastSeriesI3, alt: 'Night resin' }, { src: nightResin2, alt: 'Night resin' }, { src: contrastSeriesI4, alt: 'Night resin' }],             title: 'Contrast Series I',            medium: 'Paint, charcoal, ink on wood panel',  year: '2025', dimensions: '105 × 55 cm framed', price: 'SOLD' },
  { slug: 'inner-conflict',            images: [{ src: painting16, alt: 'Smoke line' }, { src: smokeLine2, alt: 'Smoke line' }],              title: 'Inner Conflict',             medium: 'Paint, charcoal, ink, wood, resin on wood panel',               year: '2025', dimensions: '105 × 50 cm framed', price: '£750' },
  { slug: 'conflict-series',           images: [{ src: painting15, alt: 'Pale ground' }, { src: paleGround2, alt: 'Pale ground' }, { src: paleGround3, alt: 'Pale ground' }],             title: 'Conflict Series',            medium: 'Paint, charcoal, ink, wood, resin on wood panel',           year: '2025', dimensions: '105 × 55 cm framed',  price: '£850' },
  { slug: 'charcoal-diptych',        images: [{ src: theLastFieldNew,  alt: 'The last field' }, { src: charcoalDiptych2, alt: 'The last field' }, { src: charcoalDiptych3, alt: 'The last field' }],          title: 'Charcoal Diptych',         medium: 'Paint, charcoal, resin on wood panel',                 year: '2025', dimensions: '85 × 45 cm framed x 2',  price: '£750' },
];
