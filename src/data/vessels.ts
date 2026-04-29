import type { Piece } from './paintings';

import vessel1 from '../assets/images/vessels/vessel 1.jpg';
import vessel1b from '../assets/images/vessels/vessel 1-2.jpg';
import vessel3 from '../assets/images/vessels/vessel 3.jpg';
import vessel3b from '../assets/images/vessels/vessel 3-2.jpg';
import vessel5 from '../assets/images/vessels/vessel 5.jpg';
import vessel7 from '../assets/images/vessels/vessel 7.jpg';
import vessel8 from '../assets/images/vessels/vessel 8.jpg';
import vessel8b from '../assets/images/vessels/vessel 8-2.jpg';
import vessel9 from '../assets/images/vessels/vessel 9.jpg';
import vessel9b from '../assets/images/vessels/vessel 9-2.jpg';
import vessel10 from '../assets/images/vessels/vessel 10.jpg';
import vessel10b from '../assets/images/vessels/vessel 10-2.jpg';
import vessel10c from '../assets/images/vessels/vessel 10-3.jpg';
import vessel11 from '../assets/images/vessels/vessel 11.jpg';
import vessel11b from '../assets/images/vessels/vessel 11-2.jpg';
import vessel11c from '../assets/images/vessels/vessel 11-3.jpg';
import vessel12 from '../assets/images/vessels/vessel 12.jpg';
import vessel12b from '../assets/images/vessels/vessel 12-2.jpg';
import vessel12c from '../assets/images/vessels/vessel 12-3.jpg';
import vessel12d from '../assets/images/vessels/vessel 12-4.jpg';
import vessel13 from '../assets/images/vessels/vessel 13.jpg';
import vessel13b from '../assets/images/vessels/vessel 13-2.jpg';
import vessel14 from '../assets/images/vessels/vessel 14.jpg';
import vessel14b from '../assets/images/vessels/vessel 14-2.jpg';
import vessel15 from '../assets/images/vessels/vessel 15.jpg';
import vessel15b from '../assets/images/vessels/vessel 15-2.jpg';
import vessel17 from '../assets/images/vessels/vessel 17.jpg';
import vessel18 from '../assets/images/vessels/vessel 18.jpg';
import vessel18b from '../assets/images/vessels/vessel 18-2.jpg';
import vessel19 from '../assets/images/vessels/vessel 19.jpg';
import vessel19b from '../assets/images/vessels/vessel 19-2.jpg';
import vessel20 from '../assets/images/vessels/vessel 20.jpg';
import vessel20b from '../assets/images/vessels/vessel 20-2.jpg';
import vessel21 from '../assets/images/vessels/vessel 21.jpg';
import vessel21b from '../assets/images/vessels/vessel 21-2.jpg';

export const vessels: Piece[] = [
  { slug: 'black-locust',   images: [{ src: vessel1, alt: 'Black Locust' }, { src: vessel1b, alt: 'Black Locust' }],   title: 'Black Locust',   medium: 'Black Locust felled in Southfields, London SW18',         year: '2026', dimensions: '37 × 22 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£750' },
  { slug: 'barriers-in-black-locust',         images: [{ src: vessel3, alt: 'Barriers In Black Locust' }, { src: vessel3b, alt: 'Barriers In Black Locust' }],       title: 'Barriers In Black Locust',       medium: 'Black Locust felled in Southfields, London SW18',   year: '2026', dimensions: '32 × 20 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£900' },
  { slug: 'barriers-in-black-locust-3',         images: [{ src: vessel14, alt: 'Barriers In Black Locust' }, { src: vessel14b, alt: 'Barriers In Black Locust' }],          title: 'Barriers In Black Locust',        medium: 'Black Locust felled in Southfields, London SW18', year: '2025', dimensions: '', blurb: 'Turned, carved, burnt and waxed.', price: '£850' },
  { slug: 'barriers-in-locust',         images: [{ src: vessel15b, alt: 'Barriers In Locust' }, { src: vessel15, alt: 'Barriers In Locust' }],          title: 'Barriers In Locust',        medium: 'Black Locust felled in Southfields, London SW18', year: '2025', dimensions: '37 × 26 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£750' },
  { slug: 'barriers-in-black-locust-2',          images: [{ src: vessel5,  alt: 'Barriers In Black Locust' }],         title: 'Barriers In Black Locust',        medium: 'Black Locust felled in Southfields, London SW18', year: '2026', dimensions: '25 × 24 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£500' },
  { slug: 'barriers-in-black-locust-4',           images: [{ src: vessel20, alt: 'Barriers In Black Locust' }, { src: vessel20b, alt: 'Barriers In Black Locust' }],             title: 'Barriers In Black Locust',           medium: 'Black Locust felled in Southfields, London SW18', year: '2026', dimensions: '', blurb: 'Turned, carved, burnt and waxed.', price: '£750' },
  { slug: 'barriers-in-maple-2', images: [{ src: vessel8, alt: 'Barriers in Maple' }, { src: vessel8b, alt: 'Barriers in Maple' }], title: 'Barriers in Maple', medium: 'Norwegian Maple Felled in Teddington, London', year: '2025', dimensions: '27 × 24 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£600' },
  { slug: 'barriers-in-maple',           images: [{ src: vessel13b, alt: 'Barriers In Maple' }, { src: vessel13, alt: 'Barriers In Maple' }],          title: 'Barriers In Maple',        medium: 'Norwegian Maple felled in Teddington, London', year: '2025', dimensions: '50 × 40 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£2000' },
  { slug: 'barriers-in-maple-6', images: [{ src: vessel21, alt: 'Barriers In Maple' }, { src: vessel21b, alt: 'Barriers In Maple' }], title: 'Barriers In Maple', medium: 'Norwegian Maple felled in Teddington, London', year: '2025', dimensions: '40 × 30 cm', blurb: 'Turned, carved, burnt and waxed.', price: 'POA' },
  { slug: 'barriers-in-maple-5',           images: [{ src: vessel18b, alt: 'Barriers In Maple' }, { src: vessel18, alt: 'Barriers In Maple' }],             title: 'Barriers In Maple',           medium: 'Norwegian Maple felled in Teddington, London', year: '2025', dimensions: '37 × 28 cm', blurb: 'Turned, carved, burnt and waxed.', price: 'POA' },
  { slug: 'barriers-in-maple-3', images: [{ src: vessel9, alt: 'Barriers in Maple' }, { src: vessel9b, alt: 'Barriers in Maple' }], title: 'Barriers in Maple', medium: 'Norwegian Maple Felled in Teddington, London', year: '2025', dimensions: '30 × 24 cm', blurb: 'Turned, carved, burnt and waxed.', price: '£600' },
  { slug: 'barriers-in-maple-4', images: [{ src: vessel10, alt: 'Barriers in Maple' }, { src: vessel10b, alt: 'Barriers in Maple' }, { src: vessel10c, alt: 'Barriers in Maple' }], title: 'Barriers in Maple', medium: 'Norwegian Maple Felled in Teddington, London', year: '2025', dimensions: '', blurb: 'Turned, carved, burnt and waxed.', price: '£400' },
  { slug: 'barriers-in-yew',     images: [{ src: vessel11c, alt: 'Barriers in Yew' }, { src: vessel11, alt: 'Barriers in Yew' }, { src: vessel11b, alt: 'Barriers in Yew' }],   title: 'Barriers in Yew',  medium: 'Yew felled in Teddington, London', year: '2025', dimensions: '35 × 32 cm', blurb: 'Turned, carved, burnt and waxed.', price: 'POA' },
  { slug: 'barriers-in-yew-2',   images: [{ src: vessel12, alt: 'Barriers in Yew' }, { src: vessel12b, alt: 'Barriers in Yew' }, { src: vessel12c, alt: 'Barriers in Yew' }, { src: vessel12d, alt: 'Barriers in Yew' }],   title: 'Barriers in Yew',  medium: 'Yew felled in Teddington, London', year: '2025', dimensions: '32 × 23 cm', blurb: 'Turned, carved, burnt and waxed.', price: 'POA' },
  { slug: 'vessel-17',           images: [{ src: vessel17, alt: 'Cherry Vase' }],             title: 'Cherry Vase',           medium: 'Cherry wood felled in Isleworth, London', year: '2024', dimensions: '30 × 16 cm', blurb: 'Turned, carved, burnt and waxed.', price: 'SOLD' },
  { slug: 'barriers-in-beech',           images: [{ src: vessel19, alt: 'Barriers In Beech' }, { src: vessel19b, alt: 'Barriers In Beech' }],             title: 'Barriers In Beech',           medium: 'Beech felled in Chiswick, London', year: '2025', dimensions: '', blurb: 'Turned, carved, burnt and waxed.', price: 'SOLD' },
];
