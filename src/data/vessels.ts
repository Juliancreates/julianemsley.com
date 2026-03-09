import type { Piece } from './paintings';

import vessel1 from '../assets/images/vessels/vessel 1.jpg';
import vessel2 from '../assets/images/vessels/vessel 2.jpg';
import vessel3 from '../assets/images/vessels/vessel 3.jpg';
import vessel4 from '../assets/images/vessels/vessel 4.jpg';
import vessel5 from '../assets/images/vessels/vessel 5.jpg';
import vessel6 from '../assets/images/vessels/vessel 6.jpg';

export const vessels: Piece[] = [
  { slug: 'salt-form',       images: [{ src: vessel1, alt: 'Salt form' }],       title: 'Salt form',       medium: 'Thrown stoneware, ash glaze',          year: '2023', dimensions: '28 × 14 cm' },
  { slug: 'char-vessel',     images: [{ src: vessel2, alt: 'Char vessel' }],     title: 'Char vessel',     medium: 'Coil-built, fire-blackened',           year: '2022', dimensions: '35 × 18 cm' },
  { slug: 'sealed-ewer',     images: [{ src: vessel3, alt: 'Sealed ewer' }],     title: 'Sealed ewer',     medium: 'Hand-built earthenware, pine resin',   year: '2023', dimensions: '32 × 16 cm' },
  { slug: 'wood-fired-form', images: [{ src: vessel4, alt: 'Wood-fired form' }], title: 'Wood-fired form', medium: 'Anagama, natural ash deposit',         year: '2022', dimensions: '40 × 20 cm' },
  { slug: 'dense-body',      images: [{ src: vessel5, alt: 'Dense body' }],      title: 'Dense body',      medium: 'Heavily grogged stoneware, reduction', year: '2023', dimensions: '30 × 15 cm' },
  { slug: 'dark-interior',   images: [{ src: vessel6, alt: 'Dark interior' }],   title: 'Dark interior',   medium: 'Thrown and altered, iron glaze',       year: '2024', dimensions: '36 × 17 cm' },
];
