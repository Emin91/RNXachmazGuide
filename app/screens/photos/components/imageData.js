import {images} from '../../../constants/images';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const data = [
  {
    dimensions: {flex: 1, width: 200, height: randomInteger(150, 350)},
    title: 'Test',
    source: images.IMG_1,
  },
  {
    dimensions: {flex: 1, width: 200, height: randomInteger(150, 350)},
    title: 'Test 2',
    source: images.IMG_2,
  },
  {
    dimensions: {flex: 1, width: 200, height: randomInteger(150, 350)},
    title: 'Test',
    source: images.IMG_3,
  },
  {
    dimensions: {flex: 1, width: 200, height: randomInteger(150, 350)},
    title: 'Test 2',
    source: images.IMG_HISTORY,
  },
];
