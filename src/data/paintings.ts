import type { ImageMetadata } from 'astro';

export interface Piece {
  slug: string;
  images: { src: ImageMetadata; alt: string }[];
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  blurb?: string;
  sold?: string;
  buyLink?: string;
  video?: string;
}

import painting11 from '../assets/images/paintings/painting 11.png';
import tideAndChar2 from '../assets/images/paintings/tide-and-char-2.jpg';
import tideAndChar3 from '../assets/images/paintings/tide-and-char-3.jpg';
import tideAndChar4 from '../assets/images/paintings/tide-and-char-4.jpg';
import resinAndSalt2 from '../assets/images/paintings/resin-and-salt-2.jpg';
import resinAndSalt3 from '../assets/images/paintings/resin-and-salt-3.jpg';
import resinAndSalt4 from '../assets/images/paintings/resin-and-salt-4.jpg';
import resinAndSalt5 from '../assets/images/paintings/resin-and-salt-5.jpg';
import resinAndSalt6 from '../assets/images/paintings/resin-and-salt-6.jpg';
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
  { slug: 'resin-and-salt',        images: [{ src: painting11, alt: 'Resin and salt' }, { src: resinAndSalt2, alt: 'Resin and salt' }, { src: resinAndSalt3, alt: 'Resin and salt' }, { src: resinAndSalt4, alt: 'Resin and salt' }, { src: resinAndSalt5, alt: 'Resin and salt' }, { src: resinAndSalt6, alt: 'Resin and salt' }],         title: 'Charcoal Hills Triptych',         medium: 'Charcoal, paint, ink, resin on wood panel', year: '2025', dimensions: '130 × 106 cm', blurb: 'Coarse salt crystals pressed into hot encaustic wax, left to dissolve and leave voids. The iron ground beneath bleeds through where the surface has been scraped back.', sold: 'Sold' },
  { slug: 'tide-and-char',         images: [{ src: painting8, alt: 'Tide and char' }, { src: tideAndChar2, alt: 'Tide and char' }, { src: tideAndChar3, alt: 'Tide and char' }, { src: tideAndChar4, alt: 'Tide and char' }],           title: 'Smoke On The Hills I',          medium: 'Paint, ink, charcoal, pastel, chalk on carved wood panel',           year: '2025', dimensions: '107 × 98 cm', blurb: 'Oak panel scorched with a flame until the grain opens and chars. Raw pigment rubbed into the blackened surface, then sealed under a thin pour of resin.', sold: '£990', buyLink: 'https://buy.stripe.com/3cI5kC7c34YIfZtarE9EI00' },
  { slug: 'dense-morning',         images: [{ src: painting9,  alt: 'Dense morning' }],           title: 'Dense morning',          medium: 'Oil on fire-treated panel',           year: '2022', dimensions: '60 × 80 cm',  blurb: 'A slow study of early light over flat ground. The panel was flame-treated before painting, leaving a faint smoke residue beneath the oil.' },
  { slug: 'ember-field',           images: [{ src: painting10, alt: 'Ember field' }],             title: 'Ember field',            medium: 'Scorched oak, raw pigment',           year: '2024', dimensions: '90 × 70 cm',  blurb: 'The panel was taken to the point of combustion and extinguished. Dry pigment was applied while the wood was still warm, bonding loosely into the char.' },
  { slug: 'deep-varnish',          images: [{ src: painting12, alt: 'Deep varnish' }],            title: 'Deep varnish',           medium: 'Layers of pine resin, oil',           year: '2022', dimensions: '70 × 50 cm',  blurb: 'Built up over several months in alternating layers of pine resin and oil, each allowed to fully cure before the next was applied. The depth catches light differently at each angle.' },
  { slug: 'wood-and-weather',      images: [{ src: painting13, alt: 'Wood and weather' }],        title: 'Wood and weather',       medium: 'Scorched panel, earth pigment',       year: '2023', dimensions: '100 × 75 cm', blurb: 'Found oak left outdoors for a season, then scorched. The weathering pattern is preserved beneath the char, visible where the flame burned unevenly.' },
  { slug: 'slow-fire',             images: [{ src: painting14, alt: 'Slow fire' }],               title: 'Slow fire',              medium: 'Fire-darkened oak, resin pour',       year: '2024', dimensions: '80 × 60 cm',  blurb: 'A controlled burn held close to the surface for an extended time. The resin was poured molten and moved with gravity, pooling where the surface dipped.' },
  { slug: 'pale-ground',           images: [{ src: painting15, alt: 'Pale ground' }],             title: 'Pale ground',            medium: 'Encaustic, bleached linen',           year: '2023', dimensions: '60 × 90 cm',  blurb: 'Bleached linen encased in clear encaustic wax, worked until the surface became almost translucent. Minimal marks, most of the painting is the material itself.' },
  { slug: 'smoke-line',            images: [{ src: painting16, alt: 'Smoke line' }],              title: 'Smoke line',             medium: 'Oil, raw ash on panel',               year: '2022', dimensions: '90 × 70 cm',  blurb: 'Ash from the studio fire mixed into oil and applied in a single pass. The brush was loaded once; what it left is what remains.' },
  { slug: 'night-resin',           images: [{ src: painting17, alt: 'Night resin' }],             title: 'Night resin',            medium: 'Poured resin, charcoal, iron oxide',  year: '2024', dimensions: '100 × 80 cm', blurb: 'Charcoal and iron oxide suspended in resin, poured in the dark and left overnight. The pigments settled unevenly as the resin cured.' },
  { slug: 'char-and-field',        images: [{ src: painting1,  alt: 'Char and field' }],          title: 'Char and field',         medium: 'Burnt oak, iron oxide',               year: '2023', dimensions: '90 × 70 cm',  blurb: 'Iron oxide applied over a fully charred surface. Where the char was deepest the oxide sits on top; where it was lighter it sinks in and stains.' },
  { slug: 'still-water-dark-edge', images: [{ src: painting2,  alt: 'Still water, dark edge' }],  title: 'Still water, dark edge', medium: 'Resin, charcoal on linen',            year: '2023', dimensions: '80 × 60 cm',  blurb: 'Charcoal dust mixed into resin and poured slowly over linen stretched flat. The edge darkened as the resin pulled toward it while curing.' },
  { slug: 'low-smoke',             images: [{ src: painting3,  alt: 'Low smoke' }],               title: 'Low smoke',              medium: 'Oil, ash on panel',                   year: '2022', dimensions: '100 × 75 cm', blurb: 'Studio ash worked into oil paint on an oak panel. The ash resists full integration and remains partially visible as texture throughout.' },
  { slug: 'tallow-light',          images: [{ src: painting4,  alt: 'Tallow light' }],            title: 'Tallow light',           medium: 'Beeswax, pine resin on oak',          year: '2023', dimensions: '60 × 80 cm',  blurb: 'Beeswax and pine resin heated together and poured hot. The mixture cools at different rates on oak, leaving a surface that varies from matte to glossy across its extent.' },
  { slug: 'grain-burning',         images: [{ src: painting5,  alt: 'Grain, burning' }],          title: 'Grain, burning',         medium: 'Scorched panel, iron ground',         year: '2022', dimensions: '90 × 90 cm',  blurb: 'The flame was moved with the grain of the wood, emphasising its structure. Iron oxide was applied after scorching and burnished into the open grain.' },
  { slug: 'the-last-field',        images: [{ src: painting6,  alt: 'The last field' }],          title: 'The last field',         medium: 'Oil, resin on linen',                 year: '2023', dimensions: '80 × 60 cm',  blurb: 'Painted from memory of a specific field at a specific time of year. The oil and resin were mixed wet, allowed to pull apart as they dried.' },
  { slug: 'amber-interior',        images: [{ src: painting7,  alt: 'Amber interior' }],          title: 'Amber interior',         medium: 'Pine resin, beeswax, oil',            year: '2024', dimensions: '70 × 100 cm', blurb: 'Pine resin dominates, giving the surface a deep amber tone that shifts with the light. Beeswax was used to soften certain areas and reduce the resin\'s gloss.' },
];
