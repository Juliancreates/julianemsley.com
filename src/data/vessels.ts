import type { Piece } from './paintings';

import vessel1 from '../assets/images/vessels/vessel 1.jpg';
import vessel2 from '../assets/images/vessels/vessel 2.jpg';
import vessel3 from '../assets/images/vessels/vessel 3.jpg';
import vessel4 from '../assets/images/vessels/vessel 4.jpg';
import vessel5 from '../assets/images/vessels/vessel 5.jpg';
import vessel6 from '../assets/images/vessels/vessel 6.jpg';

export const vessels: Piece[] = [
  { slug: 'salt-form',       images: [{ src: vessel1, alt: 'Salt form' }],       title: 'Salt form',       medium: 'Thrown stoneware, ash glaze',          year: '2023', dimensions: '28 × 14 cm', blurb: 'Thrown on the wheel and left to dry slowly. The ash glaze was applied unevenly, running thicker at the base where it pooled during firing.', video: '/images/vessels/Treehouse reel.mov', price: 'POA' },
  { slug: 'char-vessel',     images: [{ src: vessel2, alt: 'Char vessel' }],     title: 'Char vessel',     medium: 'Coil-built, fire-blackened',           year: '2022', dimensions: '35 × 18 cm', blurb: 'Coil-built over several sessions, the surface scored and compressed. Fired in a reduction atmosphere until the exterior was fully blackened.', price: 'POA' },
  { slug: 'sealed-ewer',     images: [{ src: vessel3, alt: 'Sealed ewer' }],     title: 'Sealed ewer',     medium: 'Hand-built earthenware, pine resin',   year: '2023', dimensions: '32 × 16 cm', blurb: 'Hand-built earthenware sealed inside and out with pine resin after bisque firing. The resin darkens the surface and makes the vessel watertight without a glaze.', price: 'POA' },
  { slug: 'wood-fired-form', images: [{ src: vessel4, alt: 'Wood-fired form' }], title: 'Wood-fired form', medium: 'Anagama, natural ash deposit',         year: '2022', dimensions: '40 × 20 cm', blurb: 'Fired for four days in an anagama kiln. The natural ash deposit from the wood settles on the surface and melts into a glaze, the markings entirely determined by the fire.', price: 'POA' },
  { slug: 'dense-body',      images: [{ src: vessel5, alt: 'Dense body' }],      title: 'Dense body',      medium: 'Heavily grogged stoneware, reduction',  year: '2023', dimensions: '30 × 15 cm', blurb: 'Heavily grogged clay gives the walls a coarse, mineral surface. The reduction firing drew iron from the clay body, leaving dark flashing across the form.', price: 'POA' },
  { slug: 'dark-interior',   images: [{ src: vessel6, alt: 'Dark interior' }],   title: 'Dark interior',   medium: 'Thrown and altered, iron glaze',       year: '2024', dimensions: '36 × 17 cm', blurb: 'Thrown and then pushed from the inside to distort the form. An iron-rich glaze was applied heavily to the exterior; the interior was left bare clay.', price: 'POA' },
];
